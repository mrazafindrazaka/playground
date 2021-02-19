import { reactive, readonly } from 'vue'

const state = reactive({
    name: ''
})

const update_name = (name) => {
    state.name = name
}

export default {
    state: readonly(state),
    update_name,
}
