import request from './request'
import { getRequestId } from './request'
import { API } from '@/config'
import { UPLOAD_OBJECT_ERROR } from './error'

export class UploadStatus {
    constructor(loaded, total) {
        this.loaded = loaded
        this.total = total
    }
}

export function uploadSimpleFile(file, uploadStatus) {
    if (!file instanceof Blob) {
        return new Promise(function (resolve, reject) {
            reject(new UploadError(UPLOAD_OBJECT_ERROR, 'file must be Blob object'))
        })
    }
    let config = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: e => {
            if (uploadStatus !== undefined) {
                uploadStatus(new UploadStatus(e.loaded, e.total))
            }
        }
    };
    let params = new FormData();
    params.append('file', file);
    return request.post(API.UPLOAD + '/upload', params, config).then(data => {
        return data.result
    })
}

export function create() {
    return request.get(API.UPLOAD + '/create').then(data => {
        return data.result
    })
}

export function finish(id, filename, md5) {
    return request.post(API.UPLOAD, {
        id: getRequestId(),
        method: 'finish',
        params: {
            
        }
    }).then(data => {
        return data.result
    })
}
