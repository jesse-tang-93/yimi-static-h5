/**
 * Created by txq on 2018/5/2.
 */
var carousel = layui.carousel,$=layui.jquery;

var winWidth=$(window).width();
if(winWidth>750&&winWidth<=1024){//auto 768-1024  兼容平板
    //轮播
    carousel.render({
        elem: '#indexCarousel'
        ,width: '100%' //设置容器宽度
        ,height:'240px'
        ,arrow: 'hover' //箭头
        ,interval:'2500'//轮播time
    });

}else{
    //轮播
    carousel.render({
        elem: '#indexCarousel'
        ,width: '100%' //设置容器宽度
        ,height:'470px'
        ,arrow: 'hover' //箭头
        ,interval:'2500'//轮播time
    });
}