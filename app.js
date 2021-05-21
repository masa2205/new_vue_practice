var app = new Vue ({
    el: '#app',
    data: {
        name: 'masa'
    },
    methods: {
        someFunc: function() {
            this.hello();
        },
        hello: function() {
            alert('Hello, ' + this.name)
        }
    }
})