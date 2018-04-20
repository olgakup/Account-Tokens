<template>
    <div id="main-page" class="body">
        <div class="heading block-el">
            <h1>Ethereum Address Token Balance Finder </h1>
            <p> This project is connected to MyEtherWallet Node and helps look up token balances for the etehreum address. To look up addresses please check: <a href="https://etherscan.io">Etherscan</a></p>
        </div>
        <search-component></search-component>
        <token-component></token-component>
    </div>
</template>
<script>
import SearchComponent from '@/components/searchComponent'
import TokenComponent from '@/components/tokensComponent'
import TokenInfoComponent from '@/components/tokenInfoComponent'
export default {
  name: 'mainComponent',
  components: {
    SearchComponent,
    TokenComponent,
    TokenInfoComponent
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mainPage.scss'
</style>
