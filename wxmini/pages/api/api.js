// pages/api/api.js
Page({
  data: {
    message: 'Hello MINA!'
  },
  onReady() {
      new Promise((reso,rej)=>{
        wx.request({
          url: 'https://ali.fcbyk.com/test', 
          method:"GET",
          success (res) {
            reso(res)
          }
        })
      }).then(msg=>{
        console.log(msg.data)
        this.setData({
          message: msg.data[0].name
        })
      })
  }
})