Page({
  data: {
    connectButton: [
      { className: "", text: "在线客服", bindtap: "" }
    ]
  },

  handleContact(e) {
    console.log(e.path)
    console.log(e.query)
  }
})