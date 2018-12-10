const mutations = {
    SHOW_LOADING(state,flag){
        state.show_loading = flag
    },
    SHOW_MSG(state,content){
        state.msg.content = content
        state.msg.show = true
        setTimeout(() => {
            state.msg.show = false
        },state.msg.time)
    },
    SET_INFO(state,content){
        const infoObj=Object.assign({},state.userInfo,content);
        state.userInfo=infoObj;
        localStorage.setItem('userInfo',JSON.stringify(infoObj))
    },
}
export default mutations