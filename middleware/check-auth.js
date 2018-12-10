// import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

// export default function ({ isServer, store, req }) {
//    // If nuxt generate, pass this middleware
//   if (isServer && !req) return
//   // const loggedUser = isServer ? getUserFromCookie(req) : getUserFromLocalStorage()
//   // store.commit('SET_USER', loggedUser)
// }
import uuid from 'uuid'
import api from '../api/axios'

export default async ({ isServer, store, req }) => {
  const deviceId = uuid.v4();
  console.log('deviceId:' + deviceId);
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
  console.log('res:' + res)
  return
}
