<template>
  <div class="backgroud">
    <div class="wind">
      <div class="wind__header">
        <span>Name</span>
        <span class="close" @click="closeModal">&times;</span>
      </div>
      <div class="wind__content">
        <slot></slot>
      </div>
      <div class="wind__footer">
        <button @click="confirmDelete">Ok</button>
        <button @click="closeModal">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    confirmDelete(){
        this.$emit("confirmDelete")
    }
  },
};
</script>

<style lang="scss" scoped>
.backgroud{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(197, 187, 187, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.wind {
  width: 250px;
  background-color: rgb(197, 187, 187);
  padding: 16px;
//   position: fixed;
//   top: 40%;
//   left: 40%;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .close{
      cursor: pointer;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__footer {
  }
}
</style>