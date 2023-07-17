// index.ts

import { sayHello } from "../../api/hello"

Page({
  data: {
    message: 'hello world'
  },
  hi () {
    sayHello().then(data => {
      const message = data + '' // 强制类型，以后再修改
      this.setData({
        message
      })
    })
  }
})
