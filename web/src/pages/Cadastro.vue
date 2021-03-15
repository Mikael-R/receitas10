<template>
  <div class="main">
    <div class="row align animeLeft">
      <div class="card" v-if="!registered">
        <h2 class="title">Ter a sua conta</h2>
        <span class="subtitle">É rápido e fácil</span>
        <hr class="hr" />
        <form @submit.prevent="handleSubmit()">
          <input
            class="input"
            type="text"
            placeholder="Seu nome"
            v-model="name"
            required
          />
          <input
            class="input"
            type="text"
            placeholder="Seu username"
            v-model="username"
            required
          />
          <img
            class="img"
            v-if="showUsernameCheck"
            src="../assets/img/negate.png"
            alt="check"
          />
          <input
            class="input"
            type="email"
            placeholder="Email"
            v-model="email"
            required
          />
          <img
            class="img"
            v-if="showEmailCheck"
            src="../assets/img/negate.png"
            alt="check"
          />
          <input
            class="input"
            type="password"
            placeholder="Senha"
            v-model="password"
            required
          />
          <button class="btn-criar" type="submit">Criar conta</button>
        </form>
      </div>
      <div class="card-concluido" v-if="registered">
        <h2 style="margin: 21px 0 15px 25px">Parabéns!</h2>
        <hr class="hr" style="margin-bottom: 19px" />
        <p class="subtitle-concluido">
          Seu cadastro foi um sucesso!
          <br />
          Comece agora a participar dessa comunidade cheia de sabores!
        </p>
        <button class="button" @click="() => this.$router.push('login')">
          Voltar ao início
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersServices from "../services/users";
export default {
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      showUsernameCheck: false,
      showEmailCheck: false,
      registered: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await usersServices.register({
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        this.showUsernameCheck = true;
        this.showEmailCheck = true;
        return this.$alertify.error(
          "Whoops! Houve um erro. Este username ou email parecem já existir."
        );
      }

      this.showUsernameCheck = false;
      this.showEmailCheck = false;

      this.registered = true;
    },
  },
};
</script>

<style scoped>
.main {
  overflow-x: hidden;
}
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
.btn-criar:focus,
.button:hover,
.button:focus {
  border: 1px solid #f5cb4c;
}
 {
  border: 1px solid #f5cb4c;
}
.img {
  width: 25px;
  margin-top: -8px;
  margin-left: -6px;
}
.img:hover {
  cursor: initial;
}
.card {
  width: 430px;
  height: 520px;
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
  padding: 10px;
  margin: 16px 20px;
  font-size: 20px;
  line-height: 20px;
  width: 22rem;
}
.input:focus,
.input:active,
.input:hover {
  border: 1px solid #4e6f81;
  outline: 0;
}
</style>
