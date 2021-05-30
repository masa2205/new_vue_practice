var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue ({
    el: '#app',
    data() {
        return {
            reverse: false
        }
    }
})