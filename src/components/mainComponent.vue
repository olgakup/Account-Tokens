<template>
  <!-- Main Component -->
  <div id="main-page" class="body">
    <!-- Heading -->
    <div class="heading block-el">
      <h1>Ethereum Address Token Balance Finder </h1>
      <p> This project is connected to MyEtherWallet Node and helps look up token balances for the Ethereum address. To look up addresses please check: <a href="https://etherscan.io">Etherscan</a></p>
    </div>
    <!-- Search Container -->
    <div id="search" class="block-el">
      <div class="row">
        <p> Address example: 0x7cb57b5a97eabe94205c07890be4c1ad31e486a8 </p>
      </div>
      <div class="label">
        <p>Enter Address: </p>
      </div>
      <b-form inline class="search-form">
        <b-input v-model="input" class="input-form" type="text" required placeholder="eg: 0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe"></b-input>
        <b-button v-on:click="process()" class="button-form" ntype="search" variant="primary">Search</b-button>
      </b-form>
    </div>
    <!-- End Search Container -->
    <!-- Container That is called when input is not valid-->
    <div v-if="wrong">
      <div class="warning">
        <p>Incorrect Address</p>
      </div>
    </div>
    <!-- Token Component-->
    <div v-if="show">
      <token-component v-bind:address = "address"></token-component>
    </div>
  </div>
</template>
<script>
import TokenComponent from '@/components/tokensComponent'
import Web3 from 'web3'
let web3 = new Web3()
export default {
  name: 'mainComponent',
  components: {
    TokenComponent
  },
  data () {
    return {
      address: '',
      show: false,
      wrong: false,
      input: ''
    }
  },
  methods: {
    /* Method that checks valididty of the address with web3: */
    process () {
      this.show = false
      if (web3.utils.isAddress(this.input)) {
        console.log('valid')
        this.address = this.input
        this.show = true
        this.wrong = false
      } else {
        console.log('not valid')
        this.wrong = true
        this.show = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mainPage.scss'
</style>
