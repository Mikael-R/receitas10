<template>
  <div class="row align animeLeft">
    <div class="card" >
      <h2 class="title">Esqueceu sua senha?</h2>
      <span class="subtitle">Insira seu email que lhe enviaremos uma senha TEMPORARIA.</span>
      <hr class="hr" />
      <form>
        <div class="">
        </div>
        <input
          class="input"
          type="email"
          placeholder="Email"
          v-model="valueEmail"
        />
        <Button textoButton="Enviar" @enviar="submit()" />
      </form>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
// import Input from '../components/input'
export default {
  components: {
    Button
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
      this.$router.push('login')
    },
    voltar(){
      this.$router.push('login')
    }
  },
};
</script>

<style scoped>
.button{
  font-weight: 500;
font-size: 22px;
line-height: 26px;
color: #FCF5E0;
background: #F5CB4C;
border: 1px solid rgba(0, 0, 0, 0.3);
box-sizing: border-box;
border-radius: 8px;
width: 213px;
height: 50px;
margin: 0 0 0 329px;
}

.img {
  width: 25px;
}
.card {
  height: 310px;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #e3d8b4;
  margin-top: 3rem;
}
.card-concluido {
  width: 420px;
  height: 291px;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #e3d8b4;
  margin-top: 3rem;
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
  font-size:18px;
  line-height: 30px;
  margin: 0 122px 18px 31px;
}
.subtitle-concluido {
  font-family: Poppins !important;
  font-size: 20px;
  line-height: 30px;
  margin: 0 122px 18px 20px;
  text-align: center;
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
  width: 32rem;
}
.input:focus,
.input:active,
.input:hover {
  border: 1px solid #4e6f81;
}
</style>