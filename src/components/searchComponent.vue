<template>
  <div id="search" class="block-el">
    <div class="row">
      <p> Address example: 0x7cb57b5a97eabe94205c07890be4c1ad31e486a8 </p>
    </div>
    <div class="label">
      <p>Enter Address: </p>
    </div>
    <b-form inline class="search-form">
      <b-input v-model="searchInput" class="input-form" type="text" required placeholder="eg: 0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe"></b-input>
      <b-button v-on:click="process()" class="button-form" ntype="search" variant="primary">Search</b-button>
    </b-form>
  </div>
</template>
<script>
import Web3 from 'web3'
let web3 = new Web3()
web3 = new Web3(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth'))
export default {
  name: 'searchComponent',
  data () {
    return {
      searchInput: ''
    }
  },
  created () {

  },
  methods: {
    process () {
      if (web3.utils.isAddress(this.searchInput)) console.log('valid')
      else {
        console.log('notvalid')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/search.scss'
</style>
