var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue ({
    el: '#app',
    data: {
        todos: [
            {text:"vue",done:false},
            {text:"react",done:false},
            {text:"html",done:false},
            {text:"css",done:false}
        ]
    },
    methods: {
        toggle: function(todo){
            todo.done = !todo.done
        }
    }
}) 