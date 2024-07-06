/**
 * 步骤1. DES: DES/CBC/PKCS5PADDING
 * 步骤2. DES: 得到的字节转16进制字符串，大小写都可以
 */

import Cryptojs from 'crypto-js'
import dayjs from 'dayjs'

export const encrypt = (msg: string) => {
  const utf8Msg = Cryptojs.enc.Utf8.parse(msg)
  const key = Cryptojs.enc.Utf8.parse(`tamu.+${dayjs().format('MMDD')}`)

  return Cryptojs.DES.encrypt(utf8Msg, key, {
    iv: key,
    mode: Cryptojs.mode.CBC,
    padding: Cryptojs.pad.Pkcs7
  }).ciphertext.toString()
}
