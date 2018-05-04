/**
 * Created by txq on 2018/4/28.
 */
var carousel = layui.carousel,$=layui.jquery,form = layui.form,element = layui.element;

var winWidth=$(window).width();
if(winWidth>750&&winWidth<=1024){//auto 768-1024  兼容平板
    //banner轮播
    carousel.render({
        elem: '#indexCarousel'
        ,width: '100%' //设置容器宽度
        ,height:'240px'
        ,arrow: 'hover' //箭头
        ,interval:'2500'//轮播time
    });

}else{
    //banner轮播
    carousel.render({
        elem: '#indexCarousel'
        ,width: '100%' //设置容器宽度
        ,height:'470px'
        ,arrow: 'hover' //箭头
        ,interval:'2500'//轮播time
    });
    //团队
    carousel.render({
        elem: '#team'
        ,arrow: 'always'
        ,width: '100%' //设置容器宽度
        ,height:'333px'
        ,interval:'2000'//轮播time
    });
    //房源
    carousel.render({
        elem: '#houseBox'
        ,arrow: 'none'
        ,width: '100%' //设置容器宽度
        ,height:'365px'
        ,interval:'2000'//轮播time
    });
}