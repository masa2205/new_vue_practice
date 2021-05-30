var obj = {
    foo: 'bar'
}

Object.freeze(obj)

Vue.component('list-title',{
    template: `
        <h2>ユーザーリスト</h2>
    `
})

Vue.component('user-list', {
    data() {
        return {
            users: [
                {id:1,name:'ユーザー1'},
                {id:2,name:'ユーザー2'},
                {id:3,name:'ユーザー3'},
                {id:4,name:'ユーザー4'},
                {id:5,name:'ユーザー5'},
            ]
        }
    },
    template: `
    <div>
        <list-title></list-title>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>    
    `
})

new Vue ({
    el: '#app',
}) 