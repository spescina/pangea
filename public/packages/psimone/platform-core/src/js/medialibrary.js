$(function() {

    PlatformCore.medialibrary = (function() {

        var config = {
            container: '#medialibrary',
            service: '/medialibrary/browse',
            basepath: PlatformCore.config.medialibrary.basepath
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
            bindOpenFolder();

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
                render(data);
            });
        };

        /**
         * Render the service data
         * 
         * @param {object} data
         */
        var render = function(data)
        {
            var item,
                html = $('<ul />');

            for (var i = 0, l = data.length; i < l; i++)
            {
                item = renderEach(data[i]);

                html.append(item);
            }

            $(config.container).empty().append(html);
        };
        
        /**
         * Build the view of each item in the data list
         * 
         * @param {object} data
         * @returns {string} the item html view
         */
        var renderEach = function(data)
        {
            var item = $('<li />').data('path', data.path);

            if (data.folder)
            {
                item.data('folder', 1);
            }

            item.text(data.name);

            return item;
        };

        /**
         * Dispatch the open event (doubleClick) for the items
         * 
         * @param {object} obj
         */
        var open = function(obj)
        {
            var $item = $(obj);

            if ($item.data('folder') === 1)
            {
                openFolder(obj);
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
        var bindOpenFolder = function()
        {
            $(config.container).on('dblclick', 'li', function() {
                open(this);
            });
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