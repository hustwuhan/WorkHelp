// pages/shouye/shouyeSt1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    JoinClass: true,
    ShowClass:false,
    classname:'',
    teacher:'',
    SouF:'',
  },
 

  //点击搜索会隐藏组件并将CJkechen的对应数据下载下来

  sousuo(e) {
var that = this;


//搜索数据
    const db2 = wx.cloud.database()
    db2.collection('CJkechen').where({
      kechen: that.data.classname,
      teacher: that.data.teacher,
    })
      .get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log('搜索结果：', res.data)
          that.setData({
            SouF:res,
          })
          console.log('搜索结果储存data：', that.data.SouF)
          }
          })
    that.setData({
      JoinClass: false,
      ShowClass: true,
    })

  },

  bind1(e){
    var that = this;
    that.setData({
      classname: e.detail.value,
    })
  },
  bind2(e){
    var that = this;
    that.setData({
      teacher: e.detail.value,

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
  click:function (e) {
    var workerId = e.currentTarget.dataset.workerid;
    console.log("workerId------" + workerId);

    const db = wx.cloud.database()
    db.collection('click2').add({
      data: {
        Djkc: workerId,
      },
    })
    wx.navigateTo({
      url: '../../shouye/shouyeCk/shouyeCk'
    })
  },
})