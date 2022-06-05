// import { notification } from 'ant-design-vue'
import bus from '../mitt'
// import { useI18n } from 'vue-i18n'

class Response {
    success (content) {
        // notification.success({
        //     message: content,
        //     description: '',
        // })
        const msg = {
            type: 'success',
            code: '',
            confirm: {},
            showCancel: false,
            i18n: false,
            content,
            msg: []
        }
        bus.emit('handleSetResponse', msg)
        return msg
    }

    error (errCode, i18n = true) {
        const msg = []
        let code = ''
        if (typeof errCode === 'object')  {
            code = errCode.data
            if ('message' in errCode) {
                if (typeof errCode.message === 'string') {
                    msg.push(`Utils.${errCode.message}`)
                } else {
                    Object.keys(errCode.message).forEach((el) => {
                        msg.push(`Utils.${el}`)
                    })
                }
            }
        }
        else if (typeof errCode == 'string') code = errCode
        else {
            code = 'NE50001'
        }
        const payload = {
            type: 'error',
            code,
            confirm: {},
            i18n: true,
            content: [],
            msg
        }
        if (i18n) {
            payload.content.push(code === 'NE50001' || code === null ? 'Error.NE50001' : `Error.${code}`)
        } else payload.content.push(code)
        // payload.content = payload.content.concat(msg)
        // notification.error({
        //     // message: payload.content[0],
        //     message: payload.content[0],
        //     description: msg,
        // })
        bus.emit('handleSetResponse', payload)
        return payload
    }

    event (type, { content, confirmFunction, payloadData }) {
        return {
            type,
            code: '',
            confirm: {},
            confirmFunction,
            showCancel: true,
            payloadData,
            i18n: false,
            content,
        }
    }
}

export default new Response()
