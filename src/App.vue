<template>
  <h1 class="text-center text-white bg-dark p-3 m-0">Miranto's playground</h1>
  <div v-if="$route.name !== 'Home'" class="d-flex justify-content-center align-items-center bg-danger p-3">
    <router-link class="btn btn-dark" to="/">Back to menu</router-link>
  </div>
  <router-view/>
  <Loading/>
</template>

<script>
import Loading from '@/components/Loading';

export default {
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>

</style>
