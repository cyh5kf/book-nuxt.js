import { getUserFromCookie } from '~/utils/auth'
import uuid from 'uuid'
import api from '@/plugins/axios'

export default async ({ isServer, store, req }) => {
   // If nuxt generate, pass this middleware
  if (isServer && !req) return
  const token = getUserFromCookie(req);
  if(!token) { //没有cookie，设置cookie，并存到store中
    const deviceId = uuid.v4();
    const query = {
      method: "activate",
      params: [
        {
          clientInfo: {
              lang: "zh-CN",
              osVersion: "12",
              clientVersion: "c",
              deviceId: deviceId,
              manufactory: "m",
              machineMode: "mode",
              deviceType: 2
          },
          identity: {
              "appName": "yyzshz"
          }
        }
      ]
    }
  
    const res = await api.post('/no-auth/user-rpc', query);
    console.log(res)
    store.dispatch('setInfo', res.result)
  }
  
}
