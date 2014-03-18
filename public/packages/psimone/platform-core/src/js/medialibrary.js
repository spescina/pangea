$(function(){

        var browseUrl = 'medialibrary/browse/' + PlatformCore.medialibrary.basepath;
        
        $.getJSON( browseUrl, function(data) {
                console.log(data);
        });

});