<template>
    <div id="todos">
        <ul class="list-group" v-if="todos.length > 0">
            <li class="list-group-item"
                v-bind:class="{'completed' : todo.completed}"
                v-for="(todo,index) in todos">

                <router-link :to="{ name:'todo', params:{id:todo.id}}">{{todo.title}}</router-link>

                <button class="btn btn-xs pull-right"
                        v-bind:class="[todo.completed ? 'btn-danger' : 'btn-success']"
                        v-on:click="toggleCompletion(todo)">
                    {{ todo.completed ? 'undo' : 'completed'}}
                </button>
                <button class="btn btn-warning btn-xs pull-right completed-right" v-on:click="deleteTodo(index)">
                    删除
                </button>
            </li>
        </ul>
        <todo-form :todos="todos"></todo-form>
    </div>
</template>
<style>
    .completed {
        color: chartreuse;
        text-decoration: line-through;
    }

    .completed-right {
        margin-right: 10px;
    }
</style>
<script>
    import TodoForm from './TodoForm'

    export default {

        name:'todos',

        props: ['todos'],

        methods: {
            deleteTodo: function (index) {
                this.todos.splice(index, 1)
            },
            toggleCompletion(todo) {
                todo.completed = !todo.completed;
            },
        },

        components: {
            TodoForm
        }
    }
</script>

