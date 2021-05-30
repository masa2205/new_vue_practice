var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue ({
    el: '#app',
    data() {
        return {
            message: "Hello, World!"
        }
    },
    methods: {
        clickLog() {
            alert(this.message)
        },
        hoverLog() {
            console.log('hover')
        }
    }
})