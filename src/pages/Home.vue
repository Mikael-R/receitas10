<template>
  <div style="backgroud: #ffefc0">
    <Nav :desabilitar="desabilitar"/>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card-receita">
            <img src="../assets/img/hamburger.png" alt="" />
            <span class="card-title">Hamburger de Siri</span>
            <span class="card-subtitle">Sanduiches</span>
            <span class="card-subtitle">Por: <a href="#">Bob Esponja</a></span>
            <span class="card-subtitle" style="margin-bottom:10px">Publicado em: 14/01/2021</span>
          </div>
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
      desabilitar:false,
    }
  }
};
</script>

<style scoped>
.card-receita {
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 277px;
  height: 314px;
  background: #e3d8b4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
.card-receita img {
  position: relative;
  border-radius: 8px 8px 0 0;
  margin-bottom: 20px;
}
.card-title {
  margin-top: 10px;
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 18px;

}
.card-subtitle{
  font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
margin-bottom:11px
}
.container-grid {
  display: grid;
  grid-template-columns: 40px auto auto 50px 40px;
}

</style>