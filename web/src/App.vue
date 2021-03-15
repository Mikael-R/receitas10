<template>
  <div id="app">
    <div >
      <router-view/>
    </div>

  </div>
</template>

<script>
// import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    // Footer
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  background: #ffefc0;
  height: 100vh;
  width: 100vw;
}
</style>
