<template>
  <div>
    <h1>Редактирование заметки</h1>
    <div v-if="arr">
      <h2>Заметка: {{arr[0].note}}</h2>
    </div>
    <p v-else>Заметки по этому id не существует</p>
    <hr />
    <div class="btns">
      <button @click="editMode" class="edit">Редактирование</button>
      <button @click="save" class="visubility save">Сохранить</button>
      <button @click="undoEdit" class="visubility">Отменить редактирование</button>
      <!-- <a href="#" @click="removeNote(arr[0].id)">
        <router-link tag="button" class="visubility" >Удалить</router-link>
      </a>-->
      <button @click="removeNote(arr[0].id)" class="visubility">Удалить</button>
      <button class="visubility" @click="undoAction">Отменить</button>
      <button class="visubility" @click="actionForward">Вернуть</button>
    </div>
    <hr />
    <h2>Добавление Todo</h2>
    <AddTodo v-bind:note="todos2" v-bind:listener="listener" class="visubility" />
    <hr />
    <h3>Список todo</h3>
    <TodoList
      v-bind:todos="todos2"
      @removeTodo="removeTodo"
      @editTodo="editTodo"
      @checkedTodo="checkedTodo"
    />
    <DialogWind v-if="isModalVisible" @closeModal="closeModal" @confirmDelete="confirmDelete">
      <p>{{note.note}}</p>
    </DialogWind>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import DialogWind from "@/components/DialogWind";
export default {
  computed: {
    note() {
      return this.$store.getters.noteById(+this.$route.params.id);
    },
  },
  data: () => ({
    todo: "",
    arr: "",
    todos2: "",
    isModalVisible: false,
    check: false,
    Nid: "",
    changs: [],
    countArr: -1,
    count: -1,
    stateArr: [],
    stateCount: -1,
    stateCount2: -1,
   
  }),
  mounted() {
    if (localStorage.notes) {
      this.arr = JSON.parse(localStorage.notes).filter(
        (t) => t.id === this.note.id
      );
    }
    this.todos2 = this.arr[0].todos;
  },

  methods: {
     listener() {
      this.countArr++;
      this.stateArr.push(this.todos2);
    },
    undoAction() {
      if (this.stateCount !== -1 && this.stateCount !== this.countArr) {
        this.count = 0;
      } else {
        this.count++;
      }
      this.todos2 = this.stateArr[this.countArr - this.count];
      this.stateCount = this.countArr;
    },
    actionForward() {
      // if (this.stateCount !== -1 && this.stateCount !== this.countArr) {
      //   this.count = 0;
      // } else {
      //   this.count++;
      // }
      this.todos2 = this.stateArr[this.stateCount];
      // this.stateCount = this.countArr;
    },
    removeTodo(id) {
      this.listener();
      this.todos2 = this.todos2.filter((t) => t.id !== id);
    },

    editTodo(id) {
      this.listener();
      let text = document.querySelector(".text-field");
      let input = document.querySelector(".edit-field");
      input.style.display = "block";
      text.style.display = "none";
      input.value = text.innerHTML;
    },
    checkedTodo(id) {
      this.listener();
      let todo = this.todos2.filter((t) => t.id === id);
      todo[0].completed = !todo[0].completed;
    },
    editMode() {
      document.querySelector(".edit").style.display = "none";
      let v = document.querySelectorAll(".visubility");
      v.forEach(function (item, i, arr) {
        item.style.display = "block";
      });
    },
    save() {
      let v = document.querySelectorAll(".visubility");
      v.forEach(function (item, i, arr) {
        item.style.display = "none";
      });
      document.querySelector(".edit").style.display = "block";
      let mass = {
        todos: this.todos2,
        noteId: this.note.id,
      };
      this.$store.dispatch("save", mass);
    },
    undoEdit() {
      this.isModalVisible = true;
      if (this.check) {
        if (localStorage.notes) {
          this.arr = JSON.parse(localStorage.notes).filter(
            (t) => t.id === this.note.id
          );
        }
        this.todos2 = this.arr[0].todos;
        let v = document.querySelectorAll(".visubility");
        v.forEach(function (item, i, arr) {
          item.style.display = "none";
        });
        document.querySelector(".edit").style.display = "block";
      }
      this.check = false;
    },
    removeNote(id) {
      this.Nid = id;
      this.isModalVisible = true;
      if (this.check) {
        this.$store.dispatch("removeNote", id);
        this.$router.push("/");
      }
      this.check = false;
    },
    closeModal() {
      this.isModalVisible = false;
      this.check = false;
    },
    confirmDelete() {
      this.check = true;
      if (this.Nid) {
        this.removeNote(this.Nid);
      } else this.undoEdit();
      this.isModalVisible = false;
    },
  },
  components: {
    TodoList,
    AddTodo,
    DialogWind,
  },
};
</script>


<style lang="scss" scoped>
.btns {
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
