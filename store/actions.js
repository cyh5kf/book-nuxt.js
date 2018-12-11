// import request from '~/service'

// const api = '/api'

// export const banner = async (store, params) => {
//   return await request.get(`${api}/v1/get_banner`, params)
// }

const actions = {
    setInfo({commit},state){
        commit('SET_INFO',state)
    },
}
export default actions