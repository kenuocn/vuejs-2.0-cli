<template>
  <div id="app">
    <img src="./assets/logo.png">
    <todos :todos="todos"></todos>
    <todo-form :todos="todos"></todo-form>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export default {

  data(){
    return {
        todos:[],
    }
  },

  mounted()
  {
      this.axios.get('http://vue-spa.dev/api/todos').then((response) => {
          this.todos = response.data;
          console.log(response.data)
      });
      this.todoCount();
  },

  methods:{
      todoCount(){
          return this.todos.length;
      }
  },

  components: {
    Todos,TodoForm
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
