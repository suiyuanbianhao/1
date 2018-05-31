//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://qunawang.top/funs/',
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          data: res.data.data,
        })
      }
    })
  },
})