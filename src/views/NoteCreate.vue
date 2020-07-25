<template>
  <div>
    <div class="tittle">
      <h2>Создание заметок</h2>
    </div>
    <hr />
    <div class="note-create">
      <form @submit.prevent="submitNote">
        <div class="input-field">
          <input
            type="text"
            id="note"
            v-model="note"
            class="validate"
            placeholder="Введите название заметки"
            required
          />
          <button type="submit">Создать заметку</button>
        </div>
      </form>
    </div>
    <hr />

    <div v-if="notes.length" class="wrapper">
      <div class="header">
        <div class="header-item">#</div>
        <div class="header-item">Название</div>
        <div class="header-item">ToDo</div>
        <div class="header-item">Редактировать</div>
        <div class="header-item">Удалить</div>
      </div>
      <div class="content" v-for="(note, idx) of notes" :key="note.id">
        <div class="content-item">{{idx+1}}</div>
        <div class="content-item">{{note.note}}</div>
        <div class="content-item">
          <ul v-for="(note) of note.todos.slice(0,2)" :key="note.id">
            <!-- {{note.todos}} -->
            <li>{{note.title}}</li>
            <!-- <TodoItem /> -->
          </ul>
        </div>

        <div class="content-item">
          <router-link tag="button" class="btn" :to="'/edit/' + note.id">Редактировать</router-link>
        </div>
        <div class="content-item">
          <button v-on:click="removeNote(note.id)">Удалить</button>
        </div>
      </div>
    </div>
    <p v-else>Заметок нету</p>

    <DialogWind v-if="isModalVisible" @closeModal="closeModal" @confirmDelete="confirmDelete">
      <p>{{note.note}}</p>
    </DialogWind>
  </div>
</template>

<script>
import DialogWind from "@/components/DialogWind";
export default {
  computed: {
    notes() {
      return this.$store.getters.notes;
    },
  },
  name: "create",
  data: () => ({
    note: "",
    isModalVisible: false,
    check: false,
    Nid: ''
  }),
  components: {
    DialogWind,
  },
  methods: {
    submitNote() {
      const note = {
        note: this.note,
        id: Date.now(),
        todos: [],
      };
      this.$store.dispatch("createNote", note);
      this.note = "";
    },
    removeNote(id) {
      this.Nid=id;
      this.isModalVisible = true;
        if (this.check) {
          this.$store.dispatch("removeNote", id);
        }
      this.check = false;
    },

    closeModal() {
      this.isModalVisible = false;
      this.check = false;
    },
    confirmDelete() {
      this.check = true;
      this.removeNote(this.Nid)
      this.isModalVisible = false;
    },
  },
};
</script>


<style lang="scss" scoped>
.tittle {
  text-align: center;
}
.input-field {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .validate {
    width: 70%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  button {
    appearance: none;
    border: 0;
    border-radius: 5px;
    background: #4676d7;
    color: #fff;
    padding: 8px 16px;
    font-size: 16px;
  }
}
.wrapper {
  width: 100%;
}
.header,
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.header {
  margin-bottom: 20px;
}
.header-item,
.content-item {
  flex-basis: 35%;
}
.header-item:nth-child(1),
.content-item:nth-child(1) {
  flex-basis: 2%;
}
.header-item:nth-child(4),
.content-item:nth-child(4),
.header-item:nth-child(5),
.content-item:nth-child(5) {
  flex-basis: 10%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
</style>
