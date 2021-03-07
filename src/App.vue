<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
}
div{
  background-color: #FCF5E0;
  
}
</style>
