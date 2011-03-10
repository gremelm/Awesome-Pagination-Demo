jQuery(function($){
    $('.pagination-control').find('a').live('click', function(){
        var link = $(this);
        var container = link.parents('.paged-data-container');
        var pos = link.attr('rel') == 'next' ? '-120%' : '120%';
        container.find('.data').animate({
            left: pos
        }, 'slow', function(){
            var dataContainer = container.find('.paged-data').addClass('loading');
            $.get(link.attr('href'), { format: 'html' }, function(data){
                dataContainer.removeClass('loading');
                container.html(data);
            }, 'html');
        });
        return false;
    });
});