<template>
  <div class="row align animeLeft">
    <div class="card" v-if="cadastrado">
      <h2 class="title">Ter a sua conta</h2>
      <span class="subtitle">É rápido e facil</span>
      <hr class="hr" />
      <form>
        <div class="">
          <input
            class="input"
            type="text"
            placeholder="Seu nome"
            v-model="valueNome"
            required
          />
          <!-- <img class="img" :src="validNome" alt="check"> -->
          <!-- <img v-if="!validNome" class="img" src="../assets/img/negate.png" alt="check"> -->
        </div>
        <input
          class="input"
          type="email"
          placeholder="Email"
          v-model="valueEmail"
          required
        />
        <input
          class="input"
          type="password"
          placeholder="Senha"
          v-model="valueSenha"
        />
        <Button type="submit" textoButton="Criar conta" @enviar="submit()" />
      </form>
    </div>
    <div class="card-concluido" v-if="!cadastrado">
      <h2 style="margin: 21px 0 15px 25px">Parabéns!</h2>
      <hr class="hr" style="margin-bottom: 19px" />
      <p class="subtitle-concluido">
        Seu cadastro foi um sucesso!
        <br/>
        Comece agora a participar dessa comunidade
        cheia de sabores!
      </p>
      <button class="button" @click="voltar()">Voltar ao início</button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
// import Input from '../components/input'
export default {
  components: {
    Button,
    // Input
  },
  data() {
    return {
      valueNome: null,
      valueEmail: "",
      valueSenha: "",
      validNome: "",
      cadastrado: true,
    };
  },
  methods: {
    submit() {
      // if (this.valueNome != null || this.valueEmail != null || this.valueSenha != null) {
      this.valueNome != null
        ? (this.validNome = "../assets/img/check.png")
        : (this.validNome = "../assets/img/negate.png");
      console.log(this.validNome);
      this.cadastrado = false;
    },
    voltar() {
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
.button {
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #fcf5e0;
  background: #f5cb4c;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
  width: 213px;
  height: 50px;
  margin-left: auto;
  display: block;
}

.img {
  width: 25px;
}
.card {
  width: 420px;
  height: 450px;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #e3d8b4;
  margin-top: 3rem;
}
.card-concluido {
  width: 550px;
  height: 290px;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #e3d8b4;
  margin-top: 3rem;
  padding: 10px 20px;
}
.hr {
  border: 1px solid rgba(0, 0, 0, 0.3);
  transform: rotate(0.15deg);
  margin: 0 25px;
}
.align {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: Poppins !important;
  font-weight: 600;
  font-size: 31px;
  left: 536px;
  margin: 22px 122px 0 31px;
}
.subtitle {
  font-family: Poppins !important;
  font-size: 20px;
  line-height: 30px;
  margin: 0 122px 18px 31px;
}
.subtitle-concluido {
  font-family: Poppins !important;
  font-size: 20px;
  line-height: 30px;
  margin-left: 20px;
  text-align: left;
}
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
  width: 22rem;
}
.input:focus,
.input:active,
.input:hover {
  border: 1px solid #4e6f81;
  outline: 0;
}
</style>
