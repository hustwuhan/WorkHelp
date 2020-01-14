// miniprogram/pages/Zuoye/tFANkui/tfankui.js
var wxCharts=require('../../../JS/wxcharts.js')
var app = getApp();
var pieChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allpinjia:[],
    every:[],
    djZuoye:'',
    openid:'',
    pinjiaZ:'',
    chartData:'',
    xianshi:false,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
    onLoad: function (e) {
     
    },


  
  currentBarChange1: function (resolve) {
    setTimeout(() => {
      var that = this
      const db = wx.cloud.database()
      var g = []

      var every=[]
      var a=that.data.currentData

      for (var e = 0; e < that.data.pinjiaZ.length; e++) {
        for (var t = 0; t < that.data.pinjiaZ[e].pinjia.length; t++) {
            if(that.data.pinjiaZ[e].pinjia[t].tihao==a.name)
            {
              every.push(that.data.pinjiaZ[e].pinjia[t])
            }
          console.log('oppenid：', every)
        }
      }
      that.setData({
        every:every
      })
      setTimeout(() => {
        if (resolve != null) {
          resolve('ok')
        }
      }, 500)
    })
  },
  currentBarChange2: function () {

    var that = this
    var O1=new Object()
    var O2 = new Object()
    var O3 = new Object()
    O1.name = '难度0 - 4'
    O2.name = '难度5 - 7'
    O3.name = '难度8 - 10'
    O1.data=0
    O2.data = 0
    O3.data = 0

   for(var i=0;i<that.data.every.length;i++)
   {
     if (that.data.every[i].nandu >= 1 && that.data.every[i].nandu<=4)
     {
        O1.data++

     }
     if (that.data.every[i].nandu >= 5 && that.data.every[i].nandu <= 7) {
       O2.data++

     }
     if (that.data.every[i].nandu >= 8 && that.data.every[i].nandu <= 10) {
       O3.data++

     }

   }
   var allpinjia=[]
    for (var t = 0; t < that.data.every.length; t++)
    {
      if (that.data.every[t].pinjia.length!=0)
      {
        console.log('radio发生change事件，携带value值为：')
        allpinjia.push(that.data.every[t].pinjia[0])
      }
    }
    that.setData({
      allpinjia:allpinjia
    })


    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [O1,O2,O3],
      width: windowWidth,
      height: 270,
      dataLabel: true,
    });


  },
  currentBarChange: function (e) {

    console.log(e.detail);
    var that = this;
    this.setData({
      currentData: e.detail,
      xianshi:true,
 
    })

    new Promise(function (resolve, reject) {
      that.currentBarChange1(resolve);
    }).then(function () {
      that.currentBarChange2();
    })



  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getOpenid: function (resolve) {
    var that = this;
    wx.cloud.callFunction({
      name: 'oppenid',
      complete: res => {
        console.log('云函数获取到的openid: ', res.result.openid)
        var openid1 = res.result.openid;
        that.setData({
          openid: openid1,

        })
        if (resolve != null) {
          resolve('ok')
        }
        console.log('oppenid：', that.data.openid)
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;

    new Promise(function (resolve, reject) {
      that.getOpenid(resolve);
    }).then(function () {
      that.show1();
    })

  },

  show1: function () {
    var that=this
    const db = wx.cloud.database()
    db.collection('clickF').where({
      _openid: that.data.openid,

    })
      .get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log('[上传点击事件] 成功：', res.data)
          that.setData({

            djZuoye: res.data,
          })
          console.log('[上传点击事件] 功：', that.data.djZuoye[0].DjZY)
          db.collection('PinJIA').where({
            Zuoye_id: that.data.djZuoye[0].DjZY,

          })
            .get({
              success(res) {
                console.log('[上传点击事件] 成功：', res.data)
               
                var chartData=[]
               
                that.setData({

                  pinjiaZ: res.data,
                })
                for(var i=0;i<that.data.pinjiaZ[0].pinjia.length;i++)
                {
                  console.log('chrtdata：')
                  if (that.data.pinjiaZ[0].pinjia[i].tihao.length!=0)
                  {
                    console.log('chrtdata：',that.data.pinjiaZ[0].pinjia[i].tihao)
                    var to=new Object()
                    to.value=0
                    to.name = that.data.pinjiaZ[0].pinjia[i].tihao
                    for(var e=0;e<that.data.pinjiaZ.length;e++)
                    { 
                      to.value =(to.value +that.data.pinjiaZ[e].pinjia[i]                                          .nandu)
                    }
                    to.value = to.value/ that.data.pinjiaZ.length
                    to.value = to.value.toFixed(1);
                    chartData.push(to)
                    console.log('chrtdata：', chartData)
                    that.setData({
                      chartData:chartData
                    })
                  }
                }
             
              }})
        
          const db1 = wx.cloud.database()
          db1.collection('clickF').doc(that.data.djZuoye[0]._id).remove({

          })
        }})

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
    var that=this
that.setData({

  xianshi: false,
})
  
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