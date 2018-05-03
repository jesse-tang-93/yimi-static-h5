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
    //恭喜轮播
    carousel.render({
        elem: '#xixun'
        ,width: '100%' //设置容器宽度
        ,height:'112px'
        ,interval:'1500'//轮播time
        ,indicator:'none'
        ,anim:'updown'
        ,arrow:'none'
    });
    //活动轮播
    carousel.render({
        elem: '#activeCar'
        ,width: '100%' //设置容器宽度
        ,height:'350px'
        ,interval:'1500'//轮播time
        ,arrow:'none'
    });
    //房产轮播
    carousel.render({
        elem: '#houseCar'
        ,width: '100%' //设置容器宽度
        ,height:'350px'
        ,interval:'1500'//轮播time
        ,arrow:'none'
    });
}
//免费抽取签证表单提交
form.on('submit(getVisa)', function(data){
    var data=data.field;
    console.log(data);//打印json格式的提交字段
    return false;//阻止提交
    $.ajax({//验证通过进行ajsx提交数据
        url:"",
        type:"POST",
        dataType:"JSON",
        data:data,
        success:function(){
            
        },
        error:function () {
            
        }
    })
});