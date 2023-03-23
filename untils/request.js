const BASE_URL = 'http://127.0.0.1/api'
export const myRequest = (options)=>{
  return new Promise((resolve,reject)=>{
    uni.request({
      url:BASE_URL+options.url,// 将接口地址分为两部分，这样如果域名改变了好维护,接口地址从options中获取
      method:options.method || 'GET',// 方法从options中获取，如果没有传入method，则默认为GET，
      data:options.data ||{},
      header:{
        'content-type': 'application/x-www-form-urlencoded' ,
      },// data从options中获取，如果没有传入data， 则默认一个空对象
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        uni.showToast({
          title:'请求接口失败'
        })
        reject(err)
      }
    })
  })
}