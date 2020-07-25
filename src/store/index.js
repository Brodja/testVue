import Vue from 'vue'
import Vuex from 'vuex'
import note from './modules/note'
// import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({

  modules:{
    note
  }
})
