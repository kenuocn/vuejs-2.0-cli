// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 插件
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Todos from './components/Todos'
import Todo from './components/Todo'
import Vuex from 'vuex'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueRouter);

//定义路由
const routes = [
    { path: '/', component: Todos  },
    { path: '/todo/:id', component: Todo , name:'todo' }
];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

const store = new Vuex.Store({
    state: {
        todos: [],
        newTodo:{title:'',completed:0}
    },

    mutations: {
        get_todoss_list (state,todos) {
            state.todos = todos;
        },

        complete_todo(state,todo)
        {
           todo.completed = ! todo.completed;
        },

        delete_todo(state,index)
        {
           state.todos.splice(index, 1)
        },

        add_todo(state,todo)
        {
          state.todos.push(todo);
          state.newTodo = {title:'',completed:0};
        }
    },

    actions: {
        getTodos(store)
        {
            Vue.axios.get('http://vue-spa.dev/api/todos').then((response) =>{
                store.commit('get_todoss_list',response.data);
            })
        },

        completeTodo(store,todo)
        {
            Vue.axios.patch(`http://vue-spa.dev/api/todos/${todo.id}`).then(response=>{
              store.commit('complete_todo',todo);
            });
        },

        removeTodo(store,payload)
        {
            Vue.axios.delete(`http://vue-spa.dev/api/todos/${payload.todo.id}`).then(response =>{
              store.commit('delete_todo',payload.index);
            });
        },

        saveTodo(store,todo)
        {
            Vue.axios.post('http://vue-spa.dev/api/todos',{title:todo.title}).then(response=>{
              store.commit('add_todo',todo);
            });
        }
    },
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router,
});
