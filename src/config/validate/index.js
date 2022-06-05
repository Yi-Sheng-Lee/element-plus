import { defineRule, configure } from 'vee-validate'
import { required, min, max, email, integer, confirmed, not_one_of, between } from '@vee-validate/rules'

defineRule('required', required)
defineRule('min', min)
defineRule('max', max)
defineRule('email', email)
defineRule('integer', integer)
defineRule('confirmed', confirmed)
defineRule('excluded', not_one_of)
defineRule('between', between)

configure({
    validateOnInput: true,
    generateMessage: (context) => {
        return `validation.${context.rule.name}`
    }
})