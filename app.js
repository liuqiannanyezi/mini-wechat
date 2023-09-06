// app.js
App({
  onLaunch: function() {
    // Do something initial when launch
    console.log('小程序启动之后触发')
  },
  onShow() {
    // Do something when show
  },
  onHide() {
    // Do something when hide
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
