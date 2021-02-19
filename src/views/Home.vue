<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="(menu, index) in menus"
           :key="index"
           :class="index % 2 === 0 ? 'bg-danger' : 'bg-warning'"
           class="d-flex justify-content-center align-items-center p-3 col-sm-6 col-md-4">
        <router-link class="btn btn-dark" :to="menu.path">{{menu.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { path: '/crypto', name: 'Crypto' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
