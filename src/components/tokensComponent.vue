<template>
  <div class="block-el">
    <!-- Heading -->
    <div>
      <p class="address">Address: {{address}}</p>
    </div>
    <!-- Balances component -->
    <div id="balances" class="table-balance">
      <token-info-component :tokens="tokensList"></token-info-component>
    </div>
  </div>
</template>
<script>
import TokenInfoComponent from '@/components/tokenInfoComponent'
import Web3 from 'web3'
/* Ethereum Contract var : */
var SERVER_URL = 'https://api.myetherapi.com/eth'
var decoder = require('../libs/decoder')
let web3 = new Web3(SERVER_URL)
let abiContract = [{
  'constant': true,
  'inputs': [{
    'name': '_owner',
    'type': 'address'
  }, {
    'name': 'name',
    'type': 'bool'
  }, {
    'name': 'website',
    'type': 'bool'
  }, {
    'name': 'email',
    'type': 'bool'
  }, {
    'name': 'count',
    'type': 'uint256'
  }],
  'name': 'getAllBalance',
  'outputs': [{
    'name': '',
    'type': 'bytes'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}]
let abiContractAddress = '0xBE1ecF8e340F13071761e0EeF054d9A511e1Cb56'
export default {
  name: 'tokensComponent',
  components: {
    TokenInfoComponent
  },
  props: ['address'],
  data () {
    return {
      total: 0,
      tokensList: []
    }
  },
  created () {
    /* Executing Ethereum contract, which in return get Token balances for an address in Hex, furthere decoder gets results in a string */
    console.log(this.address)
    var getTokensContract = new web3.eth.Contract(abiContract, abiContractAddress)
    getTokensContract.methods.getAllBalance(this.address, true, false, false, 0).call().then((result) => {
      console.log(decoder(result))
      this.tokensList = decoder(result)
    })
  },
  watch: {
    /* Executes whenever there is a change in sewarched address --> calculates new tokenList */
    address (newAddress, oldAddress) {
      console.log(this.address)
      var getTokensContract = new web3.eth.Contract(abiContract, abiContractAddress)
      getTokensContract.methods.getAllBalance(this.address, true, false, false, 0).call().then((result) => {
        console.log(decoder(result))
        this.tokensList = decoder(result)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/tokens.scss'
</style>
