<template>
  <div id="app">
    <div class="contanier">
      <router-view />
    </div>
    <!-- <hr />
    <div class="note" v-for="note in notes" :key="note.id">
      <h2>{{note.note}}</h2>
    </div> -->
  </div>
</template>


<script>
export default {
  name: "app",
  computed: {
    notes() {
      return this.$store.getters.notes;
    }
  },
 mounted() {
    // const notes = JSON.parse(localStorage.getItem('notes') || '[]') ;
    //  console.log(notes)
    // this.notes = notes;

   
  }
};
</script>

<style lang="scss" scoped>
.contanier {
  width: 80%;
  margin: 0 auto;
}
</style>
