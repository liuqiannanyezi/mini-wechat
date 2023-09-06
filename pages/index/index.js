// index.js
Page({
  data: { 
    msg: 'hh',
    text: 'This is page data.',
    array: [1, 2, 3, 4, 5],
    objArr: [{ a: 1, b: 2}, { a: 2, b: 3}]
  },
  clickMe: function() {
    this.setData({ msg: "Hello World"})
    const appInstance = getApp()
    console.log('globalData', appInstance.globalData)
  },
  markertap: function (e) {
    console.log('markertap')
    console.log(e)
  },
  onLoad() {
    // 页面创建时执行
  },
  onShow() {
    // 页面出现的前台时执行
  },
  onReady() {
    // 页面首次渲染完毕时执行
  },
  onHide() {
    // 页面从前台变为后台时执行
  },
  onUnload() {
    // 页面销毁时执行
  },
  onPullDownRefresh() {
    // 触发下拉刷新时执行
  },
  onReachBottom() {
    // 页面触底时执行
  },
  onShareAppMessage() {
    // 页面被用户分享时执行
  },
  onPageScroll() {
    // 页面滚动时执行
  },
  onResize() {
    // 页面尺寸变化时执行
  },
  onTabItemTap() {
    // tab 点击时执行
  },
  // 自由数据
  customData: {
    hi: 'MINA'
  }
})
