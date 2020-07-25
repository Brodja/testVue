
  export default {
    state: {
        notes: JSON.parse(localStorage.getItem('notes') || '[]') 
      },
      mutations: {
        
        addTodo(state, newTodo){
          // state.notes 
          // state.notes[0].todos.push(newTodo)
          console.log(newTodo)
    
          // localStorage.setItem('notes', JSON.stringify(state.notes))
        }
      },
      actions: {
        addTodo({commit}, note){
          commit('addTodo', note)
        }
      },
    //   getters:{
    //     notes: s => s.notes,
    //     noteById: s => id => s.notes.find(t => t.id === id)
    //   }
  }