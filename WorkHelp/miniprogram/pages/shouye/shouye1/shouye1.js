Page({


  data: {
    teacher: '',
    kechen: '',
    Book: '',
    bookI: '',
    BookTe: '',
    Beizhu: '',
    bigImg: '',
    bookImg: '', //书本图片链接9 物品图片链接
    postBook:true,
    postBook2:false,
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

gotoShow: function(){
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
        postBook:false,
        postBook2: true,
      })
      const f = bookImg1[0];
      const e = Math.random() * 1000000 + f.match(/\.[^.]+?$/)[0];
      const h = e + '.png';

      
      wx.cloud.uploadFile({
        cloudPath: h,       //云存储图片名字
        filePath:f,    //临时路径

        success: res => {
          console.log('[上传图片] 成功：', res)
          //删除文件
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

formSubmit(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    const filePath = this.data.bigImg;
    var that=this
    const db = wx.cloud.database()
    db.collection('CJkechen').add({
      data: {
        username: that.data.username,
        teacher: that.data.teacher,
        kechen: that.data.kechen,
        Book: that.data.Book,
        BookTe: that.data.BookTe,
        Beizhu: that.data.Beizhu,
        switchr: that.data.switchr,
        BookImg: that.data.bookImg,
        bigImg: that.data.bigImg,
        student:[],
        switchr:e.detail.value.switchr,


      },
      success: res => {
        wx.showToast({
          title: '创建成功',
        })
      }

      }),

    wx.switchTab({//关闭当前页面，跳转到应用内的某个页面

      url: '../../shouye/shouyeF/shouyeF'
      })
  
  }

})
