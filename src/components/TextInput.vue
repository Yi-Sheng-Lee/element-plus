<template>
    <!-- <div :class="{ 'has-error': errorMessage }">
        <label :for="name">test1</label>
        <input v-if="inputObject.type == 'input'"
            :name="inputObject.name"
            :id="inputObject.name"
            :type="inputObject.inputType || 'text'"
            :rules="inputObject.rules"
            :value="inputObject.value"
            :placeholder="inputObject.placeholder"
            @input="handleChange"
            @blur="handleBlur"
        />
        <select v-else-if="inputObject.type == 'select'"
            :name="inputObject.name"
            :id="inputObject.name"
            :rules="inputObject.rules"
            :value="inputObject.value"
            :placeholder="inputObject.placeholder"
            @input="handleChange"
            @blur="handleBlur"
        >
            <option :value="-1">select</option>
            <option :value="opt[inputObject.optionConfig.showValue]"
                v-for="(opt, key) in inputObject.options" :key="key"
            >{{ opt[inputObject.optionConfig.showName] }}</option>
        </select>
        <p v-if="errorMessage">{{ $t(errorMessage) }}</p>
    </div> -->
    <div>
        <label :for="schema.name">{{ schema.label }}</label>
        <Field
            v-if="schema.as == 'input'"
            :as="schema.as"
            :id="schema.name"
            :name="schema.name"
            :rules="schema.rules"
            :value="schema.value"
        ></Field>
        <Field
            v-if="schema.as == 'select'"
            as="select"
            :id="schema.name"
            :name="schema.name"
            :rules="schema.rules"
            :value="schema.value"
        >
            <option
                :value="opt[schema.config.optValue]"
                v-for="(opt, index) in schema.options"
                :key="index"
            >
                {{ opt[schema.config.optName] }}
            </option>
        </Field>
        <ErrorMessage :name="schema.name" v-slot="{ message }">
            <p>{{ $t(message) }}</p>
        </ErrorMessage>
    </div>
</template>
<script setup>
import { defineProps } from "vue"
const props = defineProps({
    schema: {
        type: Object,
        default() {
            return {}
        },
    },
})

const test = () => {
    console.log(props.schema)
}

test()
</script>
