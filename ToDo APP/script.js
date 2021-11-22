const newTodoItem = {
    data: () => ({
        item
    }),
    methods: {
        handleInput() {
            this.
        }
    },
    template: `
        <div class="add_todo">
            <label for="new_todo">New ToDo</label>
            <input type="text" id="new_todo" placeholder="new todo item" v-model="item">
            <button @click="handleInput">Add ToDo</button>
        </div>
    `
}

const todoItem = {
    props: ['value', 'item'],
    data: () => ({
        content: this.value
    }),
    template: `
        <div class="list_content">
            <p> {{ item }} </p>
            <button>Remove</button>
        </div>
    `
}

const vm = new Vue({
    el: '#list_todo',
    components: {
        'new-item': todoItem
    }
})

//https://www.devaradise.com/vue-example-projects