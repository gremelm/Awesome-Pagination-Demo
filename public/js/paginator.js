jQuery(function($){
    $('.pagination-control').find('a').live('click', function(){
        var link = $(this);
        var container = link.parents('.paged-data-container');
        $.get(link.attr('href'), { format: 'html' }, function(data){
            container.html(data);
        }, 'html');
        return false;
    });
});