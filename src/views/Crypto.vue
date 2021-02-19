<template>
  <h2 class="bg-warning p-3 m-0 text-center">To the moon!</h2>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 col-sm-12 p-3 bg-dark">
        <Panel/>
      </div>
      <div class="col-md-8 col-sm-12 p-3 bg-dark">
        <Chart/>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from "@/components/Crypto/Panel";
import Chart from "@/components/Crypto/Chart";

export default {
  components: {Chart, Panel},
  inject: ['loading', 'cryptoStore'],
  data() {
    return {
      baseApi: 'https://api.coingecko.com/api/v3',
      crypto: '',
    }
  },
  methods: {
    test: function () {
      this.loading.show_load()
      this.axios.get(this.baseApi + '/ping').then((response) => {
        this.loading.hide_load()
        console.log(response.data)
      }).catch((error) => {
        this.loading.hide_load()
        console.error(error)
      })
    }
  },
  beforeUnmount() {
    this.cryptoStore.update_name('')
  }
}
</script>

<style>

</style>
