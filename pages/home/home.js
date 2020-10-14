// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中ing',
      duration: 3000,
      icon: 'loading',
      mask: true
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // showCancel: false,
      cancelText: '退出',
      success: function(res) {
        console.log(res);
        if(res.cancel) {
          console.log('用户点击了取消按钮')
        }
        if(res.confirm) {
          console.log('用户点击了确定按钮')
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(() => {
      // 必须手动调用hideLoading才会使Loading消失
      wx.hideLoading({
        success: (res) => {},
      })
    }, 1000);
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res);
        
      }
    })
  },
  onShareAppMessage(options) {
    return {
      title: '你好啊李银河',
      path: '/pages/about/about.wxml',
      imageUrl: '/assets/cache.png'
    }
  }
})