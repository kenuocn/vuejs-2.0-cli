<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view :todos="todos"></router-view>
  </div>
</template>

<script>

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
      })
  },

  methods:{
      todoCount(){
          return this.todos.length;
      }
  },

  components: {

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
