<template>
  <div style="backgroud: #ffefc0">
    <Nav :desabilitar="true" />
    <div class="container">
      <div class="header">
        <span class="title">Hamburguer de Siri</span>
        <span class="creator">Por: <a href="#">Bob Esponja</a></span>
        <span class="post-date">Postado em: 25/01/2021</span>
      </div>

      <div class="main">
        <div class="receita">
          <span class="ingredientes-title">Ingredientes</span>

          <span class="ingredientes">
            Pão<br />
            Hamburguer<br />
            Alface<br />
            Tomate<br />
            Queijo<br />
            Cebola<br />
            Alface<br />
            Mostarda<br />
          </span>

          <span class="modo-preparo-title">Modo de Prepado</span>
          <span class="modo-preparo">
            Para a massa: <br />
            Em uma tigela grande, misture a farinha, o açúcar e o sal. Dilua o
            açafrão na água e, em seguida, despeje-o lentamente na mistura e
            mexa até obter uma massa coesa. Para obter a consistência certa, não
            despeje toda a água de uma só vez.
            <br />

            <br />Para o recheio:<br />

            Preaqueça o forno a 190 graus. Doure a carne de pombo em uma
            frigideira em fogo médio. Deixe esfriar um pouco e misture com sal,
            as gemas de ovos, especiarias, mel e passas. O recheio deve ficar
            bem úmido.
            <br />

            <br />Montagem:<br />

            Distribua a massa sobre uma assadeira e sobre ela e coloque outro
            pedaço de massa para cobrir. Dobre o restante da massa na borda da
            assadeira, para "fechar" a torta. Se quiser, faça cortes decorativos
            sobre a camada de cima e asse a torta por 45 minutos a 1 hora, ou
            até que fique dourado.
          </span>
        </div>
        <div class="galeria">
          <span class="title">Galeria</span>
          <img src="../assets/img/hamburger.png" alt="Foto da receita" />
          <img src="../assets/img/hamburger.png" alt="Foto da receita" />
          <img src="../assets/img/hamburger.png" alt="Foto da receita" />
          <img src="../assets/img/hamburger.png" alt="Foto da receita" />
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
  padding: 5rem;
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

.main .receita {
  background: #e3d8b4;

  border-radius: 8px;
  width: 70%;

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
</style>
