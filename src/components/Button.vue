<template>
  <button class="btn-criar" @click.prevent="$emit('enviar')">{{textoButton}}</button>
</template>

<script>
export default {
props: ['textoButton'],
}
</script>

<style scoped>
.btn-criar {
  background: #f5cb4c;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
  color: #fff8ea;
  width: 180px;
  height: 55px;
  margin: 23px 120px 16px 120px;
  font-size: 22px;
  font-family: Roboto;
}
.btn-criar:hover,
.btn-criar:focus{
border: 1px solid #F5CB4C;
}
</style>