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
  
  onLoad: function (e) {
    var that = this;
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
      },
    })
    /** 
     * 获取系统信息 
     */
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
    console.log(e.detail.current)
    wx.request({
      url: 'https://qunawang.top/funs/0'+e.detail.current,
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
      },
    })
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