<template>
  <h3 class="bg-danger text-white text-center p-3">Top 10 coins by market cap</h3>
  <select class="form-select mt-3" v-model="cryptoSelected" aria-label="Default select example"
          @change="selected($event, $event.target.selectedIndex)">
    <option value="">Select coin</option>
    <option v-for="(market, index) in top10" :key="index" :value="market.id">{{ index + 1 }}. {{ market.id }}</option>
  </select>
  <div v-if="cryptoSelectedInfo" class="d-flex flex-column justify-content-center align-items-center bg-white p-3 mt-3">
    <img :src="cryptoSelectedInfo.image" alt="tmp" class="w-25 h-25"/>
    <div class="text-center p-3">
      <p>Current price : {{ cryptoSelectedInfo.current_price.toFixed(2) }} €</p>
      <p>Highest price in 24h : {{ cryptoSelectedInfo.high_24h.toFixed(2) }} €</p>
      <p>Lowest price in 24h : {{ cryptoSelectedInfo.low_24h.toFixed(2) }} €</p>
      <p>Market cap : {{ cryptoSelectedInfo.market_cap.toFixed(2) }} €</p>
      <p>Latest update on : {{ formatDate(cryptoSelectedInfo.last_updated) }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  inject: ['loading', 'cryptoStore'],
  data() {
    return {
      cryptoSelected: '',
      baseApi: 'https://api.coingecko.com/api/v3',
      top10: [],
      cryptoSelectedInfo: null
    }
  },
  methods: {
    formatDate: function (date) {
      return moment(date).format('DD/MM/YYYY HH:mm:ss')
    },
    selected: function (event, selectedIndex) {
      this.cryptoStore.update_name(this.cryptoSelected)
      if (selectedIndex !== 0)
        this.cryptoSelectedInfo = this.top10[selectedIndex - 1]
      else
        this.cryptoSelectedInfo = null
    },
    getTop10Crypto: function () {
      this.loading.show_load()
      this.axios.get(this.baseApi +
          '/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false')
          .then((response) => {
            this.loading.hide_load()
            this.top10 = response.data
          })
          .catch((error) => {
            this.loading.hide_load()
            console.error(error)
          })
    }
  },
  mounted() {
    this.getTop10Crypto()
  }
}
</script>

<style scoped>

</style>
