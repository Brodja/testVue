<template>
  <div>
    <h1>Редактирование заметки</h1>
    <div v-if="note">
      <h2>Заметка: {{note.note}}</h2>
    </div>
    <p v-else>Заметки по этому id не существует</p>
    <hr />
    <div class="btns">
      <button @click="editMode" class="edit">Редактирование</button>
      <button @click="save" class="visubility save">Сохранить</button>
      <button class="visubility">Отменить редактирование</button>
      <button class="visubility">Отменить</button>
      <button class="visubility">Вернуть</button>
    </div>
    <hr />
    <h2>Добавление Todo</h2>
    <AddTodo class="visubility" />
    <hr />
    <h3>Список todo</h3>
    <TodoList @removeTodo="removeTodo" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
export default {
  computed: {
    note() {
      return this.$store.getters.noteById(+this.$route.params.id);
    },
  },
  data: () => ({
    todo: "",
  }),
  methods: {
    removeTodo(id) {
      const idBox = {
        id: id,
        noteId: this.note.id,
      };
      this.$store.dispatch("removeTodo", idBox);
    },
    editMode() {
      document.querySelector(".edit").style.display = "none";
      let v  = document.querySelectorAll(".visubility")
      v.forEach(function(item, i, arr){
        item.style.display = "block"
      })
    },
    save() {
        let v  = document.querySelectorAll(".visubility")
      v.forEach(function(item, i, arr){
        item.style.display = "none"
      })
      document.querySelector(".edit").style.display = "block";
    },
  },
  components: {
    TodoList,
    AddTodo,
  },
};
</script>


<style lang="scss" scoped>
.btns{
  display: flex;
  justify-content: space-between;
}
.visubility {
  display: none;
}
.save {
  display: none;
}
</style>
