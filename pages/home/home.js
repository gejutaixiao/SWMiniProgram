// pages/home/home.js

// getApp()获取App()产生的示例对象
const app = getApp();
console.log(app.globalData.name);

Page({
  // 1.监听页面的生命周期函数
  // 2.初始化数据
  // 3.监听wxml中相关的一些事件
  // 4.监听其它事件：监听页面滚动
  /**
   * 页面的初始数据
   */
  data: {
    name: 'coderwhy',
    age: 18,
    students: [
      {id: 110, name: 'kobe', age: 30},
      {id: 111, name: 'kbe', age: 32},
      {id: 112, name: 'kobeeee', age: 20},
      {id: 113, name: 'why', age: 18}
    ],
    counter: 0,
    list: []
  },
  handlerBtnClick() {
    console.log('按钮发生了点击');
    // this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handlerSubClick() {
    console.log('-----');
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handlerGetUserInfo(event) {
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res);
        this.setData({
          list: res.data.list
        })
      }
    })
  },
  onPageScroll(obj) {
    console.log(obj);
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

  }
})