$(function() {

        PlatformCore.medialibrary = (function() {

                var config = {
                        container: '#medialibrary',
                        service: '/medialibrary/browse',
                        basepath: PlatformCore.config.medialibrary.basepath,
                        templatePath: 'packages/psimone/platform-core/tpl'
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

                        bindClick()

                        browse();
                };

                /**
                 * Call to the browse service
                 *
                 * @param {string} path
                 */
                var browse = function(path)
                {
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
                        }).done(function(data) {
                                render({
                                        "resources": data
                                }, target);
                        });
                };

                /**
                 * Render the service data
                 *
                 * @param {object} data
                 * @param {string} path
                 */
                var render = function(data, path)
                {
                        if (!isRoot(path))
                        {
                                data.resources.unshift({
                                        path: parentFolder(path),
                                        folder: true,
                                        name: 'back',
                                        extension: ''
                                });
                        }

                        loadTemplate('catalog.html').done(function(source) {
                                var template = Handlebars.compile(source);

                                var html = template(data);

                                $(config.container).empty().append(html);

                                Holder.run();
                        });
                };

                /**
                 * Dispatch the open event (doubleClick) for the items
                 *
                 * @param {object} obj
                 */
                var open = function(obj)
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
                var select = function(obj)
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
                        $(config.container).on('dblclick', '.resource', function() {
                                open(this);
                        });
                };

                /**
                 * Bind the click handler to the items
                 */
                var bindClick = function()
                {
                        $(config.container).on('click', '.resource', function() {
                                select(this);
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
                                success: function(data) {
                                        dfd.resolve(data);
                                }
                        });

                        return dfd.promise();
                };

                /**
                 * Check if the given path is the library root
                 *
                 * @param {string} path
                 */
                var isRoot = function(path)
                {
                        if (path === config.basepath)
                        {
                                return true;
                        }

                        return false;
                };

                /**
                 * Return the parent folder
                 *
                 * @param {string} path
                 */
                var parentFolder = function(path)
                {
                        if (isRoot(path))
                        {
                                return config.basepath;
                        }

                        var segments = pathToArray(path);

                        segments.pop();

                        return arrayToPath(segments);
                };

                /**
                 * Convert given path in an array of segments
                 *
                 * @param {string} path
                 * @returns {array}
                 */
                var pathToArray = function(path)
                {
                        return path.split('/');
                };

                /**
                 * Convert given array of segments in a path
                 *
                 * @param {array} segments
                 * @returns {string}
                 */
                var arrayToPath = function(segments)
                {
                        return segments.join('/');
                };

                var selectFile = function(path)
                {
                        var item = $(config.container).find('.resource[data-path="' + path + '"]');

                        item.addClass('selected');
                }

                /**
                 * Return of the public API
                 */
                return {
                        init: init
                };

        })();


        PlatformCore.medialibrary.init();

});