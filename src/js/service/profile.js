import { API } from '@/config'
import call from './call'

export async function getProfileConfig() {
    return call(API.PROFILE, 'getConfig').then(data => {
        return data.result
    })
}
