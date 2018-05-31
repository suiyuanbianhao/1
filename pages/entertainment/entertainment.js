//index.js  
//获取应用实例  
var app = getApp()
Page({
  data:{
  },
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.request({
      url: 'https://qunawang.top/funs/0',
      data: {
        currentTab: 0
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          data: res.data.data,
        })
      },
    })
    
    wx.request({
      url: 'https://qunawang.top/funs/1',
      data: {
        currentTab: 1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          data: res.data.data,
        })
      },
    })

    wx.request({
      url: 'https://qunawang.top/funs/2',
      data: {
        currentTab: 2
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          data: res.data.data,
        })
      },
    })

    wx.request({
      url: 'https://qunawang.top/funs/3',
      data: {
        currentTab: 3
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          data: res.data.data,
        })
      },
    })


    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
    suo: function (options) {
      wx.navigateTo({
        url: '/pages/search/search',
      })
    },  
    
})