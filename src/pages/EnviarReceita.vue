<template>
<div>
  <Nav :desabilitar="desabilitar"/>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="title">Enviar uma receita</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <span class="input-name">Nome</span>
        <input type="text" class="form-control " placeholder="Diga o nome da sua receita...">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <span class="input-name">Ingredientes</span>
        <textarea type="text" class="form-control" rows="3" placeholder="Diga os ingredientes da sua receita...">
      </div>
    </div>
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
.title{
  margin-top: 43px;
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 52px;
letter-spacing: 0.035em;
color: #000000;
}
.input-name{
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 33px;
letter-spacing: 0.035em;
color: #000000;
}
</style>