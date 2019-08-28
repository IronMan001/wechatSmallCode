// pages/driver/supplier_info/supplier_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    supplier_info_types_arr: [
      {
        material_playground_name: '1号装料场地',
        material_name: [

          { 'm_name': '烤串啊啊啊', 'paidui': '7', 'size': '5-10', 'unit': 'mm', 'total': '78', 'paidui_info': 1 },
          { 'm_name': '吃完一串来一串', 'paidui': '17', 'size': '15-110', 'unit': 'mm', 'total': '178', 'paidui_info': 0 },
          { 'm_name': '再来十串羊肉串', 'paidui': '8', 'size': '25-10', 'unit': 'mm', 'total': '278', 'paidui_info': 0 }

        ]
      },
      {
        material_playground_name: '2号装料场地',
        material_name: [

          { 'm_name': '啤酒', 'paidui': '37', 'size': '3-120', 'unit': 'mm', 'total': '178', 'paidui_info': 0 },
          { 'm_name': '喝完这一杯', 'paidui': '17', 'size': '11-100', 'unit': 'mm', 'total': '278', 'paidui_info': 0 },
          { 'm_name': '还有三杯', 'paidui': '8', 'size': '5-15', 'unit': 'mm', 'total': '378', 'paidui_info': 1 }

        ]
      }
    ],

    previousMargin: 0,
    nextMargin: 0,
    big_index: 0
  },
  setDefault: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  swiperBtn: function (e) {
    if (e.detail.source == 'touch') {
      let index = e.detail.current
      console.log('index' + index)
      this.setData({ big_index: index })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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