// miniprogram/pages/shouye/shouyeCk/shouyeCk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:'',
    dj:'',
    kechenD:'',
    bookImg:'',
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
    var that=this;
    const db = wx.cloud.database();
    
    db.collection('click2').where({
      _openid:that.data.openid,

    })
      .get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log('[解析点击成功：', res.data)
          that.setData({

            dj: res.data,
          })
          console.log('[解析点击成功：', that.data.dj[0]._id)
          const db2 = wx.cloud.database()
          db2.collection('CJkechen').where({
          
            _id: that.data.dj[0].Djkc,
          })
            .get({
              success(res) {
                // res.data 是包含以上定义的两条记录的数组
                console.log('点击课程的数据：', res.data)
                that.setData({
               
                  kechenD: res.data
                })
                console.log('点击课程的名称：', that.data.dj[0]._id)
                wx.cloud.getTempFileURL({
                  fileList: [that.data.kechenD[0].bigImg],
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
                const db1 = wx.cloud.database()
                db1.collection('click2').doc(that.data.dj[0]._id).remove({

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
  submit(e) {
    var that = this;

    console.log('[解析点击成功：', that.data.kechenD[0].student)
    var student1 = that.data.kechenD[0].student
    student1[student1.length] = that.data.dj[0]._openid
    
      wx.cloud.callFunction({
        name: 'join',
        data: {
          id: that.data.kechenD[0]._id,
          openid:student1
        },
      success(res) {
        const db2 = wx.cloud.database()
        db2.collection('JoinKechen').add({
          data: {
            kechen_id: that.data.kechenD[0]._id,
          }
        })
        
        wx.switchTab({//关闭当前页面，跳转到应用内的某个页面

          url: '../../Zuoye/zuoye1/zuoye1'
        })
        
        wx.showToast({
          title: '加入成功',
        })
      }
    })
  },
})