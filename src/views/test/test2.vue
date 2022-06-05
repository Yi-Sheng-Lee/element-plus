<template>
    <div>
        test2
        <Form @submit="onSubmit">
            <TextInput
                v-for="(schema, index) in state.inputSchema"
                :key="index"
                :schema="schema"
            />
            <!-- <ErrorMessage name="email" /> -->
            <button>Sign up for newsletter</button>
        </Form>
    </div>
</template>
<script setup>
import { reactive } from "vue"
import TextInput from "../../components/TextInput.vue"
const state = reactive({
    inputSchema: [
        {
            label: 'Your Name',
            name: "name",
            as: 'input',
            rules: 'required',
            value: '1123'
        },
        {
            label: "select",
            name: 'testSelect',
            as: 'select',
            rules: "excluded:-1",
            value: -1,
            options: [
                {
                    id: -1,
                    name: 'select'
                },
                {
                    id: 1,
                    name: 'test1'
                },
                {
                    id: 2,
                    name: 'test2'
                }
            ],
            config: {
                optValue: 'id',
                optName: 'name'
            }
        },
    ],
})
const onSubmit = (v) => {
    console.log(v)
}
</script>
