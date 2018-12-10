import axios from 'axios'

const initParam = {
    token: '',
    id: "1",
    jsonrpc: "2.0"
}

// url前缀
const prefix = '/api'

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
            url: prefix + url,
            method: type,
            data: params,
            headers: {
                'Content-Type': 'application/json'
            }
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