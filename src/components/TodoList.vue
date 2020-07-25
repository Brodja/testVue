<template>
  <div>
    <ul>
      <TodoItem
        v-for="note of note.todos"
        :key="note.id"
        v-bind:note="note"
        v-on:removeTodo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  computed: {
    note() {
      return this.$store.getters.noteById(+this.$route.params.id);
    },
  },
  props: {},
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit('removeTodo', id)
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