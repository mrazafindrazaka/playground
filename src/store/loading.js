import { reactive, readonly } from 'vue'

const state = reactive({
    show: false
})

const show_load = () => {
    state.show = true
}

const hide_load = () => {
    setTimeout(() => state.show = false, 200)
}

export default {
    state: readonly(state),
    show_load,
    hide_load
}
