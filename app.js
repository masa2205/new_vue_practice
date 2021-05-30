var obj = {
    foo: 'bar'
}

Object.freeze(obj)

const ListTitle = {
    template: `
        <h2>ユーザーリスト</h2>
    `
}

const UserDetail = {
    props: {
        user: {
            type: Object
        }
    },
    template: `
        <div>
            <h2>選択中のユーザー</h2>
            {{ user.name }}
        </div>
    `
}

const UserList = {
    components: {
        'list-title': ListTitle,
        'user-detail': UserDetail
    },
    data() {
        return {
            users: [
                {id:1,name:'ユーザー1'},
                {id:2,name:'ユーザー2'},
                {id:3,name:'ユーザー3'},
                {id:4,name:'ユーザー4'},
                {id:5,name:'ユーザー5'},
            ],
            selected_user: {

            }
        }
    },
    template: `
    <div>
        <list-title></list-title>
        <ul>
            <li v-for="user in users" :key="user.id" @click='selected_user = user'>
                {{ user.name }}
            </li>
        </ul>
        <user-detail :user='selected_user'></user-detail>
    </div>    
    `
}

new Vue ({
    el: '#app',
    components: {
        'user-list': UserList
    }
}) 