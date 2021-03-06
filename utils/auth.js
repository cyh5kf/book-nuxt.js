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

// 客户端设置cookie
export const setToken = (token) => {
  if (process.SERVER_BUILD) return
//   window.localStorage.setItem('token', token)
  // window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)))
//   window.localStorage.setItem('user', JSON.stringify(token))
  Cookie.set('token', token)
}

export const unsetToken = () => {
  if (process.SERVER_BUILD) return
//   window.localStorage.removeItem('token')
//   window.localStorage.removeItem('user')
//   window.localStorage.removeItem('secret')
  Cookie.remove('token')
//   window.localStorage.setItem('logout', Date.now())
}

export const getUserFromCookie = (req) => {
  if (!req.headers.cookie) return
  const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
  if (!tokenCookie) return
  const token = tokenCookie.split('=')[1]
  return token
}

// export const getUserFromLocalStorage = () => {
//   const json = window.localStorage.user
//   return json ? JSON.parse(json) : undefined
// }

// export const setSecret = (secret) => window.localStorage.setItem('secret', secret)

// export const checkSecret = (secret) => window.localStorage.secret === secret
