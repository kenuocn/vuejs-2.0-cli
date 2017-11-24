<template>
    <div class="todo">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <div v-if="todo" class="content">
            <h2>{{ todo.title }}</h2>
            <p>{{ todo.body }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                todo: [],
                error: null
            }
        },
        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.fetchData()
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.error = this.post = null;
                this.loading = true;
                this.axios.get('http://vue-spa.dev/api/todos/'+this.$route.params.id).then(response => {
                    this.loading = false;
                    this.todo = response.data;
                })
            }
        }
    }
</script>