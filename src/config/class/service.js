// 初始化版本


// import { useUserStore } from '../../store/module/user'

class Service {
    // getLocalRefreshToken() {
    //     const token = JSON.parse(localStorage.getItem('im_token'))
    //     return token?.refresh_token
    // }
    
    getLocalAccessToken() {
        const token = JSON.parse(localStorage.getItem('im_token'))
        return token?.access_token
    }

    updateLocalAccessToken(token) {
        // const userStore = useUserStore()
        let currToken = JSON.parse(localStorage.getItem('im_token')) || {}
        if (Object.keys(currToken).length > 0) {
            currToken.access_token = token
        } else {
            currToken['access_token'] = token
        }
        // userStore.setAccessToken(token)
        localStorage.setItem('im_token', JSON.stringify(currToken))
    }

    updateLocalStorage(data) {
        // const userStore = useUserStore()
        let currToken = JSON.parse(localStorage.getItem('im_token'))
        Object.entries(data).forEach(([key, value]) => {
            currToken[key] = value
        })
        // userStore.setInfo(data)
        localStorage.setItem('im_token', JSON.stringify(currToken))
    }

    getToken() {
        return JSON.parse(localStorage.getItem('im_token'))
    }

    setToken(token) {
        localStorage.setItem('im_token', JSON.stringify(token))
    }

    removeToken() {
        localStorage.removeItem('im_token')
    }
    removeAll() {
        const storage = localStorage
        Object.keys(storage).forEach((val) => {
            if (val.includes('im')) localStorage.removeItem(val)
        })
    }
}

export default new Service()
