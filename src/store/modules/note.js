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

    save(state, mass) {
      state.notes.filter((t) => t.id === mass.noteId)[0].todos = mass.todos;
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },

  },
  actions: {
    createNote(ctx, note) {
      ctx.commit("createNote", note);
    },
    removeNote({ commit }, note) {
      commit("removeNote", note);
    },
    save({ commit }, mass) {
      commit("save", mass);
    },
 
  },
  getters: {
    notes: (s) => s.notes,
    noteById: (s) => (id) => s.notes.find((t) => t.id === id),
  },
};
