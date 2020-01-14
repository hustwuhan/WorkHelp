
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  },


})

// 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
wx.getSetting({
  success(res) {
    if (!res.authSetting['scope.writePhotosAlbum']) {
      wx.authorize({
        scope: 'scope.writePhotosAlbum',
        success() {
          // 用户已经同意小程序使用相册·功能，后续调用 wx.startRecord 接口不会弹窗询问
          wx.saveImageToPhotosAlbum()
        }
      })
    }
  }
})
