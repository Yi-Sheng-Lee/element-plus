/* eslint-disable no-undef */
import { AUTH } from "../api/api.js"
import axios from "axios"

export const ACCESS = {
    // login(payload) {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             axios
    //                 .post(AUTH.LOGIN, payload)
    //                 .then(({ data } = response) => {
    //                     if (data.status === true) {
    //                         resolve(data.data)
    //                     } else {
    //                         reject(data.data)
    //                     }
    //                 })
    //                 .catch((error) => {
    //                     reject(error)
    //                 })
    //         } catch (error) {
    //             reject(error)
    //         }
    //     })
    // },
    login(payload) {
        axios
            .post(AUTH.LOGIN, payload)
            .then(({ data } = response) => {
                if (data.status === true) {
                    return  new Promise.resolve(data.data)
                } else {
                    return  new Promise.reject(data.data)
                }
            })
            .catch((error) => {
                return new Promise.reject(error)
            })
        // return new Promise((resolve, reject) => {
        //     try {
        //         axios
        //             .post(AUTH.LOGIN, payload)
        //             .then(({ data } = response) => {
        //                 if (data.status === true) {
        //                     resolve(data.data)
        //                 } else {
        //                     reject(data.data)
        //                 }
        //             })
        //             .catch((error) => {
        //                 reject(error)
        //             })
        //     } catch (error) {
        //         reject(error)
        //     }
        // })
    },
    // logout () {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             axios
    //                 .post(AUTH.LOGOUT, null)
    //                 .then(({ data } = response) => {
    //                     if (data.status === true) {
    //                         resolve(data)
    //                     } else {
    //                         reject(data)
    //                     }
    //                 })
    //                 .catch(error => {
    //                     reject(error)
    //                 })
    //         } catch (error) {
    //             reject(error)
    //         }
    //     })
    // },
    // tokenRefresh () {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             axios
    //                 .post(AUTH.LOGIN + '/refresh', null)
    //                 .then(response => {
    //                     resolve(response)
    //                 })
    //                 .catch(error => {
    //                     reject(error)
    //                 })
    //         } catch (error) {
    //             reject(error)
    //         }
    //     })
    // }
}
