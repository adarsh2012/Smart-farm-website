<template>
  <div id="app">
    <Header />
    <AddTodo />
    <Todo
      v-bind:todoList="todos"
      v-on:del-todo="deleteTodo"
      @addItem="addItem"
    />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import AddTodo from "./components/AddTodo.vue";
import Header from "./components/layout/header";
export default {
  name: "App",
  components: {
    Todo,
    Header,
    AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          name: "Adarsh",
          home: "House",
          complete: true
        },
        {
          id: 2,
          name: "Bradarsh",
          home: "Road",
          complete: false
        }
      ]
    };
  },
  methods: {
    deleteTodo: function(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addItem: function() {
      var newData = {
        id: Math.random(),
        name: "mia" + Math.round(10 * Math.random(), 3),
        home: "Khalifa",
        complete: false
      };
      this.todos.push(newData);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
