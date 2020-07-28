// pages/form/picker.js

//日期
const date = new Date();
const years = [];
const months = [];
const days = [];

for(let i=1990;i<=date.getFullYear()+20;i++){
  years.push(i);
}

for(let i=1;i<=12;i++){
  months.push(i);
}

for(let i=1;i<=31;i++){
  days.push(i);
}

var index1 = years.indexOf(date.getFullYear());
var index2 = months.indexOf(date.getMonth())+1;
var index3 = days.indexOf(date.getDate());


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1) 省市区数据
    region:['江苏省','南京市','玄武区'],
    customItem:'全部',
    // 2) time时间数据
    time:"12:01",
    // 3) date日期数据
    date:"请选择",
    // 4)多列选择器数据
    // - 页面初始数据
    multiArr:[
      ['江苏省','安徽省','浙江省'],//列1 省
      ['南京市','无锡市']//列2 市
    ],
    citys:[
      ['南京市','无锡市'],
      ['合肥市','芜湖市','马鞍山市'],
      ['杭州市','温州市','宁波市','嘉兴市']
    ],
    multiIndex:[0,0], //默认列 下标

    // 5) 一级分类 -  二级分类 - 三级产品
    cateArr:[
      ['图书','服装','电器','玩具'],
      ['科幻','励志','悬疑','童话'],
      ['海底两万里','三体']
    ],//初始值
    cateIndex:[0,0,0],
    arr2:[
      [
        {
          name:'科幻',
          children:['海底两万里','三体']
        },
        {
          name:'励志',
          children:['青年文摘','谁的青春不迷茫','钢铁是怎样炼成的']
        },
        {
          name:'悬疑',
          children:['嫌疑人X的献身','白夜行','放学后']
        },
        {
          name:'童话',
          children:['格林童话','安徒生童话','小王子']
        }
      ],
      [
        {
          name:'男装',
          children:['格子衫','骑行服']
        },
        {
          name:'女装',
          children:['裙子','针织衫','泡泡袖']
        },
        {
          name:'童装',
          children:['蓬蓬裙','牛仔服','公主裙']
        }
      ],
      [
        {
          name:'洗衣机',
          children:['格力','海尔']
        },
        {
          name:'空调',
          children:['落地式','挂壁式','小米']
        },
        {
          name:'手机',
          children:['华为','魅族','努比亚']
        }
      ],
      [
        {
          name:'一岁',
          children:['跳跳蛙','玩偶','洋娃娃']
        },
        {
          name:'三岁',
          children:['芭比娃娃','皮球','乐高']
        },
        {
          name:'五岁',
          children:['奥特曼','变形金刚','小火车']
        }
      ]
    ],

    // 6）日期
    years:years,
    year:date.getFullYear(),
    months:months,
    month:date.getMonth()+1,
    days:days,
    day:date.getDate(),
    value:[index1,index2,index3],
    isDaytime:true

  },
  // 1) 省市区改变
  bindRegionChange:function(e){
    this.setData({
      region:e.detail.value
    })
  },
  // 2) time时间改变
  bindTimeChange:function(e){
    this.setData({
      time:e.detail.value
    })
  },

  // 3) date日期改变
  bindDateChange:function(e){
    this.setData({
      date:e.detail.value
    })
  },
  // 4) 多列选择器改变
  // 列改变
  bindMultiColumnChange:function(e){
    // console.log('修改的列',e.detail.column);
    // console.log('修改的值',e.detail.value);
    var data = {
      multiArr:this.data.multiArr,
      multiIndex:this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    // console.log(data);

    //匹配列：修改信息
    switch(e.detail.column){
      case 0://省
        console.log('省');
        data.multiArr[1] = this.data.citys[e.detail.value];//当前省的所有城市
        data.multiIndex[1] = 0;//默认选择第一个城市
        break;
      case 1://市
        console.log('市');
        break;
    }


   
    //更新配置数据信息
    this.setData(data);
    console.log('---bindColumnChange修改后的数据----');
    console.log(this.data.multiIndex);
    console.log(this.data.multiArr);
  },
  // 选择改变
  bindMultiChange:function(e){
    console.log('确认改变');
    console.log(e.detail.value);
    this.setData({
      multiIndex:e.detail.value
    })
  },

  // 5) 3级分类
  bindCateColumnChange:function(e){
    // console.log('分类的列变化');
    // console.log(e.detail);
    let data = {
      cateArr:this.data.cateArr,
      cateIndex:this.data.cateIndex
    };
    //修改 索引
    data.cateIndex[e.detail.column] = e.detail.value;
    //修改数据
    switch(e.detail.column){
      case 0://修改一级:找二级 和 三级
        //二级  this.data.arr2[e.detail.value]
        data.cateArr[1] = [];
        for(let key in this.data.arr2[e.detail.value]){
          data.cateArr[1].push(this.data.arr2[e.detail.value][key].name);
        }
        //三级 this.data.arr2[e.detail.value][0].children
        data.cateArr[2] = this.data.arr2[e.detail.value][0].children;
        data.cateIndex[1] = 0;
        data.cateIndex[2] = 0;

      break;
      case 1://修改二级
        //找到三级
        data.cateArr[2] = this.data.arr2[data.cateIndex[0]][e.detail.value].children;
        data.cateIndex[2] = 0;
      break;
    }

    // console.log(data);
    this.setData(data);

  },
  bindCateChange:function(e){
    // console.log('确认改变');
    // console.log(e.detail);
    this.setData({
      cateIndex:e.detail.value
    })

  },

  bindPickerViewChange:function(e){
    // console.log(e.detail);
    this.setData({
      year:this.data.years[e.detail.value[0]],
      month:this.data.months[e.detail.value[1]],
      day:this.data.days[e.detail.value[2]]
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