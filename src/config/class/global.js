
import { notification } from 'ant-design-vue'
// import { windowsEventsTypeCode, linuxEventsTypeCode } from '../utils/type-code.js'
import { linuxEventsTypeCode } from '../utils/type-code.js'
import { useI18n } from 'vue-i18n'

class Global { 
    // 權限判別
    checkAuth (per) {
        const storage = JSON.parse(localStorage.im_token)
        return storage.permissions.includes(per)
    }
    // 更換日期
    changeDate (type) {
        switch (type) {
        // 今日
        case 1:
            return [
                new Date().Format('yyyy-MM-dd 00:00:00'),
                new Date().Format('yyyy-MM-dd 23:59:59')
            ]
            // 前七天
        case 2:
            return [
                new Date().getPreviousDay(6).Format('yyyy-MM-dd 00:00:00'),
                new Date().Format('yyyy-MM-dd 23:59:59')
            ]
            // 前３０天
        case 3:
            return [
                new Date().getPreviousDay(29).Format('yyyy-MM-dd 00:00:00'),
                new Date().Format('yyyy-MM-dd 23:59:59')
            ]
            // 今月
        case 4:
            return [
                new Date().getMonthFirstDay().Format('yyyy-MM-dd 00:00:00'),
                new Date().getMonthLastDay().Format('yyyy-MM-dd 23:59:59')
            ]
            // 上一週
        case 5:
            return [
                new Date().getPreviousDay(11).Format('yyyy-MM-dd 00:00:00'),
                new Date().getPreviousDay(5).Format('yyyy-MM-dd 23:59:59')
            ]
            // 上個月
        case 6:
            return [
                new Date().getPreviousMonthFirstDay().Format('yyyy-MM-dd 00:00:00'),
                new Date().getPreviousMonthLastDay().Format('yyyy-MM-dd 23:59:59')
            ]
        }
    }
    // 快速選擇日期
    getDateSelect () {
        const i18n = useI18n()
        return [
            { id: 1, name: i18n.t('Date.today') },
            { id: 2, name: i18n.t('Date.before7Days') },
            { id: 3, name: i18n.t('Date.before30Days') },
            { id: 4, name: i18n.t('Date.thisMonth') },
            { id: 5, name: i18n.t('Date.lastWeek') },
            { id: 6, name: i18n.t('Date.lastMonth') },
        ]
    }
    // 取得星期
    getWeekSelect () {
        const i18n = useI18n()
        return [
            { label: i18n.t('Placeholder.select'), value: '' },
            { label: i18n.t('Week.1'), value: 1 },
            { label: i18n.t('Week.2'), value: 2 },
            { label: i18n.t('Week.3'), value: 3 },
            { label: i18n.t('Week.4'), value: 4 },
            { label: i18n.t('Week.5'), value: 5 },
            { label: i18n.t('Week.6'), value: 6 },
            { label: i18n.t('Week.7'), value: 7 },
        ]
    }
    // 取得 24H
    getDayOfHour (time = '00:00:00', type = 'start') {
        const i18n = useI18n()
        const data = []
        for (let i = parseInt(time.slice(0, 2)); i < 25; i++) {
            data.push({ label: `${i < 10 ? '0' : ''}${i}:00`, value: `${i < 10 ? '0' : ''}${i}:00:00` })
        }
        if (type == 'end') data.shift()
        if (time == '23:59:59') data.pop()
        if (data.length > 0) data[data.length - 1].value = '23:59:59'
        data.unshift({ label: i18n.t('Placeholder.select'), value: ''  })
        return data
    }
    // 邏輯
    getLogic () {
        return [
            { label: 'AND', value: 'AND' },
            { label: 'OR', value: 'OR' },
        ]
    }
    // 等於、不等於
    getCondition () {
        return [
            { label: '=', value: 0 },
            { label: '!=', value: 1 },
        ]
    }
    getSearchKey () {
        const i18n = useI18n()
        const item = ['message', 'dev_ip', 'equipment_groups', 'source_ip', 'dst_ip',
            'event_id', 'programname', 'src_port', 'dst_port', 'sensor_id', 'username',
            'request', 'src_country', 'reason', 'result', 'object_name', 'act', 'domain',
            'suser', 'cs1', 'cs2', 'status', 'fname']
        const data = item.map(el => {
            return {
                label: i18n.t(`SearchFilter.${el}`),
                value: el
            }
        })
        return data
    }
    // 下拉選單搜尋過濾
    filterOption (input, option) {
        return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    // 基本過濾（String, Number, Boolean）
    filter (originData, payload) {
        let data = originData
        Object.entries(payload).forEach(([key, value]) => {
            if (value !== '') {
                data = data.filter(el => String(el[key]).toLowerCase().indexOf(String(value).trim().toLowerCase()) >= 0)
            }
        })
        return data
    }
    // Table 顯示總筆數
    showTotal (total, range) {
        return `${range[0]}-${range[1]} of ${total} items`
    }
    // 排序 (data, field, order)
    sort (data, field, order) {
        console.log(data, field, order)
        const arr = data
        arr.sort((a, b) => {
            let tempA, tempB
            // 型別是 string 就直接在判別式做排序，其餘的就轉換後再做排序
            if (typeof a[field] == 'string' || typeof b[field] == 'string') {
                tempA = a[field].toUpperCase()
                tempB = b[field].toUpperCase()
                if (tempA > tempB) return order == 'ascend' ? 1 : -1
                else if (tempA < tempB) return order == 'ascend' ? -1 : 1
                return 0
            } else if (field == 'ip') {
                tempA = a[field].split('.').map((el) => el.padStart(3, '0')).join('')
                tempB = b[field].split('.').map((el) => el.padStart(3, '0')).join('')
            } else {
                tempA = a[field]
                tempB = b[field]
            }
            return (order == 'ascend') ? tempB - tempA : tempA - tempB
        })
        return arr
    }
    // 數字補標點符號
    commaFormat(num) {
        return num.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, (all, pre, groupOf3Digital) => {
            return pre + groupOf3Digital.replace(/\d{3}/g, ',$&')
        })
    }
    // Windows events type
    // getWindowsEventsType () {
    //     const i18n = useI18n()
    //     const data = Object.entries(windowsEventsTypeCode).map(([key, value]) => {
    //         return {
    //             label: `${key} - ${value}`,
    //             value: key
    //         }
    //     })
    //     data.unshift({
    //         label: `${i18n.t('Utils.custEventID')}`,
    //         value: '-99'
    //     })
    //     return data
    // }
    // Linux evnets type
    getLinuxEventsType () {
        const data = Object.entries(linuxEventsTypeCode).map(([key, value]) => {
            return {
                label: value,
                value: key
            }
        })
        return data
    }
    genUrlQueryString (params = {}) {
        const arr = []
        Object.entries(params).forEach(([key, value]) => {
            arr.push(`${key}=${value}`)
        })
        return arr.join('&')
    }
    // 單純做 AND
    genQueryString (params = {}) {
        const query = []
        Object.entries(params).forEach(([key, value]) => {
            if (value !== '' && value !== '**') {
                query.push(`${key}: ${value}`)
            }
        })
        return query.join(' AND ')
    }
    genQueryStringByBuilder (data, condition = '', space = false) {
        let arr = []
        if(Array.isArray(data)) {
            data.forEach(rule => {
                if (!('rules' in rule)) {
                    if (rule.value != '')
                        if (space) arr.push(`${rule.key} ${rule.operator} "${rule.value}"`)
                        else arr.push(`${rule.key}${rule.operator}"${rule.value}"`)
                } else {
                    if (this.genQueryStringByBuilder(rule.rules, rule.conditions, space) != '')
                        arr.push(`(${this.genQueryStringByBuilder(rule.rules, rule.conditions, space)})`)
                }
            })
            arr = [arr.join(` ${condition} `)]
        } else {
            if (!('rules' in data)) {
                data.forEach(rule => {
                    if (space) arr.push(`${rule.key} ${rule.operator} "${rule.value}"`)
                    else arr.push(`${rule.key}${rule.operator}"${rule.value}"`)
                })
            } else {
                if (this.genQueryStringByBuilder(data.rules, data.conditions, space))
                    arr.push(`(${this.genQueryStringByBuilder(data.rules, data.conditions, space)})`)
            }
            arr = [arr.join(` ${condition} `)]
        }
        return arr.join(condition)
    }
    // 回傳 unit 類型 (Ｍ、Ｈ、Ｄ)
    unit (startTime, endTime) {
        const duration = new Date(endTime) - new Date(startTime);
        const diffTime = Math.abs(duration);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays > 32 ? 'M' : (diffDays <= 1 ? 'H' : 'D')
    }
    // 數值轉換成 KMBT
    unitFormat (num) {
        const x = ('' + num).length
        if (x >= 4) {
            const k = 1000
            const i = Math.floor(Math.log(num) / Math.log(k))
            return (num / Math.pow(k, i)).toFixed(1) + 'kMBT'[i - 1]
            // const p = Math.pow
            // decimal = p(10, decimal)
            // x -= x % 3
            // return Math.round(num * decimal / p(10, x)) / decimal + 'kMBT'[(x / 3) - 1]
        } else return num
    }
    dateFormat (unit) {
        let format = 'yyyy'
        if (unit == 'M') format += '-MM'
        else if (unit == 'D') format += '-MM-dd'
        else if (unit == 'H') format += '-MM-dd hh:mm:ss'
        return format
    }
    // 複製到剪貼簿
    copyToClipBoard (text) {
        navigator.clipboard.writeText(text).then(() => {
            notification.success({
                message: '已複製到剪貼簿',
                description: '',
            })
        })
            .catch(err => {
                console.log('Something went wrong', err);
            })
        return
    }
}

export default new Global()