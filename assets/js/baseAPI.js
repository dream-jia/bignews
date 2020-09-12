$(function(){




    //每次调用那些函数之前可以使用ajaxPrefilter这个函数
    $.ajaxPrefilter(function(options){
    //console.log(options);
    //发起请求之前统一拼接请求的根路径
   options.url='http://ajax.frontend.itheima.net'+options.url
    
    })
})