// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems:[
      {name:'USA',value:'美国'},
      {name:'CHN',value:'中国'},
      {name:'JAPAN',value:'日本'}
    ],
    radioItems:[
      {name:'boy',value:'男'},
      {name:'girl',value:'女'},
      {name:'unknown',value:'不详'}
    ],
    proArr:['江苏','安徽','湖南','湖北','河北','浙江'],
    index:0,
    stus:[
      {id:'10001',name:'apple',age:15},
      {id:'10002',name:'banana',age:16},
      {id:'10003',name:'mary',age:17},
      {id:'10004',name:'jerry',age:18}
    ],
    stuindex:0

  },
  bindChangePro:function(e){//省份改变
    console.log(e.detail.value);
    this.setData({
      index:e.detail.value
    })
  },
  bindChangeStu:function(e){//学生改变
    console.log(e.detail.value);
    this.setData({
      stuindex:e.detail.value
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

  },

  getUserinfo(e){
    console.log(e);
  }

})