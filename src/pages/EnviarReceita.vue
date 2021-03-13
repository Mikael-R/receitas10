<template>
  <div class="main">
    <Nav :desabilitar="true" />
    <form class="container" @submit="handleSubmit">
      <div class="row">
        <div class="col">
          <h1 class="title">Enviar uma receita</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <span class="input-name">Nome</span>
          <input
            type="text"
            class="input"
            placeholder="Diga o nome da sua receita..."
            v-model="name"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <span class="input-name">Ingredientes</span>
          <textarea
            type="text"
            class="input"
            rows="3"
            placeholder="Diga os ingredientes da sua receita juntamente com as medidas..."
            v-model="ingredients"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <span class="input-name">Modo de Preparo</span>
          <textarea
            type="text"
            class="input"
            rows="3"
            style="min-height: 200px; max-height: 550px; width: 700px;"
            placeholder="Descreva o modo de preparo da sua receita..."
            v-model="howPrepare"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <span class="input-name">Seleciona a categoria da sua receita</span>
          <select class="input" v-model="category" required>
            <option value="" disabled selected hidden
              >Escolha uma categoria</option
            >
            <option value="acompanhamento">Acompanhamento</option>
            <option value="bebida">Bebida</option>
            <option value="bolos">Bolos</option>
            <option value="carnes">Carnes</option>
            <option value="comidas fitness">Comidas Fitness</option>
            <option value="comidas típicas">Comidas Típicas</option>
            <option value="doces e sobremesas">Doces e Sobremesas</option>
            <option value="frango">Frango</option>
            <option value="lanches">Lanches</option>
            <option value="massas">Massas</option>
            <option value="molhos">Molhos</option>
            <option value="peixes">Peixes</option>
            <option value="petiscos">Petiscos</option>
            <option value="pratos principais">Pratos Principais</option>
            <option value="sopas">Sopas</option>
            <option value="temperos">Temperos</option>
            <option value="tortas">Tortas</option>
          </select>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col">
          <h1 class="title">Acerte alguns detalhes da sua receita</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <span class="input-name">Tempo de preparo</span>
          <select class="input" v-model="preparationTime" required>
            <option value="" disabled selected hidden>Selecione...</option>
            <option value="rápido">Rápido</option>
            <option value="até 1 hora">Até 1 hora</option>
            <option value="até 2 horas">Até 2 horas</option>
            <option value="até 4 horas">Até 4 horas</option>
            <option value="até 6 horas">Até 6 horas</option>
            <option value="mais de 6 horas">Mais de 6 horas</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <span class="input-name">Dificuldade</span>
          <select class="input" v-model="difficulty" required>
            <option value="" disabled selected hidden>Selecione...</option>
            <option value="fácil">Fácil</option>
            <option value="médio">Médio</option>
            <option value="difícil">Difícil</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <span class="input-name">Porções</span>
          <select class="input" v-model="servings" required>
            <option value="" disabled selected hidden>Selecione...</option>
            <option value="até 2">Até 2</option>
            <option value="até 4">Até 4</option>
            <option value="até 6">Até 6</option>
            <option value="até 8">Até 8</option>
            <option value="até 10">Até 10</option>
            <option value="mais de 10">Mais de 10</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <span class="input-name">Adicione uma foto do seu prato</span>
          <input
            type="text"
            class="input"
            placeholder="Cole aqui a url da imagem"
            v-model="demoImage"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <span class="input-name">Considerações finais</span>
          <textarea
            type="text"
            class="input"
            rows="3"
            style="min-height: 130px; max-height: 130px; width: 500px;"
            placeholder="Adicione mais algum detalhe a sua receita..."
            v-model="additionalInformation"
          />
        </div>
      </div>
      <button class="button" type="submit">
        Enviar
      </button>
    </form>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  components: {
    Nav,
  },
  data: () => {
    return {
      name: "",
      ingredients: "",
      howPrepare: "",
      category: "",
      preparationTime: "",
      difficulty: "",
      servings: "",
      demoImage: "",
      additionalInformation: "",
    };
  },
  methods: {
    handleSubmit(e) {
      const alredyUsedThisRecipeName = true;
      if (alredyUsedThisRecipeName) {
        this.$alertify.error("Você já utiliza uma receita com este nome!");
        e.preventDefault();
        return;
      }
    },
  },
};
</script>
<style scoped>
.main {
  background-color: #fcf5e0;
  overflow-y: hidden;
}
.title {
  margin-top: 30px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;
  letter-spacing: 0.035em;
  color: #000000;
}
.input-name {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.035em;
  color: #000000;
  margin-top: 100px;
  margin-bottom: 100px;
}
.input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 8px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-left: -4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
.input:focus,
.input:active,
.input:hover {
  border: 1px solid #4E6F81;
  outline: 0;
}
.button {
  width: 190px;
  height: 55px;
  background: #597f93;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
  color: #fff8ea;
  width: 180px;
  height: 55px;
  margin: 23px 120px 16px 120px;
  font-size: 22px;
}
.button:hover,
.button:focus {
  border: 1px solid #9cd0ec;
}
hr {
  max-width: 700px;
  margin-top: 30px;
  margin-left: 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
</style>
