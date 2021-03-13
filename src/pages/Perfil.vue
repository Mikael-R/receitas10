<template>
  <div>
    <Nav :desabilitar="desabilitar" />
    <div class="container">
      <div class="row marginTop">
        <div class="col">
          <img src="../assets/img/blanck.png" alt="foto perfil" />
          <span>{{ user.name }}</span>
        </div>
      </div>
      <div class="row marginTop">
        <!-- <div class="col">
          <h2>Atividades</h2>
        </div> -->
        <div class="col">
          <h2>Minhas receitas</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="hr"></div>
        </div>
      </div>
      <div class="row">
        <!-- <div class="col">
          <div class="cart-text">
            <span>Curtiu a receita de Tortas de Elefante de Junior Tavares</span>
          </div>
        </div> -->
        <div class="card-receita">
          <div>
            <img src="../assets/img/bolo.png" alt="foto receita" />
          </div>
          <div class="texto">
            <span class="card-receita-title">Bolo de Marijuanna</span>
            <span class="card-receita-categoria"> Bolos e tortas </span>
            <span class="card-receita-data"> Postado em: 13/12/2020 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  components: {
    Nav,
  },
  data: function() {
    return {
      user: {
        name: "Iguinho Bariloche",
      },
      desabilitar: true,
    };
  },
};
</script>

<style scoped>
.texto {
  margin-top: 12px;
}
.card-receita {
  width: 328px;
  height: 125px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  background: #e3d8b4;
  border-radius: 8px 8px 8px 8px;
  margin-left: 15px;
  margin-top: 15px;
}
.card-receita-img {
}
.card-receita-title {
  margin: 16px 26px 0 26px;
  font-size: 15px;
  line-height: 22px;
  color: #000000;
}
.card-receita-data {
  display: flex;
  justify-content: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  margin-top: 11px;
}
.card-receita-categoria {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
}
.ml {
  margin-left: 18rem;
}
.hr {
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 550px;
  height: 0px;
  margin-bottom: 25px;
}
.cart-text {
  width: 550px;
  height: 35px;
  background: #e3d8b4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 24px;
  display: flex;
  align-items: center;
}
.cart-text span {
  color: #000000;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-left: 12px;
}
.marginTop {
  margin-top: 4rem;
}
.marginTop img {
  width: 70px;
  height: 70px;
}
.marginTop .col {
  display: flex;
  align-items: center;
}
.marginTop .col span {
  margin-left: 14px;
  color: #c62828;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
}
.marginTop .col img {
  border-radius: 50%;
}
</style>
