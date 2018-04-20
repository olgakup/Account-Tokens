<template>
  <div class="block-el">
    <div>
      <p class="address">Address: address</p>
    </div>
    <div id="balances" class="table-balance">
      <div class="row token-total">
        <p> Total Number of Tokens: {{total}}</p>
      </div>
      <token-info-component :address="newAddress" :symbol="newSymbol" :balance="newBalance"></token-info-component>
    </div>
  </div>
</template>
<script>
import TokenInfoComponent from '@/components/tokenInfoComponent'
import Web3 from 'web3'
var SERVER_URL = 'https://api.myetherapi.com/eth'
var SERVER_PORT = 8545
var rpc = require('json-rpc2')
//var client = rpc.Client.$create(SERVER_PORT, SERVER_URL)
let web3 = new Web3()
let abiContract = [{
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }, {
    "name": "name",
    "type": "bool"
  }, {
    "name": "website",
    "type": "bool"
  }, {
    "name": "email",
    "type": "bool"
  }, {
    "name": "count",
    "type": "uint256"
  }],
  "name": "getAllBalance",
  "outputs": [{
    "name": "",
    "type": "bytes"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}]
let abiContractAddress = '0xBE1ecF8e340F13071761e0EeF054d9A511e1Cb56'
export default {
  name: 'tokensComponent',
  components: {
    TokenInfoComponent
  },
  props: ['address'],
  data() {
    return {
      total: 0,
      newAddress: '0x77F9F7100dA5dE31D5CCFF50983bD4FCC0FcCde3',
      newSymbol: 'ABC',
      newBalance: '100'
    }
  },

  created() {
    var getTokensContract = new web3.eth.Contract(abiContract, abiContractAddress)
    var dataString = getTokensContract.methods.getAllBalance(this.newAddress, true, false, false, 0).encodeABI()
   /* client.call('eth_call', [{
      to: abiContractAddress,
      data: dataString
    }], function(err, result) {
      console.log(err, result)
    }) */
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/tokens.scss'
</style>
