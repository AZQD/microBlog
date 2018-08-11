$(function () {
    var $tabItem = $('.wrapper .container .detail-main .ctrl-box .menu .tab-item');
    var $listItem = $('.wrapper .container .detail-main .ctrl-box .showList .item-list');
    $tabItem.unbind('click').bind('click', function () {
        var index = $(this).index();
        $tabItem.removeClass('active').eq(index).addClass('active');
        $listItem.hide().eq(index).show();
    });
});