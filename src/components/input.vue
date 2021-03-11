<template>
    <input class="input" :type="tipo" :placeholder="texto"   >
</template>

<script>
export default {
  props: ['tipo', 'texto'],
  data(){
    return{
      data:this.value
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
  padding: 10px;
  margin: 16px 20px;
  font-size: 20px;
  line-height: 20px;
  width: 22rem;
}
.input:focus,
.input:active,
.input:hover {
  border: 1px solid #4E6F81;
  outline: 0;
}
</style>