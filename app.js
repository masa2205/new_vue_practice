new Vue ({
    el: '#app',
    data: {
        todos: []
    },
    methods: {
        doAdd: function (event,value) {
            let comment = this.$refs.comment
            if (!comment.value.length) {
                return
            }
            this.todos.push({
                id: todoStorage.uid++,
                comment: comment.value,
                state: 0
            })
            comment=''
        },
        changeState: function(todo) {
            todo.state = todo.state ? 0 : 1
        },
        remove: function () {
            let index = this.todos.indexOf(todo)
            this.todos.splice(index,1)
        }
    },
    watch: {
        todos: {
            handler: function (todos) {
                todoStorage.save(todos)
            },
            deep: true
        }
    },
    created() {
        this.todos = todoStorage.fetch()
    }
}) 