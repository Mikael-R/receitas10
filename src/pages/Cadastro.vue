<template>
  <div class="row align">
    <div class="card">
    <h2 class="title">Ter a sua conta</h2>
    <span class="sub-title">É rápido e facil</span>
    <span class="hr"></span>
    <Input :tipo="tipo" :texto="texto" v-model="valueNome"  />
    <Input :tipo="tipo" :texto="email"  />
    <Input :tipo="pass" :texto="txtSenha"  />
    <Button :textoButton="textoButton" @enviar="submit()" />
    <!-- <button @click="submit()">efef</button> -->
    </div>
  </div>
</template>

<script>
import Input from '../components/input'
import Button from '../components/Button'
export default {
  components: {
    Input,
    Button
  },
  data(){
    return{
      tipo: "text",
      texto: "Seu nome",
      pass: "password",
      email: "E-mail",
      txtSenha: "Senha",
      textoButton: "Criar Conta",
      valueNome: "",
    }
  },
  methods:{
    submit(){
      console.log('entrou');
      if(this.valueNome.length < 0){
        console.log('algo');
      }
    }
  }
};
</script>

<style>
.card {
  width: 420px;
  height: 450px;
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
.title{
  font-family: Poppins !important;
  font-weight: 600;
  font-size: 31px;
  left: 536px;
  margin: 22px 122px 0 31px;
}
.sub-title{
  font-family: Poppins !important;
  font-size: 20px;
  line-height: 30px;
  margin: 0 122px 18px 31px;
}

</style>