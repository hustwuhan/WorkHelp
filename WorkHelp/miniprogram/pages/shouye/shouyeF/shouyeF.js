// miniprogram/pages/shouye/shouyeF/shouyeF.js
const util = require('../../../JS/util.js')
const App = getApp()
Page({

  /**
   *
   * 页面的初始数据
   */
  data: {
   
    imgUrls: [
      "/images/shouye/1.jpg",
      "/images/shouye/2.jpg",
      "/images/shouye/3.jpg",
    ], 
    oppenid: '',
    Img:'',
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 4000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",
    kechengJ: '',
    kecheng:'',
    //背景颜色
    pageBackgroundColor: 'transparent',

    length:'',

    postBook: true,
    postThing: false,


    xuanzeC:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 获取云端创建课程数据
   */
  onReady: function () {
   

  },

  /**
   * 生命周期函数--监听页面显示
   */
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
  show1() { 
    var that = this;
    const db = wx.cloud.database()
    db.collection('CJkechen').where({
      _openid: that.data.openid,

    })
      .get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log('[上传图片] 成功：', res.data)
          that.setData({

            kecheng: res.data,
          })
          console.log('[上传图片] 功：', that.data.kecheng[0].Beizhu)
        }
      })
    db.collection('JoinKechen').where({
      _openid: that.data.openid,

    })
      .get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
         
          var Jkechen=res.data
          var z=0
          for(var v=0;v<Jkechen.length;v++)
          {
          
            db.collection('CJkechen').where({
              _id: Jkechen[v].kechen_id,
            
            }) 
              .get({
                success(res) {
                  console.log('ee：', res.data)
                    Jkechen[z]=res.data[0]
                    z++

                  that.setData({

                    kechengJ: Jkechen,
                  })
                    
                }
              })

          }
     
          console.log('加入课程：', that.data.kechengJ)
        }
      })
      
  },

  showRule: function () {
    this.setData({
      isRuleTrue: true
    })
  },
  hideRule: function () {
    this.setData({
      isRuleTrue: false
    })
  },

  onShow: function () {
    var that = this;
  
    new Promise(function (resolve, reject) {
      that.getOpenid(resolve);
    }).then(function () {
      that.show1();
    })
  
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
  

  choosePostBook: function() {
    var that = this;
    that.setData({
      postBook: true,
      postThing: false,
  
    })
  },
  choosePostThing: function() {
    var that = this;
    that.setData({
      postBook: false,
      postThing: true,
      postJob: false
    })
  },
  choosePostJob: function() {
    var that = this;
    that.setData({
      postBook: false,
      postThing: false,
      postJob: true
    })
},
  scan() {
    var that=this
    wx.scanCode({
      success: (res) => {
        console.log("扫码结果",res);
        console.log(res.result);
        that.setData({
          Img: res.result
       })
        const db = wx.cloud.database()
        db.collection('JoinKechen').where({
          kechen_id: res.result,
          _openid:that.data.openid
        })
          .get({
            success(res) {
              console.log("扫码结果2",res.data);
          if(res.data=='')
          {
            db.collection('click2').add({
               data: {
                 Djkc: that.data.Img,
                },
              })

              wx.navigateTo({
                url: '../../shouye/shouyeCk/shouyeCk'
               })
          }
              if (res.data != '')
              {
                
             
                wx.showToast({
                  title: '已添加的课程',
                })
              }

      },
     
    })
     
    }})
  },
  click: util.throttle(function (e) {
    var workerId = e.currentTarget.dataset.workerid;
    console.log("workerId------" + workerId);
  
    const db = wx.cloud.database()
    db.collection('click').add({
      data: {
        Djkc: workerId,
      },
      })
    wx.navigateTo({
      url: '../../shouye/shouye2/shouye2'
    })
  },3000),
  handleContact(e) {
    console.log(e.path)
    console.log(e.query)
  }
})

