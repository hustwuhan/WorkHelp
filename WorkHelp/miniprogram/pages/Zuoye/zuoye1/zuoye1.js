// miniprogram/pages/Zuoye/zuoye1/zuoye1.js
const util = require('../../../JS/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    clickZuoye2:false,
    classC:false,
    Chaxun:false,
    myArrayT:[],
    zuijing:false,
    mychoos:false,
    radiochange:'',
    chaxun:[],
    chaxun2: [],
    a:[],
    c:[],
    question:[],
    zuoyechoose:[],
    zuoye:[],
    openid:'',
    chartData: [
      
    ],
    beizhu1: false,
    tihao: true,
    todaydate:'',
    currentData: "",
    kecheng:'',
    clickQ:'',//选择的作业
    nowwork:true,//滑动改变显示
    fankui:false,
    clickZuoye: false,
    slideWork: false,//滑动改变显示
    postBook: true,
    width1:'',//确定滑动的初始偏移量
    postThing: false,
    post2: false,
    post3: false,
    post4: false,

    items: [
      { name: 'three', value: '最近三项'},
      { name: 3, value: '最近三天' },
      { name: 7, value: '最近一周' },
      { name: 'all', value: '所有需要完成的' },
 
    ]

  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var that = this;

    this.setData({
      radiochange: e.detail.value,

    })

  },
chaxun: function (e) {
  var that=this
  var myArrayT=[]
  new Promise(function (resolve, reject, myArrayT) {
    that.chaxunpaixu(resolve, myArrayT);
  }).then(function (myArrayT) {
    that.chaxunM(myArrayT);
  })

  },

  chaxunpaixu: function (resolve, myArrayT) {

    var that = this;
  var myArrayT = new Array(that.data.zuoye[0].length)

  //dingyi1duiiang

  for (var z = 0; z < that.data.zuoye[0].length; z++) {
    
    var a = { name: 1, value: 1 }
    var items = that.data.zuoye[0][z].date.split("-")
    var newStr = items.join("");
      a.name = parseInt(newStr),
      a.value = that.data.zuoye[0][z].shuliang,
      a.kechen = that.data.zuoye[0][z].kechen,
        a.kecheng = that.data.zuoye[0][z].kecheng,
        a.teacher = that.data.zuoye[0][z].teacher,
      a.mainBei = that.data.zuoye[0][z].jianshu,
      a._id = that.data.zuoye[0][z]._id,
      myArrayT[z] = a

  }
  function sortId(a, b) {
    return a.name - b.name
  }
  myArrayT.sort(sortId);//paixu
  
  console.log('MYARRAY', myArrayT)

    if (resolve != null) {
      resolve(myArrayT)
        }
},

chaxunM: function (myArrayT) {
  setTimeout(() => {
  var that=this
  console.log('MYARRAYe')
  var z
  var myArrayT2 = myArrayT

  console.log('MYARRAY2', myArrayT2)
for(z=0;z<myArrayT2.length;z++)
{
  if (myArrayT2[z].name < that.data.todaydate)
  {
    console.log('MYARRAYc', myArrayT2[z])
    delete myArrayT2[z];
  }
}
    console.log('MYARRAY2', myArrayT2)

    if (that.data.radiochange == '最近三项') {
    var c=[]
    for(var h=0;h<myArrayT2.length;h++){
        if(myArrayT2[h]!=undefined)
        {
          c[0] = myArrayT2[h]
          c[1] = myArrayT2[h+1]
          c[2] = myArrayT2[h+2]
          break;
        }
    }
  }
  
    if (that.data.radiochange == '最近三天'){
    var c = []
    for (var h = 0; h < myArrayT2.length; h++) {
      if (myArrayT2[h] != undefined && myArrayT2[h].name<that.data.todaydate+3) {
        c.push(myArrayT2[h])
       
      
      }
    }
  }

    if (that.data.radiochange == '最近一周') {
      var c = []
      for (var h = 0; h < myArrayT2.length; h++) {
        if (myArrayT2[h] != undefined && myArrayT2[h].name < that.data.todaydate + 7) {
          c.push(myArrayT2[h])


        }
      }
    }

    if (that.data.radiochange == '所有需要完成的') {
    var c = []
    for (var h = 0; h < myArrayT2.length; h++) {
      if (myArrayT2[h] != undefined ) {
        c.push(myArrayT2[h])


      }
    }
  }

  else {

  }
 
        that.setData({
          c: c,
          Chaxun: true,
          zuijing: false,
        })

   

  
  })
  },
  chaxunM1: function (myArrayT) {
    setTimeout(() => {
      var that = this
      console.log('MYARRAYe')
      var z
      var myArrayT2 = myArrayT

      console.log('MYARRAY2', myArrayT2)
      for (z = 0; z < myArrayT2.length; z++) {
        if (myArrayT2[z].name < that.data.todaydate) {
          console.log('MYARRAYc', myArrayT2[z])
          delete myArrayT2[z];
        }
      }
      console.log('MYARRAY2', myArrayT2)

      if (that.data.radiochange == '最近三项') {
        var c = []
        for (var h = 0; h < myArrayT2.length; h++) {
          if (myArrayT2[h] != undefined) {
            c[0] = myArrayT2[h]
            c[1] = myArrayT2[h + 1]
            c[2] = myArrayT2[h + 2]
            break;
          }
        }
      }

      if (that.data.radiochange == '最近三天') {
        var c = []
        for (var h = 0; h < myArrayT2.length; h++) {
          if (myArrayT2[h] != undefined && myArrayT2[h].name < that.data.todaydate + 3) {
            c.push(myArrayT2[h])


          }
        }
      }

      if (that.data.radiochange == '最近一周') {
        var c = []
        for (var h = 0; h < myArrayT2.length; h++) {
          if (myArrayT2[h] != undefined && myArrayT2[h].name < that.data.todaydate + 7) {
            c.push(myArrayT2[h])


          }
        }
      }

      if (that.data.radiochange == '所有需要完成的') {
        var c = []
        for (var h = 0; h < myArrayT2.length; h++) {
          if (myArrayT2[h] != undefined) {
            c.push(myArrayT2[h])


          }
        }
      }

      else {

      }
   
       
                that.setData({
                  c: c,
           
                  zuijing: false,
                })

    })
  },
checkboxChange: function (e) {
    setTimeout(() => {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var that = this;

    this.setData({
      chaxun: e.detail.value,
    
    })
      
  setTimeout(() => {
    var that = this
    var i = 0
    var arra=[]
    console.log('chaxun：', that.data.chaxun)
    const db = wx.cloud.database()
    for (i; i < that.data.chaxun.length; i++) {
      db.collection('CJkechen').where({
        _id: that.data.chaxun[i],

      })
        .get({
          success(res) {
            console.log('ch，携带value值为：', res.data)
            
            arra.push(res.data[0])//添加数组数据
            console.log('ch，携带value值为：', arra)
               that.setData({
                   chaxun2:arra
        })
          }
        })

    }
  },500)
    })
  },
  tijiao: util.throttle(function () {
    console.log(this)
    var that = this
    new Promise(function (resolve, reject) {
      that.tijiao2(resolve);
    }).then(function () {
      that.tijiao3();
    })
  }, 3000),
   
  tijiao2: function (resolve) {
    var that = this
    var f = that.data.chaxun
    var i = 0
    var h = 0

    var g = []
    g.length = 0
    console.log('shuzu', g)


    that.setData({

      zuoye: g,

    })
    console.log('获取我的作业zuoye', that.data.zuoye)

    
    if (resolve != null) {
      resolve('ok')
    }
  },
  tijiao3(){
    var that = this
    var f = that.data.chaxun
    var i = 0
    var h = 0
    const db = wx.cloud.database()

    for (i; i < that.data.chaxun.length; i++) {
     
            db.collection('Zuoye').where({
              kechen: that.data.chaxun[i],

            })
              .get({
                success(res) {
                  // res.data 是包含以上定义的两条记录的数组
                  console.log('获取我的作业', res.data)
                  console.log('获取我的作业', that.data.zuoye)
                  that.data.zuoye.push(res.data)
                  console.log('获取我的作业', that.data.zuoye)
                  for (var i = 0; i < that.data.zuoye.length - 1; i++) {
                    that.data.zuoye[0] = that.data.zuoye[0].concat(that.data.zuoye[i + 1]);
                    that.data.zuoye.splice(1, 1);
                  }

                  that.setData({

                    zuoye: that.data.zuoye,

                  })
                  console.log('作业集合', that.data.zuoye[0])
                  var myArray = new Array(that.data.zuoye[0].length)

                  //dingyi1duiiang

                  for (var t = 0; t < that.data.zuoye[0].length; t++) {
                    var a = { name: 1, value: 1 }
                    var items = that.data.zuoye[0][t].date.split("-")
                    var newStr = items.join("");
                    a.name = parseInt(newStr),
                      a.value = that.data.zuoye[0][t].shuliang,
                      myArray[t] = a

                  }
                  function sortId(a, b) {
                    return a.name - b.name
                  }
                  myArray.sort(sortId);//paixu
                  console.log('作业集合myarray', myArray)
                  var z = 0
                  for (var h = 0; h < that.data.zuoye[0].length - 1 - z; h++) {
                    if (myArray[h].name == myArray[h + 1].name) {
                      myArray[h].value = myArray[h].value + myArray[h + 1].value
                      myArray.splice(h + 1, 1);
                      h = h - 1
                      z = z + 1
                    }
                  }

                  console.log('作业集合myarray', myArray)
                  console.log('获取我的作业', that.data.zuoye)

                  that.setData({
                    chartData: myArray,
                    classC: false,
                    mychoos: true,
                  })
                }
              })


    }
  },
  currentBarChange1: function (resolve) {
    setTimeout(() => {
    var that=this
    const db = wx.cloud.database()
    var g = []

    var a = (that.data.currentData.name).toString();
    a = a.slice(0, 4) + '-' + a.slice(4, 6) + '-' + a.slice(6, 8)
    console.log(a);
    for (var e = 0; e < that.data.chaxun.length; e++) {
      db.collection('Zuoye').where({
        kechen: that.data.chaxun[e],
        date: a,
      })
        .get({
          success(res) {
            console.log('作业', res.data);
            if (res.data != undefined) {
              for (var u= 0; u < res.data.length; u++) {
                g.push(res.data[u])
              }
            }
            console.log('shuzu', g);
            that.setData({

              zuoyechoose: g

            })
            console.log('shuzu2', g);
          
          }
        })
    }
  setTimeout(() => {
    if (resolve != null) {
      resolve('ok')
    }
  },500)
    })
  },
  currentBarChange2: function () {
    var that=this
    console.log('选中日期的作业', that.data.zuoyechoose);
   

    
  },
  currentBarChange: function (e) {

    console.log(e.detail);
    var that=this;
      this.setData({
        currentData: e.detail,
        nowwork:false,
        slideWork:true,
        fankui:false,
        classC:false,
        mychoos:false,
        zuijing:false,
        Chaxun:false,
      })
     
    new Promise(function (resolve, reject) {
      that.currentBarChange1(resolve);
    }).then(function () {
      that.currentBarChange2();
    })
   
         
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    that.data.question.length = 20
    that.setData({
      chartData: [],
      question: that.data.question,

    })
    var that = this;

    new Promise(function (resolve, reject) {
      that.getOpenid(resolve);
    }).then(function () {
      that.show1();
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

  },
  //具体的后台获取云服务信息
  
  show1: function () {
    var that = this;

    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    console.log("当前时间：" + Y + '年' + M + '月' + D + '日');
    that.setData({
      todaydate:   parseInt(Y + M + D),

    })
    console.log("当前时间：", that.data.todaydate);

    const db = wx.cloud.database()
    db.collection('JoinKechen').where({
      _openid: that.data.openid,

    })
      .get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log('获取我的课程', res.data)
          that.setData({
            zuoye:[],
            kecheng: res.data,
          })
          
          console.log('kecheng.id：', that.data.kecheng[0].kechen_id)
          var f = that.data.kecheng
          var i = 0
          var h = 0
          var z=[]
           for (i; i < that.data.kecheng.length; i++)   
            {
                z.push(that.data.kecheng[i].kechen_id)
               console.log('kechen', that.data.kecheng[i].kechen_id)
             console.log('abdg', i)
               db.collection('CJkechen').where({
                 _id: that.data.kecheng[i].kechen_id,

               })
                 .get({
                   success(res) {
                     console.log('abad',res.data)

                     f[h].kechen_id = res.data[0]._id
                     f[h].kechen = res.data[0].kechen
                     f[h]["teacher"] = res.data[0].teacher
                     console.log('abadef', f)
             
                     that.setData({

                       kecheng:f

                     })
                     h++
                   }
                 })
             

            db.collection('Zuoye').where({
              kechen: that.data.kecheng[i].kechen_id,

            })
              .get({
                success(res) {
                  // res.data 是包含以上定义的两条记录的数组
                  console.log('获取我的作业', res.data)
                  console.log('获取我的作业', that.data.zuoye)
                  that.data.zuoye.push(res.data)
                  console.log('获取我的作业', that.data.zuoye)
                  for (var i = 0; i < that.data.zuoye.length - 1; i++) {
                    that.data.zuoye[0] = that.data.zuoye[0].concat(that.data.zuoye[i + 1]);
                    that.data.zuoye.splice(1, 1);
                  }

                  that.setData({

                    zuoye: that.data.zuoye,

                  })
                  console.log('作业集合', that.data.zuoye[0])
                  var myArray = new Array(that.data.zuoye[0].length)     
              
                //dingyi1duiiang
                 
                  for (var t = 0; t< that.data.zuoye[0].length; t++)
                  {
                    var a = { name: 1, value: 1 }
                    var items = that.data.zuoye[0][t].date.split("-")
                    var newStr = items.join("");
                    a.name = parseInt( newStr),
                    a.value = that.data.zuoye[0][t].shuliang,
                    myArray[t]=a
            
                  }
                  function sortId(a, b) {
                    return a.name - b.name
                  }
                  myArray.sort(sortId);//paixu
                  console.log('作业集合myarray', myArray) 
                  var  z=0
                  for (var h= 0; h< that.data.zuoye[0].length-1-z; h++)
                    {
                    if (myArray[h].name == myArray[h+1].name)
                        {
                      myArray[h].value = myArray[h].value + myArray[h+1].value
                      myArray.splice(h+1, 1);
                      h=h-1
                      z=z+1
                        }
                    }

                  console.log('作业集合myarray', myArray) 
                  console.log('获取我的作业', that.data.zuoye)

                  that.setData({

                    chartData: myArray

                  })
              

                  }
              })
            }
          that.setData({

            chaxun:z

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
  onPullDownRefresh: function () {
    var that = this
    
    that.setData({
    classC:false,
    Chaxun:false,
    myArrayT:[],
    zuijing:false,
    mychoos:false,
    radiochange:'',
    chaxun:[],
    chaxun2: [],
    a:[],
    c:[],
    question:[],
    zuoyechoose:[],
    zuoye:[],
    openid:'',
    chartData: [
      
    ],
    beizhu1: false,
    tihao: true,
    todaydate:'',
  
    kecheng:'',
    clickQ:'',//选择的作业
    nowwork:true,//滑动改变显示
    fankui:false,
    clickZuoye: false,
    slideWork: false,//滑动改变显示
    postBook: true,
    width1:'',//确定滑动的初始偏移量
    postThing: false,
    post2: false,
    post3: false,
    post4: false,

    })
    setTimeout(() => {
    that.onLoad()
      setTimeout(() => {
    that.setData({
      classC: true,
    })
      },0)
    },1000)
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
 choosePostBook: function () {
    var that = this;
    that.setData({
      postBook: true,
      postThing: false,
      post2: false
    })
  },
  choosePostThing: function () {
    var that = this;
    that.setData({
      postBook: false,
      postThing: true,
      post2: false
    })
  },
  choosePost2: function () {
    var that = this;
    that.setData({
      postBook: false,
      postThing: false,
      post2: true
    })
  },
  ClassChoose: function () {
    var that = this;
    that.setData({
      classC: true,
      slideWork: false,
      fankui: false,
      mychoos: false,
      zuijing: false,
      Chaxun: false,

    })
  },
ZuiJing: function () {
    var that = this;
    that.setData({
      classC: false,
      slideWork: false,
      fankui: false,
      mychoos: false,
      zuijing:true,

      Chaxun: false,
    })
  },
  click: function (e) {

    var workerId  = e.currentTarget.dataset.workerid;
    console.log("workerId------", workerId);

    var that = this;
    that.setData({
      slideWork:false,
      clickZuoye:true,
      clickQ:workerId
    })
  },
  click2: function (e) {

    var workerId = e.currentTarget.dataset.workerid;
    console.log("workerId------", workerId);

    var that = this;
    that.setData({
      slideWork: false,
      clickZuoye: false,

      clickZuoye2: true,
      clickQ: workerId
    })
  },
  fankui: function () {
    setTimeout(() => {
    var that = this;
    that.setData({
      fankui:true,
     slideWork:false,
     Chaxun:false,
     classC:false,
     zuijing:false,
     radiochange: '所有需要完成的'
    })
      var myArrayT = []
      new Promise(function (resolve, reject, myArrayT) {
        that.chaxunpaixu(resolve, myArrayT);
      }).then(function (myArrayT) {
        that.chaxunM1(myArrayT);
      })

    },100)
  },
  quxiao: function () {
    var that = this;
    that.setData({
      clickZuoye:false,
      slideWork:true,
      tihao:true,
      beizhu1:false

    })
  },
  beizhu1: function () {
    var that = this;
    that.setData({
      beizhu1: true,
      tihao:false,
    })
  },
  tihao: function () {
    var that = this;
    that.setData({
      beizhu1: false,
      tihao: true,
    })
  },

  Shchuan: util.throttle(function (e) {
    var workerId = e.currentTarget.dataset.workerid;
    console.log("workerId------" + workerId);

    const db = wx.cloud.database()
    db.collection('shclick').add({
      data: {
        Djkc: workerId,
      },
    })
    wx.navigateTo({
      url: '../FanKui/FanKui'
    })
    },3000)
})
