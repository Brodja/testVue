export default {
  state: {
    notes: JSON.parse(localStorage.getItem("notes") || "[]"),
  },
  mutations: {
    createNote(state, note) {
      state.notes.push(note);

      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    removeNote(state, id) {
      state.notes = state.notes.filter((t) => t.id !== id);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    addTodo(state, newTodo, id) {
      let res = state.notes.filter((t) => t.id === newTodo.noteId)
      res[0].todos.push(newTodo);
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    removeTodo(state, idBox) {
      console.log(state.notes)
      let res = state.notes.filter((t) => t.id === idBox.noteId)
      let res2 = res[0].todos.filter((t) => t.id !== idBox.id)
      res[0].todos = res2;
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
  },
  actions: {
    createNote(ctx, note) {
      ctx.commit("createNote", note);
    },
    removeNote({ commit }, note) {
      commit("removeNote", note);
    },
    addTodo({ commit }, note, id) {
      commit("addTodo", note, id);
    },
    removeTodo({ commit }, note, id) {
      commit("removeTodo", note, id);
    },
  },
  getters: {
    notes: (s) => s.notes,
    noteById: (s) => (id) => s.notes.find((t) => t.id === id),
  },
};
