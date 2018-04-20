<template>
    <div class="row table-row">
        <div class="col-md-12">
            <p>Address: {{address}}</p>
        </div>
        <div class="col-md-8">
            <p class="token">Symbol: {{symbol}}</p>
        </div>
        <div class="col-md-4">
            <p class="balance"> {{balance}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tokenComponent',
  props: ['address', 'symbol', 'balance'],
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/tokens.scss'
</style>
