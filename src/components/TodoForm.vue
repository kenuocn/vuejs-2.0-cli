<template>
  <form v-on:submit.prevent="addTodo(newTodo)">
    <div class="from-group">
      <input type="text"
             v-model="newTodo.title"
             class="form-control"
             placeholder="Add a new todo">
    </div>
    <br>
    <div class="form-group">
      <button class="btn btn-success" type="submit">Add Todos</button>
    </div>
  </form>
</template>

<script>
    export default {
        props:['todos'],

        data() {
          return {
            newTodo:{id:null,title:'',completed:false},
          }
        },

        methods:{
          addTodo:function (newTodo) {
            this.axios.post('http://vue-spa.dev/api/todos',{title:this.newTodo.title}).then(response=>{
                this.todos.push(response.data);
                console.log(response.data);
            });

            this.newTodo = {id:null,title:'',completed:false};
          }
        },
    }
</script>

