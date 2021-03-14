<template>
  <div style="backgroud: #ffefc0">
    <Nav :desabilitar="desabilitar" />
    <div class="container">
      <div class="header">
        <span class="title">Hamburguer de Siri</span>
        <span class="creator">Por: <a href="#">Bob Esponja</a></span>
        <span class="post-date">Postado em: 14/01/2021</span>
      </div>

      <div class="main">
        <div class="receita">
          <div class="preparo">
            <span class="ingredientes-title">Ingredientes</span>

            <span class="ingredientes">1 Pão com gergelin </span>
            <span class="ingredientes">500g de carne moida a sua escolha</span>
            <span class="ingredientes">1 folha de Alface </span>
            <span class="ingredientes">2 fatias Tomate</span>
            <span class="ingredientes">2 fatias de Queijo Cheddar</span>
            <span class="ingredientes">1/4 de Cebola Roxa</span>

            <span class="modo-preparo-title">Modo de Prepado</span>
            <span class="modo-preparo">
              Para a carne: <br />
              Coloque a carne montada em forma de disco na chapa pré aquecida
              com um fio de azeite, tempere com sal e pimenta a gosto, deixe
              cada lado 5 minutos em contato com a chapa em fogo baixo, não
              aperte a carne, depois retire a carne e deixe ela descançando.
              <br />

              <br />Para o pão e acompanhamento:<br />

              Corte o pão e com a chapa ainda quente coloque o pão para dourar
              na propria gordura do hambuguer da mesma forma coloque as fatias
              de cebola para caramelizar na gordura. Após retirar o pão e a
              cebola, torne a colocar a carne na chapa em fogo baixo com o
              queijo sobre ela, espirre um pouco de agua na chapa proximo ao
              hamburguer e cubra o mesmo com uma tampa ou panela, quando o
              queijo tiver derretido pode retirar o hamburguer.
              <br />

              <br />Montagem:<br />
              No pão, coloque a carne com queijo, a alface, a cebola, o tomate,
              feche o pão e sirva ainda quente.
            </span>
          </div>

          <div class="receita-info">
            <div class="title">
              <span class="item-title">Tempo de preparo</span>
              <span class="item-title">Rendimento</span>
              <span class="item-title">Dificuldade</span>
            </div>

            <div class="content">
              <span class="item-content">Rápido</span>
              <span class="item-content">Até 2</span>
              <span class="item-content">Fácil</span>
            </div>
          </div>

          <div class="info-adicional">
            <span class="info-adicional-title">Adicionais: </span>

            <span class="info-adicional-content"
              >Você pode pode adicionar ao pão dourando algum molho como
              maioneses ou mostarda, ele vai impedir que os sucos da carnes
              enchaquem o pão.</span
            >
          </div>
        </div>

        <div class="galeria">
          <span class="title">Galeria</span>
          <img src="../assets/img/hamburger.png" alt="" />
          <img src="../assets/img/hamburger.png" alt="" />
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
};
</script>

<style scoped>
.container {
  padding: 30px;
}
.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.header .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
}
.header .creator {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: rgba(0, 0, 0, 0.5);
}
.header .post-date {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: rgba(0, 0, 0, 0.5);
}
.main {
  display: flex;
  flex-direction: row;
}
.main .receita .preparo {
  background: #e3d8b4;

  border-radius: 8px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.main .receita .ingredientes-title {
  font-size: 27px;
  margin-bottom: 12px;
}
.main .receita .ingredientes {
  font-size: 15px;
}
.main .receita .modo-preparo-title {
  font-size: 27px;
  margin-top: 2rem;
}
.main .galeria {
  margin: -42px 0 0 1.5rem;
  display: flex;
  flex-direction: column;
}
.main .galeria .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
}
.main .galeria img {
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.main .receita-info {
  margin-top: 20px;
  background: #e3d8b4;

  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.main .info-adicional {
  margin-top: 20px;
  background: #e3d8b4;

  border-radius: 8px;
  width: 100%;
  padding: 2rem;
  display: inline-block;
}

.main .receita-info .title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
}
.main .receita-info .content {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.main .info-adicional .info-adicional-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
}
.main .info-adicional-content {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
}
.main .receita-info .title .item-title {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main .receita-info .content .item-content {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
