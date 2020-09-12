$(function () {
    $('.link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('.link_log').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    var form = layui.form
    var layer = layui.layer
    //导入了layui的js,直接使用layui这个对象就可以使用
    form.verify({
        // 自定义了一个叫做 pwd 校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 校验两次密码是否一致的规则
        repwd: function (value) {
            // 通过形参拿到的是确认密码框中的内容
            // 还需要拿到密码框中的内容
            // 然后进行一次等于的判断
            // 如果判断失败,则return一个提示消息即可
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })


    $('#form_reg').on('submit', function (e) {
        //阻止默认的提交行为
        e.preventDefault()
        $.post(
            '/api/reguser', {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功')

        })
    })
    
  $('#form_login').submit(function(e){
    e.preventDefault()
    $.ajax({
        url:'/api/login',
        method:'post',
        data:$(this).serialize(),
        success:function(res){
           //console.log(res);
            if (res.status !==0){
                return layer.msg('登录失败')
            }
            layer.msg('登录成功')
            //console.log(res.token);
            localStorage.setItem('token',res.token)
            location.href='/index.html'
        }
    })






  })



})
