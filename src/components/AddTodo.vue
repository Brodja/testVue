<template>
  <form @submit.prevent="submit(note.id)">
    <input type="text" v-model="title" />
    <button type="submit">Создать</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
   computed: {
    note() {
      return this.$store.getters.noteById(+this.$route.params.id);
    } 
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    // ...mapMutations(["addTodo"]),
    submit(id) {
      
        const newTodo ={ 
          noteId: id,
          id: Date.now(),
          title: this.title,
          completed: false,
          }
      this.title = ''
      this.$store.dispatch("addTodo", newTodo, id);
    },
    // submit(id) {
    //   if (this.title.trim()) {
    //     this.addTodo({
    //       id: Date.now(),
    //       title: this.title,
    //       completed: false,
    //     });
    //   }
    //   this.title = ''
    //   this.$store.dispatch("addTodo", id);
    // },
  },
};
</script>