// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal1:'',
    danmuList:[
      {
        text:'第1s出现哈哈哈',
        color:'#ff0000',
        time:1
      },
      {
        text:'第3s出现呵呵呵',
        color:'#ffff00',
        time:3
      },
      {
        text:'第3s出现aaaaaa',
        color:'#ffff00',
        time:3
      },
      {
        text:'第3s出现动画动画动画',
        color:'#ff00ff',
        time:3
      },
      {
        text:'第4s出现动画动画动画',
        color:'#ff00ff',
        time:4
      },
      {
        text:'第4s出现动画动画动画',
        color:'#ff00ff',
        time:4
      },
      {
        text:'第4s出现动画动画动画',
        color:'#0000ff',
        time:4
      },

    ]

  },

  bindInputBlur:function(e){
    console.log(e.detail.value);
    this.inputVal1 = e.detail.value;
  },
  //发送弹幕
  bindSendDanmu1:function(e){
    wx.createVideoContext('myVideo1').sendDanmu({
      text:this.inputVal1,
      color:'#0000ff'
    })
  },

  bindInputBlur2:function(e){
    console.log(e.detail.value);
    this.inputVal1 = e.detail.value;
  },
  //发送弹幕
  bindSendDanmu2:function(e){
    wx.createVideoContext('myVideo2').sendDanmu({
      text:this.inputVal1,
      color:'#0000ff'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})