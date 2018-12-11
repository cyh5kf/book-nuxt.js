// import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

// const getQueryParams = () => {
//   const params = {}
//   window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
//     params[$1] = $3
//   })
//   return params
// }

// export const extractInfoFromHash = () => {
//   if (process.SERVER_BUILD) return
//   const { id_token, state } = getQueryParams()
//   return {
//     token: id_token,
//     secret: state
//   }
// }

// 设置cookie
export const setToken = (userInfo) => {
  if (process.SERVER_BUILD) return
//   window.localStorage.setItem('token', token)
  // window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)))
//   window.localStorage.setItem('user', JSON.stringify(token))
  Cookie.set('userInfo', userInfo)
}

export const unsetToken = () => {
  if (process.SERVER_BUILD) return
//   window.localStorage.removeItem('token')
//   window.localStorage.removeItem('user')
//   window.localStorage.removeItem('secret')
  Cookie.remove('userInfo')
//   window.localStorage.setItem('logout', Date.now())
}

export const getUserFromCookie = (req) => {
  if (!req.headers.cookie) return
  const userCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('userInfo='))
  if (!userCookie) return
  const userInfo = userCookie.split('=')[1]
  return userInfo
}

// export const getUserFromLocalStorage = () => {
//   const json = window.localStorage.user
//   return json ? JSON.parse(json) : undefined
// }

// export const setSecret = (secret) => window.localStorage.setItem('secret', secret)

// export const checkSecret = (secret) => window.localStorage.secret === secret
