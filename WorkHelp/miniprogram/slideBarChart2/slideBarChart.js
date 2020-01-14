// component/slideBarChart/slideBarChart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    chartData: {
      type: Object,
      observer: function () {
        this.initialization()
      }
    }, 

    xName:{
      type:String,
        
    },
    yName: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // historyData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    moveScroll: 0,
    barWidth: 0,
    width1:'',
    todaydate:'',
    windowWidth: 0, //实际的宽度
    nowIndex: 0, //当前位置的索引，从1开始
    scale: 1,
    chartLeft: 0,
    isTouch: false,
    scrollTimeout: "", //滚动节流定时器
  },
  /**
   * 生命周期
   */
  attached() {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 初始化
    
    initialization() {
      let self=this
      let that= this
     
      setTimeout(() => {
        that.time()
        setTimeout(() => {
        var widthT = 0
        new Promise(function (resolve, reject) {
          that.xunhuan(resolve, widthT);

        }).then(function (widthT) {
          that.setwidth1(widthT);
        })
 
        wx.createSelectorQuery().in(this).selectAll('.slide-item-content').boundingClientRect(function(rects) {
          // 获取bar的实际宽度
          wx.getSystemInfo({
            success: function(res) {
              console.log('widthres',rects);
              let chartLeft = (res.windowWidth - res.windowWidth*0.17 - rects[0].width) / 2
              console.log('chuangk', chartLeft, rects)
              console.log(rects[0].width, self.data.chartData.length - 1)
              self.setData({
                chartLeft: chartLeft  ,
                chartWidth: (self.data.chartData.length - 0.5) * rects[0].width + res.windowWidth / 2
              })
              setTimeout(() => {
                console.log('动a', rects[0].width * (9))
                console.log('width', rects[0].width);
                self.setData({
                  // 滚动到当前日期时间轴
                  moveScroll: rects[0].width * 0,
                  nowIndex: 1,
                  barWidth: rects[0].width,
                  windowWidth: res.windowWidth
                })
                console.log('move', self.data.moveScroll);
              },1000)
            }
          })
        }).exec()
        }, 0)
      }, 0)
    },
  time: function(resolve, widthT) {
  var that=this
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
    todaydate: parseInt(Y + M + D),

  })
    console.log("当前时间：", that.data.todaydate);
},

 xunhuan: function(resolve,widthT) {
    
    var that=this

    widthT = that.data.chartData.length
    for (var e = 0; e < that.data.chartData.length; e++) {
      if (that.data.todaydate < that.data.chartData[e].name || that.data.todaydate == that.data.chartData[e].name) {
        widthT = e
        console.log('获取我的作业1', widthT)
        console.log('获取我的作业3', resolve)
        break; 
      }

    }
    console.log('获取我的作业2', widthT)
    
    if (resolve != null) {
      resolve(widthT)
    }

  },
  setwidth1: function (widthT) {


    console.log('hh', widthT)
    var that = this
    that.setData({
      width1: widthT
    })

  },
    // 滑动开始
    clickStart(e) {
      this.setData({
        isTouch: true
      })
    },
    // 滑动过程
    chartScroll(e) {
      // console.log("滑动" + e.detail.scrollLeft)
      clearTimeout(this.data.scrollTimeout)
      if (this.data.isTouch) {
        this.setData({
          scrollX: e.detail.scrollLeft
        })
        // 节流函数，当滑动停止的100毫秒后执行结束事件
        // 因为ios下有惯性滑动，这里不能直接touchend事件
        this.setData({
          scrollTimeout: setTimeout(() => {
            this.clickEnd()
          }, 60)
        })
      }
    },
    // 滑动结束
    clickEnd() {
      console.log('滑动结束')
      let nowIndex = Math.round(this.data.scrollX / this.data.barWidth + 1)
      this.setData({
        nowIndex: nowIndex,
        moveScroll: this.data.barWidth * (nowIndex - 1),
        isTouch: false
      })
      this.triggerEvent('currentBarChange',this.data.chartData[nowIndex-1])
    }
  }
})