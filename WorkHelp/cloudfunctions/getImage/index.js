const cloud = require('wx-server-sdk')
const axios = require('axios')
var rp = require('request-promise');
const appid = 'wx842418f8c156b890',
  secret = '4436b08ffc4ffa85261c90e069163f29';
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  try {
    const resultValue = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=appid&secret=secret')
    const token = JSON.parse(resultValue).access_token;
    console.log('------ TOKEN:', token);

    const response = await axios({
      method: 'post',
      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit',
      responseType: 'stream',
      params: {
        access_token: token,
      },
      data: {
        page: event.page,
        width: 300,
        scene: "id=" + event.id,
      },
    });

    return await cloud.uploadFile({
      cloudPath: 'xcxcodeimages/' + Date.now() + '.png',
      fileContent: response.data,
    });
  } catch (err) {
    console.log('>>>>>> ERROR:', err)
  }
}
