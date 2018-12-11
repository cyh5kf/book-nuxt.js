import axios from 'axios'
import store from '@/store/index.js';

// axios 配置
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/api`

// console.log(store.state);

const initParam = {
    // token: store.state.userInfo? store.state.userInfo.token: '',
    id: "1",
    jsonrpc: "2.0"
}

// request
axios.interceptors.request.use(
    (config) => {
        // store.dispatch('showLoading', true)
        config.data = Object.assign(config.data || {}, initParam);
        return config;
    }, (error) => {
        console.log(error);
        return Promise.reject(error);
    });

// response
axios.interceptors.response.use((response) => {
    // store.dispatch('showLoading', false)
    return response;
}, (error) => {
    console.log(error);
    return Promise.reject(error);
});


function http(url, params, all, type) {
    return new Promise((resolve, reject) => {
        return axios({
            url: url,
            method: type,
            data: params
        }).then((response) => {
            resolve(response.data)
            // if (all) {
            //     resolve(body.data);
            // } else {
            //     const {body} =  response
            //     switch(body.responseCode) {
            //         case '000000':
            //             resolve(body.data)
            //             break
            //         case '999998':
            //             store.dispatch('setLoginTo', '/my/index')
            //             store.dispatch('setInfo',{
            //                 realNameStatus: '',
            //                 uid: '',
            //                 isPayPasWord: '',
            //                 token: '',
            //                 riskScore: 0,
            //                 realNameStatus:'',
            //             })
            //             window.location.href = '/login'
            //             break
            //         case '999999':
            //             store.dispatch('showMsg', body.responseMessage)
            //             break
            //         default:
            //             store.dispatch('showMsg', body.responseMessage || '当前投资用户过多，系统玩命处理中，请稍后重试')
            //             break
            //     }
            // }
        }).catch((error) => {//错误业务逻辑
            console.log(error)
            // store.dispatch('showMsg', '当前投资用户过多，系统玩命处理中，请稍后重试')
        });
    });
};

const api = {}
api.get = (url, params, all=false) => http(url, params, all, "get");
api.post = (url, params, all=false) => http(url, params, all, "post");

export default api