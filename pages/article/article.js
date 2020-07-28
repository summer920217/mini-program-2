// article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons:[
      {key:"视图容器",id:'0'},
      {key:"基础内容",id:'1'},
      {key:"表单组件",id:'2'}
    ]
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

  // 处理函数
  choose:function(e){
    let id = e.currentTarget.id;
    switch(id){
      case "0":this.getView();break;
      case "1":this.getBasic();break;
      case "2":this.getForm();break;
    }
  },

  //调用对应的操作
  getView(){
    wx.navigateTo({
      url: '../view/view',
    })
  },
  getBasic(){
    wx.navigateTo({
      url: '../basic/basic',
    })

  },
  getForm(){
    wx.navigateTo({
      url: '../form/form',
    })

  }




})