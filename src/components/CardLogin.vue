<template>
  <div class="card animeLeft">
    <input type="text" class="input form-control" placeholder="E-mail" />
    <input type="password" class="input form-control" placeholder="Senha" />
    <button class="entrar">Entrar</button>
    <router-link class="esqueci" to="esqueceu-senha">Esqueceu sua senha?</router-link>
    <span class="hr"></span>
    <button class="btn-criar" @click="cadastrar()">Criar conta</button>
  </div>
</template>

<script>
export default {
  methods:{
    cadastrar(){
      this.$router.push('cadastro')
    }
  }
};


</script>

<style scoped>
.btn-criar {
  background: #f5cb4c;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
  color: #fff8ea;
  width: 180px;
  height: 55px;
  margin: 23px 11rem 16px 11rem;
}
.hr {
  border: 1px solid rgba(0, 0, 0, 0.3);
  transform: rotate(0.15deg);
  margin: 0 25px;
}
.card {
  height: 370px;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #e3d8b4;
}
.esqueci {
  color: #597f93;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 23px;
}
.input {
  background: #fff8ea;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 26px;
  margin: 16px 10px;
  font-size: 20px;
  line-height: 23px;
  width: 32rem;
}
.entrar {
  height: 55px;
  left: 790px;
  top: 383px;
  background: #597f93;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
  color: #fff;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  margin: 9px 10px 12px 10px;
}
.input:focus,
.input:active,
.input:hover {
  border: 1px solid #4E6F81;
}
.btn-criar:hover,
.btn-criar:focus{
border: 1px solid #F5CB4C;
}
.entrar:hover,
.entrar:focus{
border: 1px solid #F5CB4C;
}
</style>