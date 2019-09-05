
import { Base64 } from 'js-base64'
import Cookies from 'js-cookie'
import Md5 from 'js-md5'
export function getLatyear () {
  let lastYear = {}
  let date = new Date()
  lastYear.start = (date.getFullYear() - 1) + '-' + '01' + '-' + '01'
  lastYear.end = (date.getFullYear() - 1) + '-' + '12' + '-' + '31'
  return lastYear
}

export function params2JWT (params) {
  let objStr = JSON.stringify(params)
  let encode = Base64.encode(objStr) // 数据进行Base64加密
  let data = {}
  data.object = encode
  data.sign = Md5(encode + Cookies.get('randomKey'))
  return data
};
