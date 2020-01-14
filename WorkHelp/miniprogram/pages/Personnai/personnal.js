const App = getApp()

Page({
  data: {
    userInfo: {},
    items: [
    
      {
        icon: '/images/images/iconfont-kefu.png',
        text: '联系客服',
        path: '13260541000',
      },
      
    ],
    settings: [
      
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)

  },
  onLoad() {
    this.getUserInfo()

  },


  
  navigateTo(e) {
 
    const path = e.currentTarget.dataset.path
    console.log("path" ,path);
    wx.navigateTo({
      url: path,
    })
  },
  getUserInfo() {
    const userInfo = App.globalData.userInfo

    if (userInfo) {
      this.setData({
        userInfo: userInfo
      })
      return
    }

  },
  getStorageInfo() {
    App.WxService.getStorageInfo()
      .then(data => {
        console.log(data)
        this.setData({
          'settings[0].path': `${data.currentSize}KB`
        })
      })
  },
  bindtap(e) {
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path

    switch (index) {
      case 0:
        App.WxService.showModal({
          title: '友情提示',
          content: '确定要清除缓存吗？',
        })
          .then(data => data.confirm == 1 && App.WxService.clearStorage())
        break
      default:
        App.WxService.navigateTo(path)
    }
  },
  logout() {
    App.WxService.showModal({
      title: '友情提示',
      content: '确定要登出吗？',
    })
      .then(data => data.confirm == 1 && this.signOut())
  },
  signOut() {
    App.HttpService.signOut()
      .then(res => {
        const data = res.data
        console.log(data)
        if (data.meta.code == 0) {
          App.WxService.removeStorageSync('token')
          App.WxService.redirectTo('/pages/login/index')
        }
      })
  },
})