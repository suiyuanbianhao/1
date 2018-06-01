// pages/xiaoyuanfujin/xiaoyuanfujin.js
var app = getApp()
Page({
  data: {
  },

    onLoad: function () {
      var that = this;

      /** 
       * 获取系统信息 
       */
      wx.request({
        url: 'https://qunawang.top/funs/0',
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