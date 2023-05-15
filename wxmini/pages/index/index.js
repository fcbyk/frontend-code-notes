
Page({
  data: {
    location:null,
    obj:{
      address:null,
      latitude:null,
      longitude:null,
      name:null
    },
    jsonStr:"没复制上"
  },

  choose(){
    wx.chooseLocation({
      success:(res)=>{
        this.setData({
          location:res,
          obj:{
            address:res.address,
            latitude:res.latitude,
            longitude:res.longitude,
            name:res.name
          }
        })
        this.setData({
          jsonStr:JSON.stringify(this.data.obj)
        })
        console.log(res)
      },
    })
  },
  open(){
    wx.openLocation({
      latitude:  this.data.location.latitude,
      longitude:  this.data.location.longitude,
      name:  this.data.location.name,
      address:  this.data.location.address
    })
  },

  onCopyClick: function() {
    console.log("hello")
    wx.setClipboardData({
      data: this.data.jsonStr,
      success: function(res) {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  }
})