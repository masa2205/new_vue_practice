var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue ({
    el: '#app',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function (){
            return this.message.split('').reverse().join('')
        }
    }
})