import axios from "axios";

let config = {
    baseURL: "http://localhost:8090",
    timeout: 60 * 1000, // Timeout
};

const _axios = axios.create(config);

/**请求拦截 */
_axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 响应拦截
_axios.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (error) {
        return Promise.reject(error);
    }
);

export function get(url, params) {
    return _axios.get(url, {
        params
    })
}

export function post(url, data) {
    return _axios.post(url, data)
}
