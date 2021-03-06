var Bmob = require('../../utils/Bmob-2.2.1.min.js');
Bmob.initialize("417c83f6e9a9c139", "352609");

Page({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    username: '',
    password: ''
  },
  formName: function (e) {
    this.setData({
      username: e.detail.value
    })
  }, 
  formPwd: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  // 判断登录条件
  login: function (e){
    Bmob.User.login(this.data.username, this.data.password).then(res => {

      wx.showToast({
        title: '登录成功',
        icon: 'loading',
        duration: 2000
      })
      if (this.data.username == "admin") {
        wx.redirectTo({
          url: '/pages/indexroot/indexroot'
        })
      }
      else {
        wx.redirectTo({
          url: '/pages/index/index'
        })
      }
    }).catch(err => {
      console.log(err)
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none',
        duration: 2000
      })
    });
  }
})