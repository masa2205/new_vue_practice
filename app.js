var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue ({
    el: '#app',
    data() {
        return {
            button_disabled: false
        }
    },
    computed: {
        button_label() {
            console.log('button_disabled called')
            return this.button_disabled ? '無効' : '有効'
        }
    }
})