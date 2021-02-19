<template>
  <div v-if="loading.state.show" class="loading-box">
    <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['loading'],
}
</script>

<style scoped lang="scss">
.loading-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(36, 33, 33, 1);
  z-index: 999;
}
</style>
