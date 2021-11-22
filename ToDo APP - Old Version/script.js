const addTodoItem = {
    data: () => ({
        item: null
    }),
    methods: {
        addToDo() {
            if(this.item){
                this.$emit('added', this.item);
            }
        }
    },
    // input tem um v-model para que o item seja alterado conforme o input
    template: `
        <div class="add_todo">
            <label for="new_todo">New ToDo</label>
            <input type="text" id="new_todo" placeholder="new todo item" v-model="item">
            <button @click="addToDo">Add ToDo</button>
        </div>
    `
}

const newTodoItem = {
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
    el: '#app',
    components: {
        'add-item': addTodoItem,
        'new-item': newTodoItem
    }
})

//https://www.devaradise.com/vue-example-projects