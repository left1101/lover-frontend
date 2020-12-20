/* eslint-disable */
export const API_HOST = process.env.NODE_ENV === 'production' ? 'https://only.dxkite.cn/api.php': "http://only.dxkite.dx";
export const HTTP_TIMEOUT = 30000

export const API = {
    PROFILE: '/api/profile',
    UPLOAD: '/api/block-upload'
}