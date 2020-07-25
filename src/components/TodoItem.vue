<template>
    <li>
      <span v-bind:class="{done: note.completed}">
        <input type="checkbox" v-on:change="note.completed = !note.completed">
       {{note.title}} 
       {{note.completed}} 
      </span>
      <button class="del">&#9998;</button>

      <button class="del" v-on:click="$emit('removeTodo', note.id)">&times;</button>
    </li>
</template>

<script>
export default {
      props:{
          note:{
              type: Object,
              required: true
          }
      }
}
</script>

<style lang="scss" scoped>
li{
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}
.del{
  background-color: red;
  color: #fff;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.done{
  text-decoration: line-through;
}
</style>