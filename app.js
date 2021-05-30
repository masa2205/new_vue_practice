var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue ({
    el: '#app',
    template: `
        <div v-if='message'>{{ message }}</div>
        <div v-else>メッセージがありません</div>
    `,
    data() {
        return {
            message: 'こんにちは'
        }
    }
}) 