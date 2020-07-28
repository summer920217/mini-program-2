// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"https://sz-sycdn.kuwo.cn/0c70292183b7c1cea14fea1872d2394a/5f17df29/resource/n2/39/81/3430051340.mp3",
    poster:"https://img3.kuwo.cn/star/albumcover/300/56/21/2954495527.jpg",
    name:'少年',
    author:'梦然'

  },

  audioPlay:function(e){
    console.log(wx.createAudioContext('myAudio'));
    wx.createAudioContext('myAudio').play();
  },
  audioPause:function(e){
    console.log(wx.createAudioContext('myAudio'));
    wx.createAudioContext('myAudio').pause();
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