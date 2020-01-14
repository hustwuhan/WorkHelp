//这是上拉显示的课程基本资料界面

const QRCode = require('../../../utils/weapp-qrcode.js')
import rpx2px from '../../../utils/rpx2px.js'
let qrcode;

// 300rpx 在6s上为 150px
const qrcodeWidth = rpx2px(300)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'https://github.com/tomfriwel/weapp-qrcode',
    image: '',
    // 用于设置wxml里canvas的width和height样式
    qrcodeWidth: qrcodeWidth,
    imgsrc: '',
    openid:'',
    teacher: '',
    kechen: '',
    Showerwei:false,
    Book: '',
    bookI: '',
    BookTe: '',
    Beizhu: '',
    bigImg: '',
    bookImg: '', //书本图片链接9 物品图片链接
    postBook: true,
    postBook2:false,

    inputVal: "",
    dj: '',
    _id: '',
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
  onReady() {
    const z = this
    qrcode = new QRCode('canvas', {
      usingIn: this, // usingIn 如果放到组件里使用需要加这个参数
      // text: "https://github.com/tomfriwel/weapp-qrcode",
      image: '/images/bg.jpg',
      width: qrcodeWidth,
      height: qrcodeWidth,
      colorDark: "#000000", 
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
    });

    // 生成图片，绘制完成后调用回调
    qrcode.makeCode(z.data.text, () => {
      // 回调
      qrcode.exportImage(function (path) {
        z.setData({
          imgsrc: path
        })
      })
    })
  },


  confirmHandler: function (e) {
    let {
      value
    } = e.detail
    this.renderCode(value)
  },
  renderCode(value) {
    const z = this
    console.log('make handler',value)
 
    setTimeout(() => {
    qrcode.makeCode(value, () => {
      console.log('make')
      setTimeout(() => {
      qrcode.exportImage(function (path) {
        console.log(path)
        z.setData({
          imgsrc: path
        })
      })
      }, 0)
    })
    },1000)
  },
  inputHandler: function (e) {
    var value = e.detail.value
    this.setData({
      text: value
    })
  },
  tapHandler: function () {
    this.renderCode(this.data._id)
    this.setData({
        Showerwei:true
    })
  },
  quxiao: function () {
    this.setData({
      Showerwei: false,
      
    })

  },
  // 长按保存
  save: function () {
    console.log('save')
    wx.showActionSheet({
      itemList: ['保存图片'],
      success: function (res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0) {
          qrcode.exportImage(function (path) {
            wx.saveImageToPhotosAlbum({
              filePath: path,
            })
          })
        }
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
    var that = this;
    console.log('[上传点击事件] 功：', that.data.openid)
    const db = wx.cloud.database()
    db.collection('shangla').where({
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
          console.log('[上传点击事件] 功：', that.data.openid)
          const db2 = wx.cloud.database()
          db2.collection('CJkechen').where({
            _openid: that.data.openid,
            _id: that.data.dj[0].Djkc,
          })
            .get({
              success(res) {
                // res.data 是包含以上定义的两条记录的数组
                console.log('点击课程的数据：', res.data)
     
                db.collection('shangla').doc(that.data.dj[0]._id).remove({

                })
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
 
                wx.cloud.getTempFileURL({
                  fileList: [that.data.bigImg],
                  success: res => {
                    // fileList 是一个有如下结构的对象数组
                    // [{
                    //    fileID: 'cloud://xxx.png', // 文件 ID
                    //    tempFileURL: '', // 临时文件网络链接
                    //    maxAge: 120 * 60 * 1000, // 有效期
                    // }]
                    console.log('[书本的临时图片路径为：',res.fileList)
                    // 返回临时文件路径
                    that.setData({
                      bookImg: res.fileList[0].tempFileURL,

                    })
                    console.log('[书本的图片为：', that.data.bookImg)
                  },
                  fail: console.error
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
bind1: function (e) {

    this.setData({
      teacher: e.detail.value,
    })
  },
  bind2: function (e) {

    this.setData({
      kechen: e.detail.value,
    })
  },
  bind3: function (e) {

    this.setData({
      Book: e.detail.value,
    })
  },
  bind4: function (e) {

    this.setData({
      BookTe: e.detail.value,
    })
  },
  bind5: function (e) {

    this.setData({
      Beizhu: e.detail.value,
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
          bookImg: bookImg1,
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
  
            console.log('[上传图片] 成功：', res)
            wx.cloud.deleteFile({
              fileList: [that.data.bigImg],
              success: res => {
                // handle success
                console.log(res.fileList)
              },
              fail: console.error
            })
            that.setData({
              bigImg: res.fileID,//云存储图片路径,可以把这个路径存到集合，要用的时候再取出来
            });
            let fileID = res.fileID;
          },
        })
      },
    })
    //上面结束了图片的预览
    //开始上传图片到云，并获得ID保存到data

  },


  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    const filePath = this.data.bigImg;

    const db = wx.cloud.database()
    db.collection('CJkechen').doc(this.data._id).update({
      data: {
        username: e.detail.value.username,
        teacher: e.detail.value.teacher,
        kechen: e.detail.value.kechen,
        Book: e.detail.value.Book,
        BookTe: e.detail.value.BookTe,
        Beizhu: e.detail.value.Beizhu,
        switchr: e.detail.value.switchr,
        BookImg: this.data.bookImg,
        bigImg: filePath,
      },
      success: res => {
        wx.showToast({
          title: '更新成功',
        })
      }

    }),

      wx.switchTab({//关闭当前页面，跳转到应用内的某个页面

        url: '../../shouye/shouyeF/shouyeF'
      })

  }

})
