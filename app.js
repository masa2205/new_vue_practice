let STORAGE_KEY = 'todos-vuejs-demo'
let todoStorage = {
    fetch: function() {
        var todos = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || '[]'
        )
        todos.forEach(function(todo, index) {
        todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save: function(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}

new Vue ({
    el: '#app',
    data: {
        todos: [],
        options: [
            {value: -1, label:'すべて'},
            {value: 0, label:'作業中'},
            {value: 1, label:'完了'}
        ],
        current: -1
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
            todo.state = !todo.state ? 0 : 1
        },
        remove: function(todo) {
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
    },
    computed: {
        computedTodos: function () {
            return this.todos.filter(function(el){
                return this.current < 0 ? true : this.current === el.state
            }, this)
        },
        labels() {
            return this.options.reduce(function(a,b){
                return Object.assign(a, {[b.value]: b.label})
            }, {})
        }
    }
}) 