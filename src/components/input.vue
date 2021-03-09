<template>
    <input class="input" :type="tipo" :placeholder="texto"  >
</template>

<script>
export default {
  props: ['tipo', 'texto'],
  data(){
    return{
      
    }
  },
   created:  async function(){
   }
}
</script>

<style>
.input {
  background: #fff8ea;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
  height: 45px;
  padding: 14px;
  margin: 16px 10px;
  font-size: 20px;
  line-height: 23px;
}
.input:focus,
.input:active,
.input:hover {
  border: 1px solid #4E6F81;
}
</style>