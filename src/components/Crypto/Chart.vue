<template>
  <h2 v-if="cryptoStore.state.name" class="bg-danger p-3 m-0 text-white text-center">
    Value of {{ cryptoStore.state.name }} last 24h (minutely data)
  </h2>
  <div v-if="miniload" class="m-3 spinner-border text-danger"
       role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-if="cryptoStore.state.name && !miniload">
    <apexchart height="500" type="line" :options="options" :series="series" class="bg-white p-3"/>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  inject: ['loading', 'cryptoStore'],
  data: function () {
    return {
      miniload: false,
      options: {
        chart: {
          id: 'coin-chart'
        },
        xaxis: {
          categories: [0]
        }
      },
      series: [{
        name: '',
        data: [0]
      }],
      baseApi: 'https://api.coingecko.com/api/v3',
      list: []
    }
  },
  computed: {
    getCryptoState: function () {
      return this.cryptoStore.state.name
    },
  },
  watch: {
    getCryptoState: function () {
      if (this.cryptoStore.state.name)
        this.getInfo()
    }
  },
  methods: {
    formatUnixDate: function (date) {
      return moment(date).format('DD/MM/YYYY HH:mm')
    },
    getInfo: function () {
      this.miniload = true
      this.axios.get(this.baseApi +
          '/coins/' + this.cryptoStore.state.name + '/market_chart?vs_currency=eur&days=1')
          .then((response) => {
            let categories = []
            let series = []
            this.miniload = false
            this.list = response.data.prices
            this.list.forEach((tick) => {
              tick[0] = this.formatUnixDate(tick[0])
              tick[1] = tick[1].toFixed(2)
              categories.push(tick[0])
              series.push(tick[1])
              this.options = {
                chart: {
                  id: 'crypto-chart'
                },
                colors: ["#dc3545"],
                xaxis: {
                  labels: {
                    show: false
                  },
                  categories: categories,
                  axisTicks: {
                    show: false,
                  },
                },
                yaxis: {
                  labels: {
                    style: {
                      colors: ["#dc3545"],
                      fontSize: '0.8rem'
                    }
                  }
                }
              }
              this.series = [{
                name: this.cryptoStore.state.name,
                data: series
              }]
            })

          })
          .catch((error) => {
            this.miniload = false
            console.error(error)
          })
    }
  }
}
</script>

<style scoped>

</style>
