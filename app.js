App({
  onLaunch: function () {

    //登录:
    wx.login({
      success : res => {
        console.log('微信登录成功');
        console.log(res);
        // 使用 code 换取 openid 和 session_key 等信息
        if (res.code) {
          //发起网络请求
          // wx.request({
          //   url: 'https://test.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }


      }
    })

    //获取用户当前设置
    wx.getSetting({
      success : res => {
        console.log('用户当前设置');
        console.log(res);
        //如果已经授权,可以直接调用 getUserInfo 获取头像昵称，不会弹框
        if(res.authSetting['scope.userInfo']){
          console.log('授权成功');
          wx.getUserInfo({
            success:res=>{
              console.log(res);
              //可以将res 发送给后台 解码出unionID
              this.globalData.userInfo = res.userInfo;

              
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }

            },
            fail:err=>{ 
              console.log(err);
            }
          })


        }else{
          console.log('授权失败');
        }

        

      },
      fail:err=>{
        console.log(err);
      }
      
    })


  },
  globalData:{
    userInfo:null
  }
})
