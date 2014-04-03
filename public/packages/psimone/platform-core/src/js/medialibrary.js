$(function() {
        
        ZZ.medialibrary = (function() {

                var currentPath;

                var config = {
                        field: ZZ.config.medialibrary.field,
                        services: {
                                browse: '/medialibrary/browse',
                                filesUpload: '/medialibrary/upload',
                                folderCreate: '/medialibrary/folder_create',
                                folderDelete: '/medialibrary/folder_delete'
                        },
                        basepath: ZZ.config.medialibrary.config.basepath,
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
                        uploadButton();
                        
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

                        $.post(config.services.browse, {
                                path: target
                        }).done(function(data)
                        {
                                currentPath = target;
                                
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

                        if (!$item.hasClass('back'))
                        {
                                highlight(obj);

                                if ($item.data('folder'))
                                {
                                        $('#btn-delete-folder').removeClass('hidden');
                                        $('#btn-select').addClass('hidden');
                                }
                                else
                                {
                                        $('#btn-select').removeClass('hidden');
                                        $('#btn-delete-folder').addClass('hidden');
                                }
                        }
                        else
                        {
                                $('#btn-select').addClass('hidden');
                                $('#btn-delete-folder').addClass('hidden');
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
                        var ajax = new ZZ.ajax({ cache: true, dataType: 'html' });
                        
                        var url = '/' + config.templatePath + '/' + tpl;
                        
                        return ajax.run(url);
                };

                /**
                 * Handle the select event of the folder items
                 *
                 * @param {object} obj
                 */
                var highlight = function(obj)
                {
                        items().removeClass(config.selectors.selectedClass);
                        
                        $(obj).toggleClass(config.selectors.selectedClass);
                };

                /**
                 * Buttons binding
                 */
                var bindButtons = function()
                {
                        $('#btn-upload').on('click', upload);

                        $('#btn-create-folder').on('click', function(e)
                        {
                                e.preventDefault();
                                
                                createFolderToggleUI();
                        });

                        $('#btn-delete-folder').on('click', function(e)
                        {
                                e.preventDefault();
                                
                                var folder = selected().data('path');
                                
                                if (folder)
                                {                                
                                        deleteFolder(folder).done(function()
                                        {
                                                browse(currentPath).done(function(){
                                                        deleteFolderToggleUI();
                                                });
                                        });
                                }
                        });
                        
                        $('#btn-confirm').on('click', function(e)
                        {
                                e.preventDefault();
                                
                                var folder = $('#input-folder').val();
                                
                                if (folder)
                                {                                
                                        createFolder(folder).done(function()
                                        {
                                                browse(currentPath).done(function()
                                                {
                                                        createFolderToggleUI();
                                                });
                                        });
                                }
                        });

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
                
                var createFolderToggleUI = function()
                {
                        $('#input-folder').toggleClass('hidden');
                                
                        $('#btn-confirm').toggleClass('hidden');

                        $(this).toggleClass('hidden');
                };
                
                var deleteFolderToggleUI = function()
                {
                        $('#btn-delete-folder').toggleClass('hidden');
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
                 * @param {string} e
                 */
                var createFolder = function(folder)
                {
                        var ajax = new ZZ.ajax({ type: 'POST' });
                        
                        return ajax.run(config.services.folderCreate, {
                                path: currentPath,
                                folder: folder
                        });
                };

                /**
                 * Delete a folder
                 *
                 * @param {string} e
                 */
                var deleteFolder = function(folder)
                {
                        var ajax = new ZZ.ajax({ type: 'POST' });
                        
                        return ajax.run(config.services.folderDelete, {
                                folder: folder
                        });
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
                        var item = searchValue(ZZ.config.medialibrary.value);
                        
                        item.click();
                };
                
                var searchValue = function(val)
                {
                        return items().filter('[data-path="' + val + '"]').first();
                };
                
                var uploadButton = function()
                {
                        $('#fileupload').fileupload({
                                url: config.services.filesUpload,
                                dataType: 'json',
                                done: function(e, data) {
                                        $.each(data.result.files, function(index, file) {
                                                console.log(file.name);
                                        });
                                }
                        });
                };

                /**
                 * Return of the public API
                 */
                return {
                        init: init
                };

        })();


        ZZ.medialibrary.init();

});