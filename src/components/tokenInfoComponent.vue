<template>
  <div>
    <!-- Heading for total number of tokens -->
    <div class="row token-total">
      <p> Total Number of Tokens: {{getTotal}}</p>
    </div>
    <!-- If statment for empty List-->
    <div v-if="tokens.length==0">
      <p>Loading...</p>
      <i class="fas fa-spinner fa-pulse"></i>
    </div>
    <!-- Token Table using for loop -->
    <div v-for="token in tokens">
      <div v-if="checkBalance(token.balance)" class="row table-row">
        <div class="col-md-12">
          <p>Address: {{token.addr}}</p>
        </div>
        <div class="col-md-8">
          <p class="token">Symbol: {{token.symbol}}</p>
        </div>
        <div class="col-md-4">
          <p class="balance">{{getBalance(token.balance, token.decimals)}}</p>
        </div>
      </div>
    </div>
    <!-- End For Loop -->
  </div>
</template>
<script>
import BN from 'bignumber.js'
export default {
  name: 'tokenComponent',
  props: ['tokens'],
  data () {
    return {}
  },
  methods: {
  /* Using big number library to cast string to number: */
    checkBalance (value) {
      let n = new BN(value)
      if (n.gt(0)) return true
      else return false
    },
    /* Getting correct Balances for the tokens (needs to devide by the number of decimals in the Token Contract: */
    getBalance (value, decimals) {
      let n = new BN(value)
      this.total++
      return n.div(new BN(10).pow(decimals)).toFixed()
    }
  },
  computed: {
    getTotal () {
      let total = 0
      this.tokens.forEach((token) => {
        if (this.checkBalance(token.balance)) total++
      })
      return total
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/tokens.scss'
</style>
