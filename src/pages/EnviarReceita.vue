<template>
<div>
  <Nav :desabilitar="desabilitar"/>
  <div class="container">
    <h1>/enviar1</h1>
  </div>
</div>
</template>

<script>
import Nav from '../components/Nav'
export default {
components:{
    Nav
  },
  data: () => {
    return {
      desabilitar:true,
    }
  }
}
</script>

<style scoped>

</style>