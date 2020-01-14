// miniprogram/pages/Student/FanKui/FanKui.js
const util = require('../../../JS/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _id: '',
    openid:'',
    ZuoyeChoose:'',
    kechenChoose: '',
    zhankaiA:true,
    zhankaiA2:false,
    zhankaiB: true,
    zhankaiB2: false,
    zhankaiC: true,
    zhankaiC2: false,
    zhankaiD: true,
    zhankaiD2: false,
    zhankaiE: true,
    zhankaiE2: false,
    zhankaiF: true,
    zhankaiF2: false,
    zhankaiG: true,
    zhankaiG2: false,
    zhankaiH: true,
    zhankaiH2: false,
    zhankaiI: true,
    zhankaiI2: false,
    zhankaiJ: true,
    zhankaiK2: false,
    zhankaiL: true,
    zhankaiL2: false,
    zhankaiM: true,
    zhankaiM2: false,
    zhankaiN: true,
    zhankaiN2: false,
    zhankaiO: true,
    zhankaiO2: false,
    zhankaiP: true,
    zhankaiP2: false,
    zhankaiQ: true,
    zhankaiQ2: false,
    zhankaiR: true,
    zhankaiR2: false,
    zhankaiS: true,
    zhankaiS2: false,
    zhankaiT: true,
    zhankaiT2: false,
    tihao1: [],
    tihao2: [],
    tihao3: [],
    tihao4: [],
    tihao5: [],
    tihao6: [],
    tihao7: [],
    tihao8: [],
    tihao9: [],
    tihao10: [],
    tihao11: [],
    tihao12: [],
    tihao13: [],
    tihao14: [],
    tihao15: [],
    tihao16: [],
    tihao17: [],
    tihao18: [],
    tihao19: [],
    tihao20: [],
    slide1: '',
    slide2: '',
    slide3: '',
    slide4: '',
    slide5: '',
    slide6: '',
    slide7: '',
    slide8: '',
    slide9: '',
    slide10: '',
    slide11: '',
    slide12: '',
    slide13: '',
    slide14: '',
    slide15: '',
    slide16: '',
    slide17: '',
    slide18: '',
    slide19: '',
    slide20: '',
    allPut:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  zhankaiA: function (e) {

    this.setData({
    zhankaiA:false,
    zhankaiA2:true,
    })
  },
  zhankaiA2: function (e) {

    this.setData({
      zhankaiA: true,
      zhankaiA2: false,
    })
  },
  zhankaiB: function (e) {

    this.setData({
      zhankaiB: false,
      zhankaiB2: true,
    })
  },
  zhankaiB2: function (e) {

    this.setData({
      zhankaiB: true,
      zhankaiB2: false,
    })
  },
  zhankaiC: function (e) {

    this.setData({
      zhankaiC: false,
      zhankaiC2: true,
    })
  },
  zhankaiC2: function (e) {

    this.setData({
      zhankaiC: true,
      zhankaiC2: false,
    })
  },

  zhankaiD: function (e) {

    this.setData({
      zhankaiD: false,
      zhankaiD2: true,
    })
  },
  zhankaiD2: function (e) {

    this.setData({
      zhankaiD: true,
      zhankaiD2: false,
    })
  },

  zhankaiE: function (e) {

    this.setData({
      zhankaiE: false,
      zhankaiE2: true,
    })
  },
  zhankaiE2: function (e) {

    this.setData({
      zhankaiE: true,
      zhankaiE2: false,
    })
  },
  zhankaiF: function (e) {

    this.setData({
      zhankaiF: false,
      zhankaiF2: true,
    })
  },
  zhankaiF2: function (e) {

    this.setData({
      zhankaiF: true,
      zhankaiF2: false,
    })
  },

  zhankaiG: function (e) {

    this.setData({
      zhankaiG: false,
      zhankaiG2: true,
    })
  },
  zhankaiG2: function (e) {

    this.setData({
      zhankaiG: true,
      zhankaiG2: false,
    })
  },
  zhankaiH: function (e) {

    this.setData({
      zhankaiH: false,
      zhankaiH2: true,
    })
  },
  zhankaiH2: function (e) {

    this.setData({
      zhankaiH: true,
      zhankaiH2: false,
    })
  },

  zhankaiI: function (e) {

    this.setData({
      zhankaiI: false,
      zhankaiI2: true,
    })
  },
  zhankaiI2: function (e) {

    this.setData({
      zhankaiI: true,
      zhankaiI2: false,
    })
  },
  zhankaiJ: function (e) {

    this.setData({
      zhankaiJ: false,
      zhankaiJ2: true,
    })
  },
  zhankaiJ2: function (e) {

    this.setData({
      zhankaiJ: true,
      zhankaiJ2: false,
    })
  },
  zhankaiK: function (e) {

    this.setData({
      zhankaiK: false,
      zhankaiK2: true,
    })
  },
  zhankaiK2: function (e) {

    this.setData({
      zhankaiK: true,
      zhankaiK2: false,
    })
  },

  zhankaiL: function (e) {

    this.setData({
      zhankaiL: false,
      zhankaiL2: true,
    })
  },
  zhankaiL2: function (e) {

    this.setData({
      zhankaiL: true,
      zhankaiL2: false,
    })
  },
  zhankaiM: function (e) {

    this.setData({
      zhankaiM: false,
      zhankaiM2: true,
    })
  },
  zhankaiM2: function (e) {

    this.setData({
      zhankaiM: true,
      zhankaiM2: false,
    })
  },

  zhankaiN: function (e) {

    this.setData({
      zhankaiN: false,
      zhankaiN2: true,
    })
  },
  zhankaiN2: function (e) {

    this.setData({
      zhankaiN: true,
      zhankaiN2: false,
    })
  },

  zhankaiO: function (e) {

    this.setData({
      zhankaiO: false,
      zhankaiO2: true,
    })
  },
  zhankaiO2: function (e) {

    this.setData({
      zhankaiO: true,
      zhankaiO2: false,
    })
  },
  zhankaiP: function (e) {

    this.setData({
      zhankaiP: false,
      zhankaiP2: true,
    })
  },
  zhankaiP2: function (e) {

    this.setData({
      zhankaiP: true,
      zhankaiP2: false,
    })
  },

  zhankaiQ: function (e) {

    this.setData({
      zhankaiQ: false,
      zhankaiQ2: true,
    })
  },
  zhankaiQ2: function (e) {

    this.setData({
      zhankaiQ: true,
      zhankaiQ2: false,
    })
  },

  zhankaiR: function (e) {

    this.setData({
      zhankaiR: false,
      zhankaiR2: true,
    })
  },
  zhankaiR2: function (e) {

    this.setData({
      zhankaiR: true,
      zhankaiR2: false,
    })
  },
  zhankaiS: function (e) {

    this.setData({
      zhankaiS: false,
      zhankaiS2: true,
    })
  },
  zhankaiS2: function (e) {

    this.setData({
      zhankaiS: true,
      zhankaiS2: false,
    })
  },
  zhankaiT: function (e) {

    this.setData({
      zhankaiT: false,
      zhankaiT2: true,
    })
  },
  zhankaiT2: function (e) {

    this.setData({
      zhankaiT: true,
      zhankaiT2: false,
    })
  },
Allput(e) {

    console.log('数值', e.detail.value);
    this.setData({
      allPut: e.detail.value,
    })
  },
  bind1(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao1: a,
    })
  },
  slide1(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide1: e.detail.value,

    })
  },
  bind2(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao2: a,
    })
  },
  slide2(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide2: e.detail.value,

    })
  },
  bind3(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao3: a,
    })
  },
  slide3(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide3: e.detail.value,

    })
  },
  bind4(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao4: a,
    })
  },
  slide4(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide4: e.detail.value,

    })
  },
  bind5(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao5: a,
    })
  },
  slide5(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide5: e.detail.value,

    })
  },
  bind6(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao6: a,
    })
  },
  slide6(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide6: e.detail.value,

    })
  },
  bind7(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao7: a,
    })
  },
  slide7(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide7: e.detail.value,

    })
  },
  bind8(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao8: a,
    })
  },

  slide8(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide8: e.detail.value,

    })
  },
  bind9(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao9: a,
    })
  },
  slide9(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide9: e.detail.value,

    })
  },
  bind10(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao10: a,
    })
  },
  slide10(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide10: e.detail.value,

    })
  },
  bind11(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao11: a,
    })
  },
  slide11(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide11: e.detail.value,

    })
  },
  bind12(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao12: a,
    })
  },
  slide12(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide12: e.detail.value,

    })
  },
  bind13(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao13: a,
    })
  },
  slide13(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide13: e.detail.value,

    })
  },
  bind14(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao14: a,
    })
  },
  slide14(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide14: e.detail.value,

    })
  },
  bind15(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao15: a,
    })
  },
  slide15(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide15: e.detail.value,

    })
  },
  bind16(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao16: a,
    })
  },
  slide16(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide16: e.detail.value,

    })
  },
  bind17(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao17: a,
    })
  },
  slide17(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide17: e.detail.value,

    })
  },
  bind18(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao18: a,
    })
  },
  slide18(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide18: e.detail.value,

    })
  },
  bind19(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao19: a,
    })
  },
  slide19(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide19: e.detail.value,

    })
  },
  bind20(e) {
    var a = [];
    a[0] = e.detail.value;
    console.log('数值', e.detail.value);
    this.setData({
      tihao20: a,
    })
  },
  slide20(e) {
    console.log('slide滑动值改变，携带值为', e.detail.value)

    this.setData({
      slide20: e.detail.value,

    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onLoad: function (options) {

    var that = this;

    new Promise(function (resolve, reject) {
      that.getOpenid(resolve);
    }).then(function () {
      that.show1();

    })

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
  show1: function () {
    var that = this;
    console.log('历史已发布1：', that.data._id)

    const db = wx.cloud.database()
    db.collection('shclick').where({

      _openid:that.data.openid
    })
      .get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log('历史已发布：', res)
          that.setData({

            _id: res.data[0].Djkc,
          })
          console.log('历史_id：', that.data._id)
          db.collection('shclick').doc(res.data[0]._id).remove({

          })
    db.collection('Zuoye').where({

      _id: that.data._id,
    })
      .get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log('历史已发布：', res)
          that.setData({

            ZuoyeChoose: res.data,
          })
       
          console.log('选择的作业：', that.data.ZuoyeChoose)
          const db2 = wx.cloud.database()
          db2.collection('CJkechen').where({

            _id: that.data.ZuoyeChoose[0].kechen,
          })
            .get({
              success(res) {
                // res.data 是包含以上定义的两条记录的数组
                console.log('历史已发布：', res)
                that.setData({

                  kechenChoose: res.data,
                })
                console.log('选择的课程：', that.data.kechenChoose)


              }
            })
        }
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

  chooseRight: util.throttle(function () {
    const db = wx.cloud.database()

    console.log('PINGJIA', E)  
    var pinjia1 = new Object()
   
    pinjia1.tihao = this.data.ZuoyeChoose[0].tihao1
    pinjia1.nandu = this.data.slide1
    pinjia1.pinjia = this.data.tihao1

 
    var pinjia2 = new Object()
    pinjia2.tihao = this.data.ZuoyeChoose[0].tihao2
    pinjia2.nandu = this.data.slide2
    pinjia2.pinjia = this.data.tihao2


    var pinjia3 = new Object()
    pinjia3.tihao = this.data.ZuoyeChoose[0].tihao3
    pinjia3.nandu = this.data.slide3
    pinjia3.pinjia = this.data.tihao3


   
    var pinjia4 = new Object()
    pinjia4.tihao = this.data.ZuoyeChoose[0].tihao4
    pinjia4.nandu = this.data.slide4
    pinjia4.pinjia = this.data.tihao4

    var pinjia5 = new Object()
    pinjia5.tihao = this.data.ZuoyeChoose[0].tihao5
    pinjia5.nandu = this.data.slide5
    pinjia5.pinjia = this.data.tihao5

    var pinjia6 = new Object()
    pinjia6.tihao = this.data.ZuoyeChoose[0].tihao6
    pinjia6.nandu = this.data.slide6
    pinjia6.pinjia = this.data.tihao6

    var pinjia7= new Object()
    pinjia7.tihao = this.data.ZuoyeChoose[0].tihao7
    pinjia7.nandu = this.data.slide7
    pinjia7.pinjia = this.data.tihao7

    var pinjia8 = new Object()
    pinjia8.tihao = this.data.ZuoyeChoose[0].tihao8
    pinjia8.nandu = this.data.slide8
    pinjia8.pinjia = this.data.tihao8

    var pinjia9 = new Object()
    pinjia9.tihao = this.data.ZuoyeChoose[0].tihao9
    pinjia9.nandu = this.data.slide9
    pinjia9.pinjia = this.data.tihao9

    var pinjia10 = new Object()
    pinjia10.tihao = this.data.ZuoyeChoose[0].tihao10
    pinjia10.nandu = this.data.slide10
    pinjia10.pinjia = this.data.tihao10

    var pinjia11 = new Object()
    pinjia11.tihao = this.data.ZuoyeChoose[0].tihao11
    pinjia11.nandu = this.data.slide11
    pinjia11.pinjia = this.data.tihao11

    var pinjia12 = new Object()
    pinjia12.tihao = this.data.ZuoyeChoose[0].tihao12
    pinjia12.nandu = this.data.slide12
    pinjia12.pinjia = this.data.tihao12

    var pinjia13 = new Object()
    pinjia13.tihao = this.data.ZuoyeChoose[0].tihao13
    pinjia13.nandu = this.data.slide13
    pinjia13.pinjia = this.data.tihao13

    var pinjia14 = new Object()
    pinjia14.tihao = this.data.ZuoyeChoose[0].tihao14
    pinjia14.nandu = this.data.slide14
    pinjia14.pinjia = this.data.tihao14

    var pinjia15 = new Object()
    pinjia15.tihao = this.data.ZuoyeChoose[0].tihao15
    pinjia15.nandu = this.data.slide15
    pinjia15.pinjia = this.data.tihao15
   
    var pinjia16 = new Object()
    pinjia16.tihao = this.data.ZuoyeChoose[0].tihao16
    pinjia16.nandu = this.data.slide16
    pinjia16.pinjia = this.data.tihao16
    
    var pinjia17 = new Object()
    pinjia17.tihao = this.data.ZuoyeChoose[0].tihao17
    pinjia17.nandu = this.data.slide17
    pinjia17.pinjia = this.data.tihao17
    
    var pinjia18 = new Object()
    pinjia18.tihao = this.data.ZuoyeChoose[0].tihao18
    pinjia18.nandu = this.data.slide18
    pinjia18.pinjia = this.data.tihao18
    
    var pinjia19 = new Object()
    pinjia19.tihao = this.data.ZuoyeChoose[0].tihao19
    pinjia19.nandu = this.data.slide19
    pinjia19.pinjia = this.data.tihao19

    var pinjia20 = new Object()
    pinjia20.tihao = this.data.ZuoyeChoose[0].tihao20
    pinjia20.nandu = this.data.slide20
    pinjia20.pinjia = this.data.tihao20
   
    var E = new Array()
    E[0]=pinjia1
    E[1] = pinjia2
    E[2] = pinjia3
    E[3] = pinjia4
    E[4] = pinjia5
    E[5] = pinjia6
    E[6] = pinjia7
    E[7] = pinjia8
    E[8] = pinjia9
    E[9] = pinjia10
    E[10]=pinjia11
    E[11]=pinjia12

    E[12] = pinjia13
    E[13] = pinjia14
    E[14] = pinjia15  
     E[15] = pinjia16
    E[16] = pinjia17
    E[17] = pinjia18
    E[18] = pinjia19
    E[19] = pinjia20


    db.collection('PinJIA').add({
      data: {
        pinjia:E,
        Pbeizhu: this.data.allPut,
        Zuoye_id: this.data._id,
      },
      success: res => {
        wx.showToast({
          title: '评价成功',
        })
      wx.switchTab({//关闭当前页面，跳转到应用内的某个页面

      url: '../zuoye1/zuoye1'
      })
      }

    })

  }, 3000),
})