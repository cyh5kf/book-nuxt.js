const mutations = {
    SET_INFO(state,content){
        const infoObj=Object.assign({},state.userInfo,content);
        state.userInfo=infoObj;
    },
}
export default mutations