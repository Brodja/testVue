<template>
  <li>
    <span v-bind:class="{done: item.completed}">
      <!-- <input type="checkbox" v-on:change="item.completed = !item.completed"> -->
      <input type="checkbox" checked="true" v-on:change="$emit('checkedTodo', item.id)" />
      <div class="text__fields">
        <div class="text-field" >
        {{item.title}}

        </div>
        <input type="text" class="edit-field" />
      </div>
    </span>
    <div class="buttons">
      <button class="btn edit" v-on:click="$emit('editTodo', item.id)">&#9998;</button>

      <button class="btn del" v-on:click="$emit('removeTodo', item.id)">&times;</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  width: 95%;
  display: flex;
}
li {
  width: 90%;
  border: 1px solid #ccc;
  display: flex;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  .text__fields {
    display: flex;
    flex-direction: column;
    margin-left: 25px;

  }
}
.edit-field{
  display: none;
}
.btn {
  color: #fff;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.del {
  background-color: red;
}
.edit {
  background-color: rgb(54, 255, 14);
}
.buttons {
  width: 5%;
  display: flex;
  justify-content: space-between;
}
.done {
  text-decoration: line-through;
}
</style>