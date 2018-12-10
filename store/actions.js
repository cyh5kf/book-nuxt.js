// import request from '~/service'

// const api = '/api'

// export const banner = async (store, params) => {
//   return await request.get(`${api}/v1/get_banner`, params)
// }

const actions = {
    showLoading({commit},state){
        commit('SHOW_LOADING',state)
    },
    showMsg({commit},state){
        commit('SHOW_MSG',state)
    },
    setInfo({commit},state){
        commit('SET_INFO',state)
    },
}
export default actions