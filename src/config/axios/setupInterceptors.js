import axios from 'axios'
import Service from '../class/service.js'
// import { AUTH } from '../api/api.js'

const setup = () => {
    // request
    // let isRefreshing = false
    // 
    axios.interceptors.request.use(
        (config) => {
            const token = Service.getLocalAccessToken()
            if (token) {
                if (config.url.indexOf('login') < 0) {
                    config.headers['Authorization'] = `JWT ${token}`
                }
            }
            return config
        },
        (err) => {
            return Promise.reject(err)
        }
    ),
    // response
    axios.interceptors.response.use(
        async (res) => {
            if (import.meta.env.DEV) {
                console.log(res)
            }
            const data = res
            if (typeof(data.data.data) == 'string')
                if (data.data.data.includes('pymysql.err')) data.data.data = 'DB10000'
            // const originalConfig = res.config
            // if (res.data.data === 'CE40103' && !originalConfig._retry) {
            //     if (!isRefreshing) {
            //         isRefreshing = true
            //         originalConfig._retry = true
            //         try {
            //             const rs = await axios.post(`${AUTH.LOGIN}/refresh`)
            //             const { access_token } = rs.data.data
            //             store.dispatch('auth/refreshToken', access_token)
            //             Service.updateLocalAccessToken(access_token)
            //             const re = await axios(originalConfig)
            //             isRefreshing = false
            //             return re
            //         } catch (_err) {
            //             return Promise.reject(_err)
            //         }
            //     } else {
            //         while (!isRefreshing) {
            //             if (isRefreshing) {
            //                 continue
            //             } else {
            //                 break
            //             }
            //         }
            //         return axios(originalConfig)
            //     }
            // }
            if (res.data.token) {
                Service.updateLocalAccessToken(res.data.token)
            }
            return data
        },
        async (err) => {
            console.log('err', String(err))
            let code = ''
            if (String(err).includes('Network Error')) code = 'NE50001'
            else code = err
            // const originalConfig = err.config

            // if (originalConfig.url !== "/login" && err.response) {
            //     // Token expired
            //     if (err.response.status === 401 && !originalConfig._retry) {
            //         originalConfig._retry = true

            //         try {
            //             const rs = await axios.post("/login/refresh")
            //             console.log(rs)
            //             const { access_token } = rs.data
            //             store.dispatch("auth/refreshToken", access_token)
            //             Service.updateLocalAccessToken(access_token)

            //             return axios(originalConfig)
            //         } catch (_err) {
            //             return Promise.reject(_err)
            //         }
            //     }
            // }
            return Promise.reject(code)
        }
    )
}

export default setup
