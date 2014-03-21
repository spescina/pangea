$(function() {

        PlatformCore.medialibrary = (function() {

                var config = {
                        field: PlatformCore.config.medialibrary.field,
                        service: '/medialibrary/browse',
                        basepath: PlatformCore.config.medialibrary.config.basepath,
                        templatePath: 'packages/psimone/platform-core/tpl',
                        selectors: {
                                container: '#medialibrary',
                                item: '.resource',
                                selectedClass: 'selected'
                        }
                };

                /**
                 * Init of the component
                 *
                 * @param {object} settings
                 */
                var init = function(settings)
                {
                        $.extend(config, settings);

                        setup();
                };

                /**
                 * Setup of the component
                 */
                var setup = function()
                {
                        bindDoubleClick();

                        bindClick();

                        bindButtons();

                        browse().done(selectValue);
                };

                /**
                 * Call to the browse service
                 *
                 * @param {string} path
                 */
                var browse = function(path)
                {
                        var dfd = new jQuery.Deferred();
                        
                        var target;

                        if (typeof path === 'undefined')
                        {
                                target = config.basepath;
                        }
                        else
                        {
                                target = path;
                        }

                        $.post(config.service, {
                                path: target
                        }).done(function(data)
                        {
                                render({ "resources": data }, target).done(function()
                                {
                                        dfd.resolve(data);
                                });
                        });
                        
                        return dfd.promise();
                };

                /**
                 * Render the service data
                 *
                 * @param {object} data
                 * @param {string} path
                 */
                var render = function(data, path)
                {
                        var dfd = new jQuery.Deferred();
                        
                        loadTemplate('catalog.html').done(function(source)
                        {                                
                                var template = Handlebars.compile(source);

                                var html = template(data);

                                container().empty().append(html);

                                Holder.run();
                                
                                dfd.resolve();
                        });
                        
                        return dfd.promise();
                };

                /**
                 * Dispatch the open event (doubleClick) for the items
                 *
                 * @param {object} obj
                 */
                var handleDoubleClick = function(obj)
                {
                        var $item = $(obj);

                        if ($item.data('folder'))
                        {
                                openFolder(obj);
                        }
                };

                /**
                 * Dispatch the select event (click) for the items
                 *
                 * @param {object} obj
                 */
                var handleClick = function(obj)
                {
                        var $item = $(obj);

                        if (!$item.data('folder'))
                        {
                                selectFile(obj);
                        }
                };

                /**
                 * Handle the open event on the folder items
                 * Call to the browse service with the choosen path
                 *
                 * @param {object} obj
                 */
                var openFolder = function(obj)
                {
                        var path = $(obj).data('path');

                        browse(path);
                };

                /**
                 * Bind the doubleClick handler to the items
                 */
                var bindDoubleClick = function()
                {
                        container().on('dblclick', '.resource', function()
                        {
                                handleDoubleClick(this);
                        });
                };

                /**
                 * Bind the click handler to the items
                 */
                var bindClick = function()
                {
                        container().on('click', '.resource', function()
                        {
                                handleClick(this);
                        });
                };

                /**
                 * Load a hanldlebars template file
                 *
                 * @param {string} tpl
                 * @returns {jQueryObject}
                 */
                var loadTemplate = function(tpl)
                {
                        var dfd = new jQuery.Deferred();

                        $.ajax({
                                url: '/' + config.templatePath + '/' + tpl,
                                cache: true,
                                success: function(data)
                                {
                                        dfd.resolve(data);
                                }
                        });

                        return dfd.promise();
                };

                /**
                 * Handle the select event of the folder items
                 *
                 * @param {object} obj
                 */
                var selectFile = function(obj)
                {
                        var path = $(obj).data('path');
                        
                        selected().removeClass(config.selectors.selectedClass);

                        var item = container().find('.resource[data-path="' + path + '"]');

                        item.toggleClass('selected');
                };

                /**
                 * Buttons binding
                 */
                var bindButtons = function()
                {
                        $('#btn-upload').on('click', upload);

                        $('#btn-create-folder').on('click', createFolder);

                        $('#btn-delete-folder').on('click', deleteFolder);

                        $('#btn-select').on('click', function(e)
                        {
                                e.preventDefault();

                                pick();
                        });

                        $('#btn-cancel').on('click', function(e)
                        {
                                e.preventDefault();

                                close();
                        });
                };

                /**
                 * Close medialibrary panel
                 */
                var close = function()
                {
                        parent.$.fancybox.close();
                };

                /**
                 * Upload
                 *
                 * @param {event} e
                 */
                var upload = function(e)
                {
                };

                /**
                 * Create a new folder
                 *
                 * @param {event} e
                 */
                var createFolder = function(e)
                {
                };

                /**
                 * Delete a folder
                 *
                 * @param {event} e
                 */
                var deleteFolder = function(e)
                {
                };

                /**
                 * Pick a file
                 */
                var pick = function()
                {
                        var selectedPath = selected().data('path');

                        parent.$('input[name="' + config.field + '"]').val(selectedPath);

                        close();
                };
                
                var container = function()
                {
                        return $(config.selectors.container);
                };
                
                var items = function()
                {
                        return container().find(config.selectors.item);
                };
                
                var selected = function()
                {
                        return items().filter('.' + config.selectors.selectedClass);
                };
                
                var selectValue = function()
                {
                        var item = searchValue(PlatformCore.config.medialibrary.value);
                        
                        item.click();
                };
                
                var searchValue = function(val)
                {
                        return items().filter('[data-path="' + val + '"]').first();
                };

                /**
                 * Return of the public API
                 */
                return {
                        init: init
                };

        })();


        PlatformCore.medialibrary.init();

});