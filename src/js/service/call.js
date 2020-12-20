/* eslint-disable */
import request from './request'

var requestId = 0

export function getRequestId() {
    requestId++
    return requestId
}

function isSimple(params) {
    for (var index in params) {
        if (params[index] instanceof Blob) {
            return false;
        }
    }
    return true;
}

function buildFormData(params) {
    let form = new FormData();
    for (var name in params) {
        form.append(name, params[name])
    }
    return form
}

export default function (api, method, params, config) {
    if (params == null) {
        return request.get(api + '/' + method + '?_method_id=' + getRequestId(), config)
    }
    if (isSimple(params)) {
        return request.post(api, {
            id: getRequestId(),
            method,
            params
        }, config)
    }
    if (config === null) {
        config = {}
    }
    config.headers['Content-Type'] = 'multipart/form-data';
    let form = buildFormData(params)
    return request.post(api + '/' + method + '?_method_id=' + getRequestId(), form, config)
}