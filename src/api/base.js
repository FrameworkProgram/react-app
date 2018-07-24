import axios from 'axios';

// 通用配置
axios.defaults.baseURL = '//';
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.put['Content-Type'] = "application/json";

// request 预处理
axios.interceptors.request.use( config => {
    //非登录接口携带token
    if (config.url.indexOf('login') === -1) {
        config.headers.common['Authentication'] = `token`;
    }
    return Promise.resolve(config);
}, error => {
    return Promise.reject(error);
})

// response 预处理
axios.interceptors.response.use( response => {
    let data = response.data
    // 常用status为0 视为正常
    if(!!data.status) {
        return Promise.reject(data)
    }

    return Promise.resolve(response.data);
}, error => {
    return Promise.reject(error);
})

export default class Ajax {
    constructor(options = {}) {
        this.options = options;
    }

    request(options) {
        return axios.request(options);
    }

    get(url, options = {}) {
        return this.request({
            url,
            params: {
                ...options
            }
        })
    }

    delete(url, options = {}) {
        return this.request({
            method: 'delete',
            url,
            params: {
                ...options
            }
        })
    }

    post(url, data, options = {}) {
        if (data instanceof Object) {
            data = JSON.stringify(data);
        }
        return this.request({
            method: 'post',
            url,
            data,
            ...options
        });
    }

    put(url, data, options = {}) {
        if (data instanceof Object) {
            data = JSON.stringify(data);
        }
        return this.request({
            method: 'put',
            url,
            data,
            ...options
        });
    }
}
const instanceAxios = new Ajax();
// 重置this为instanceAxios
export const request = instanceAxios.request.bind(instanceAxios);
export const get = instanceAxios.get.bind(instanceAxios);
export const post = instanceAxios.post.bind(instanceAxios);
export const put = instanceAxios.put.bind(instanceAxios);
export const deleteAjax = instanceAxios.delete.bind(instanceAxios);
