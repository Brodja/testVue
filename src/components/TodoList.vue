<template>
  <div>
    <ul v-if="todos">
      <TodoItem
        v-for="item of todos"
        :key="item.id"
        v-bind:item="item"
        v-on:removeTodo="removeTodo"
        v-on:editTodo="editTodo"
        v-on:checkedTodo="checkedTodo"
      />
    </ul>
    <p v-else>Туду по этой заметке не существует</p>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit("removeTodo", id);
    },
    editTodo(id) {
      this.$emit("editTodo", id);
    },
    checkedTodo(id) {
      this.$emit("checkedTodo", id);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>