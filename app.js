var obj = {
    foo: 'bar'
}

Object.freeze(obj)

const Layout = {
    template: `
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>        
    `
}

new Vue ({
    el: '#app',
    components: {
        'layout': Layout
    }
}) 