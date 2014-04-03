$(function(){
    $('.nav-tabs, .nav-pills').not('#mainNavigation').on('click','a',function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    
    $('.inline-help').tooltip({
        placement: 'top',
        trigger: 'hover'
    });
    
    $('.alert').alert();
    
    $('.modalDelete').on('click', null, function(e){
        e.preventDefault();
        
        $('#deleteModal')
            .data('href', $(this).attr('href'))
            .modal('show');
    });
    
    $('#deleteConfirm').bind('click', function(){
        window.location.href = $('#deleteModal').data('href');
    });
    
    
    $.fn.datetimepicker.defaults.language = ZZ.config.locale;
    $('.date.date-only').datetimepicker({
        pickTime: false
    });
    $('.date.time-only').datetimepicker({
        pickDate: false
    });
    $('.date.datetime').datetimepicker({});
    
    
    $('.lightbox').fancybox({
        maxHeight: 800,
        maxWidth: 600,
        minHeight: 480,
        minWidth: 640,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        closeBtn: false
    });
    
    $('textarea.rich').summernote({
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['insert', ['link']]
        ]
    });
    
    $('.btn.search').bind('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.table tr.filters').toggleClass('hidden');
    });
});