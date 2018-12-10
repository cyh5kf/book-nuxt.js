const getters = {
    loading: (state) => state.show_loading,
    msg: (state) => state.msg,
    userInfo:(state) => state.userInfo,//用户基本信息
    isAuthenticated: (state) => !!state.userInfo
}
export default getters