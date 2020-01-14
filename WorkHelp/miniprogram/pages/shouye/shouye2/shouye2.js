const util = require('../../../JS/util.js')
//这是课程的管理界面
Page({

  /**
   *
   * 页面的初始数据
   */
  data: {
    Fclass:[],
    Nyingcang:true,
    jianshu:'',
    kechenHis:'',
    slider: '',
    date: '2019-01-01',
    date2:'',
    shuliang: 0,
    question: [],
    Beizhu: '',
    Beizhu2:'',
    CouName: false,
    teacher: '',
    kechen: '',
    Book: '',
    bookI: '',
    BookTe: '',
    Beizhu: '',
    bigImg: '',
    bigImg2: '',
    bookImg: '', //书本图片链接9 物品图片链接
    bookImg2: '',
    tiban:false,
    tiban2: false,
    postBook1: true,
    postFankui: false,
    postHist: false,
    Q:false,
    Q1: true,
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
    openid:'',
    inputVal: "",
    dj: '',
    _id: '',
    //背景颜色
    pageBackgroundColor: 'transparent',
    postBook: true,
    postBook2: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    var that=this;
   
  const db = wx.cloud.database()
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    console.log("当前时间：" + Y + '年' + M + '月' + D + '日'); 
    this.setData({
      date: Y + '-' + M + '-' +D,
      date2: Y + '-' + M + '-' + D,
    })
    var that = this;
    //历史作业的数据下载

    

    db.collection('click').where({
      _openid: that.data.openid,

    })
      .get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log('[上传点击事件] 成功：', res.data)
          that.setData({

            dj: res.data,
          })
          console.log('[上传点击事件] 功：', that.data.dj[0].Djkc)
      
          // 渲染课程数据
          const db2 = wx.cloud.database()
          db2.collection('CJkechen').where({
            _openid: that.data.openid,
            _id: that.data.dj[0].Djkc,
          })
            .get({
              success(res) {
                // res.data 是包含以上定义的两条记录的数组
                console.log('点击课程的数据：', res.data)
                that.setData({
                  _id: res.data[0]._id,

                  teacher: res.data[0].teacher,
                  kechen: res.data[0].kechen,
                  Book: res.data[0].Book,
                  BookTe: res.data[0].BookTe,
                  Beizhu: res.data[0].Beizhu,
                  switchr: res.data[0].switchr,

                  bigImg: res.data[0].bigImg,


                })
                console.log('点击课程的名称：', that.data._id)
                console.log('历史已发布1：', that.data._id)

                
            
                const db1 = wx.cloud.database()
                db1.collection('click').doc(that.data.dj[0]._id).remove({

                })
                wx.cloud.getTempFileURL({
                  fileList: [that.data.bigImg],
                  success: res => {
                    // fileList 是一个有如下结构的对象数组
                    // [{
                    //    fileID: 'cloud://xxx.png', // 文件 ID
                    //    tempFileURL: '', // 临时文件网络链接
                    //    maxAge: 120 * 60 * 1000, // 有效期
                    // }]
                    console.log('[书本的临时图片路径为：', res.fileList)
                    // 返回临时文件路径
                    that.setData({
                      bookImg: res.fileList[0].tempFileURL,

                    })
                    console.log('[书本的图片为：', that.data.bookImg)
                  },
                  fail: console.error
                })
                console.log('历史已发布1：', that.data._id)
                const db4 = wx.cloud.database()
                db4.collection('Zuoye').where({
                  _openid: that.data.openid,
                  kechen: that.data._id,
                })
                  .get({
                    success(res) {
                      // res.data 是包含以上定义的两条记录的数组
                      console.log('历史已发布：', res)
                      that.setData({

                        kechenHis: res.data,
                      })
                      console.log('历史已发布：', that.data.kechenHis)
                    }
                  })
              }
            })

        }
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
  onPullDownRefresh: util.throttle(function () {
    var that = this
    const db = wx.cloud.database()
    db.collection('shangla').add({
      data: {
        Djkc: that.data._id,
      },
    })

    wx.navigateTo({
      url: '../../shouye/shouye3/shouye3'
    })
    wx.stopPullDownRefresh()
  },3000),

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
  chooseQuXiao: function (e) {
    var that = this;
    that.setData({
      Q:false,
      CouName: false,
      Nyingcang:true,
    })
    this.setData({
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


    })

  },
  Tiban: function (e) {
    var that = this;
    that.setData({
     Q1:false,
      tiban: true,
      Nyingcang:false,
    })

  },
  Clickfan:util.throttle(function (e) {
    var workerId = e.currentTarget.dataset.workerid;
    console.log("workerId------" + workerId);

    const db = wx.cloud.database()
    db.collection('clickF').add({
      data: {
        DjZY: workerId,
      },
    })
    wx.navigateTo({
      url: '../../Zuoye/tFANkui/tfankui'
    })
  }, 3000),
  tijiao: util.throttle(function () {
    const db = wx.cloud.database()
    var that =this
    console.log('[调试1：', that.data.dj[0]._id)
  setTimeout(() => {
    const tianZ = new Object();
    tianZ.date = this.data.date,
    tianZ.Fabudate = this.data.date2,
      tianZ.shuliang = this.data.shuliang,
      tianZ.tihao1 =  this.data.tihao1,
      tianZ.tihao2 = this.data.tihao2,
      tianZ.tihao3 =  this.data.tihao3,
      tianZ.tihao4 = this.data.tihao4,
      tianZ.tihao5 =  this.data.tihao5,
      tianZ.tihao6 = this.data.tihao6,
      tianZ.tihao7 = this.data.tihao7,
       tianZ.tihao8 = this.data.tihao8,
      tianZ.tihao9 =  this.data.tihao9,
      tianZ.tihao10 =  this.data.tihao10,
      tianZ.tihao11 = this.data.tihao11,
      tianZ.tihao12 = this.data.tihao12,
      tianZ.tihao13 = this.data.tihao13,
      tianZ.tihao14 =  this.data.tihao14,
      tianZ.tihao15 = this.data.tihao15,
      tianZ.tihao16 =  this.data.tihao16,
      tianZ.tihao17 = this.data.tihao17,
      tianZ.tihao18 =  this.data.tihao18,
      tianZ.tihao19 = this.data.tihao19,
      tianZ.tihao20 = this.data.tihao20,
      tianZ.kechen = this.data.dj[0].Djkc,
      tianZ.beizhu =  this.data.Beizhu2,
      tianZ.jianshu = this.data.jianshu,

  
    setTimeout(() => {
       const his = this.data.kechenHis
       his.push(tianZ)

      setTimeout(() => {
      
        this.setData({
        kechenHis: his,
   
         })
      }, 0)
    
    }, 220)
    }, 300)
  setTimeout(() => {
    if (this.data.jianshu != '' && this.data.Beizhu2 != '')
    {
      db.collection('Zuoye').add({
        data: {
          date: this.data.date,
          Fabudate: this.data.date2,
          shuliang: this.data.shuliang,
          tihao1: this.data.tihao1,
          tihao2: this.data.tihao2,
          tihao3: this.data.tihao3,
          tihao4: this.data.tihao4,
          tihao5: this.data.tihao5,
          tihao6: this.data.tihao6,
          tihao7: this.data.tihao7,
          tihao8: this.data.tihao8,
          tihao9: this.data.tihao9,
          tihao10: this.data.tihao10,
          tihao11: this.data.tihao11,
          tihao12: this.data.tihao12,
          tihao13: this.data.tihao13,
          tihao14: this.data.tihao14,
          tihao15: this.data.tihao15,
          tihao16: this.data.tihao16,
          tihao17: this.data.tihao17,
          tihao18: this.data.tihao18,
          tihao19: this.data.tihao19,
          tihao20: this.data.tihao20,
          kechen: this.data.dj[0].Djkc,
          beizhu: this.data.Beizhu2,
          jianshu:this.data.jianshu,
          kecheng: this.data.kechen,
          teacher: this.data.teacher,
        },
      })
          
          wx.showToast({
            title: '上传作业成功',
          })
          var that = this;
          that.setData({
           
            Q: false,
            CouName: false,
          })
              that.setData({//关闭当前页面，跳转到历史作业组件
                postBook1: false,
                postFankui: false,
                postHist: true,
              
              })
     }
      
    if (this.data.jianshu == '' || this.data.Beizhu2 == '') {
      wx.showToast({
        title: '未填写完毕',
      })
    }
      setTimeout(() => {
      that.setData({//关闭当前页面，跳转到历史作业组件
      
        jianshu: '',
        shuliang: 0,
        Beizhu: '',
        Beizhu2: '',
      })
      },0)
    
  
  },500)

},3000),
  //确定然后上传题目的标号到云端
  chooseRight: function (e){
    var that = this;
    that.setData({
      Nyingcang:true,
      CouName: false,
      Q: true,
      Q1:true,
    })
  },

  chooseRight1: function(e){
    var that = this;
    that.setData({
      Q1:true,
      tiban: false,
      Nyingcang:true,
    })
  },

  chooseWork: function(e){
    var that = this;
    that.setData({
      postBook1: true,
      postFankui: false,
      postHist: false,
    })
  },

  chooseFankui: function (e) {
    var that = this;
    that.setData({
      postBook1: false,
      postFankui: true,
      postHist: false,
    })
    var Fclass=[]
    var items
    var newStr
    var time

    var items2 
    var newStr2 
    var time2 
for(var i=0;i<that.data.kechenHis.length;i++)
{
  items = that.data.kechenHis[i].date.split("-")
  newStr = items.join("");
   time = parseInt(newStr);

  items2 = that.data.date.split("-")
   newStr2 = items2.join("");
   time2 = parseInt(newStr2)

  if (time<time2)
{
    Fclass.push(that.data.kechenHis[i])

}
}
that.setData({
  Fclass:Fclass
})


  },
  chooseHist: function (e) {
    var that = this;
    that.setData({
      postBook1: false,
      postFankui: false,
      postHist: true,
    })
  },
  gotoShow: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        // console.log()
        const bookImg1 = res.tempFilePaths;
        console.log(bookImg1);
        that.setData({
          bookImg2: bookImg1,
          postBook: false,
          postBook2: true,
        })
        const f = bookImg1[0];
        const e = Math.random() * 1000000 + f.match(/\.[^.]+?$/)[0];
        const h = e + '.png';


        wx.cloud.uploadFile({
          cloudPath: h,       //云存储图片名字
          filePath: f,    //临时路径

          success: res => {

            console.log('[上传作业图片] 成功：', res)
            wx.cloud.deleteFile({
              fileList: [that.data.bigImg2],
              success: res => {
                // handle success
                console.log(res.fileList)
              },
              fail: console.error
            })
            that.setData({
              bigImg2: res.fileID,//云存储图片路径,可以把这个路径存到集合，要用的时候再取出
            });
            let fileID = res.fileID;
          },
        })
      },
    })
    //上面结束了图片的预览
    //开始上传图片到云，并获得ID保存到data

  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value

    })
  },
  slide(e) {

    if (e.detail.value != 0) {
      console.log('slide滑动值改变，携带值为', e.detail.value)

      this.setData({
        shuliang: e.detail.value,

      })
      this.setData({
        Nyingcang:false,
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


      })
      var question1 = new Array();
      question1.length = e.detail.value;
      var num = 0;//1、声明循环变量
      var that = this;
      while (num < e.detail.value) {
        question1[num] = num + 1;
        num++;

      }

      this.setData({
        question: question1,
        CouName: true,
        Q1:false,
      })
      console.log('问题数量', this.data.question);

    }
  },
  bind1(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao1: e.detail.value,
    })
  },

  bind2(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao2: e.detail.value,
    })
  },
  bind3(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao3: e.detail.value,
    })
  },
  bind4(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao4: e.detail.value,
    })
  },
  bind5(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao5: e.detail.value,
    })
  },
  bind6(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao6: e.detail.value,
    })
  },
  bind7(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao7: e.detail.value,
    })
  },
  bind8(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao8: e.detail.value,
    })
  },
  bind9(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao9: e.detail.value,
    })
  },
  bind10(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao10: e.detail.value,
    })
  },
  bind11(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao11: e.detail.value,
    })
  },
  bind12(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao12: e.detail.value,
    })
  },
  bind13(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao13: e.detail.value,
    })
  },
  bind14(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao14: e.detail.value,
    })
  },
  bind15(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao15: e.detail.value,
    })
  },
  bind16(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao16: e.detail.value,
    })
  },
  bind17(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao17: e.detail.value,
    })
  },
  bind18(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao18: e.detail.value,
    })
  },
  bind19(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao19: e.detail.value,
    })
  },
  bind20(e) {

    console.log('数值', e.detail.value);
    this.setData({
      tihao20: e.detail.value,
    })
  },
  Bind5: function (e) {

    this.setData({
      Beizhu2: e.detail.value,
    })
    },
  jianshu: function (e) {

    this.setData({
      jianshu: e.detail.value,
    })
  },
  
      })