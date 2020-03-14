<template>
  <div>
    <button id="add" @click="$emit('addItem')">+</button>
    <ol>
      <span :key="todo.id" v-for="todo in todoList">
        <TodoItem
          v-bind:todo="todo"
          v-on:del-todo="$emit('del-todo', todo.id)"
        />
      </span>
    </ol>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todo",
  props: ["todoList"],
  components: {
    TodoItem
  }
};
</script>

<style scoped></style>
