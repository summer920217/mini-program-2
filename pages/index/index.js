//获取应用实例
const app = getApp();


//展示页面
Page({
  data:{
    explain:"青春毕业歌会！",
    userInfo:{},
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo')
  },
  //页面加载
  onLoad:function(){
    console.log('页面加载完成');
    //如果已经获取过用户信息
    console.log(app);
    console.log(app.globalData.userInfo);
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })

    }else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }



  },

  //获取用户信息 处理函数
  getUserInfo:function(e){
    console.log('点击按钮获取信息');
    //存入全局
    app.globalData.userInfo = e.detail.userInfo;
    console.log(app);
    
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true
    })
  }

})