/* eslint-disable */
import axios from 'axios'
import { API_HOST, HTTP_TIMEOUT } from '@/config'
import wrapper from './error'

var requestId = 0


function api(url) {
    return API_HOST + url
}

export function getRequestId() {
    requestId++
    return requestId
}

function get(url, config) {
    config = typeof config === undefined ? {} : config
    config = Object.assign({
        timeout: HTTP_TIMEOUT,
        withCredentials: true,
    }, config)
    return wrapper(axios.get(api(url), config))
}

function post(url, data, config) {
    config = typeof config === undefined ? {} : config
    config = Object.assign({
        timeout: HTTP_TIMEOUT,
        withCredentials: true,
    }, config)
    return wrapper(axios.post(api(url), data, config))
}
export default {
    call: function (api, method, params) {
        if (params == null) {
            return get(api + '/' + method + '?_method_id=' + getRequestId())
        }
    },
    get: get,
    post: post
}