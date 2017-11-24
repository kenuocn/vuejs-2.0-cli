<template>
    <div id="todos">
        <ul class="list-group" >
            <li class="list-group-item"
                :class="todo.completed == '1' ? 'completed' : ''"
                v-for="(todo, index) in todos">

                <router-link :to="{ name:'todo', params:{id:todo.id}}">{{todo.title}}</router-link>
                <button class="btn btn-xs pull-right"
                        :class="'btn-' + (todo.completed == '1' ? 'danger' : 'success')"
                        v-on:click="toggleCompletion(todo)">
                    {{ todo.completed == '1' ? 'undo' : 'completed'}}
                </button>
                <button class="btn btn-warning btn-xs pull-right completed-right" @click="deleteTodo(todo,index)">
                    删除
                </button>
            </li>
        </ul>
        <todo-form></todo-form>
    </div>
</template>

<script>
    import TodoForm from './TodoForm'

    export default {

        name:'todos',

        computed:{
          todos(){
              return this.$store.state.todos
          }
        },

        methods: {
            deleteTodo: function (todo,index)
            {
              this.$store.dispatch('removeTodo',{ todo, index });
            },
            toggleCompletion(todo) {
                this.$store.dispatch('completeTodo',todo);
            },
        },

        components: {
            TodoForm
        },

    }
</script>

<style>
    .completed {
        color: chartreuse;
        text-decoration: line-through;
    }

    .completed-right {
        margin-right: 10px;
    }
</style>
