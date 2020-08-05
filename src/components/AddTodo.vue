<template>
    <div class="form">
    <input type="text" v-model="title" />
    <button type="send"  v-on:click="addTodo">Создать</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["note"],
  data() {
    return {
      title: "",
    }
  },
  methods: {
    addTodo() {
      const newTodo = {
        noteId: this.note.id,
        id: Date.now(),
        title: this.title,
        completed: false,
      };
      this.note.push(newTodo);
      this.title = ''

    },
  },
};
</script>