<template>
  <div class="tamanho">
    <div class="row align">
      <div class="col top margin" >
        <img class="logo" src="../assets/img/logo.png" alt="logo" />
      </div>
      <div class="col top margin-card" >
        <CardLogin />
      </div>
    </div>
  </div>
</template>

<script>
import CardLogin from "../components/CardLogin";
export default {
  components: {
    CardLogin,
  },
};
</script>

<style >
.margin{
  margin-left: 18rem;
}
.margin-card{
  margin-right: 8rem;
}
.top {
  margin-top: 100px;
}
.tamanho {
  background-color: #fcf5e0;
  width: 100%;
}
.logo {
  width: 481px;
  height: 173px;
}
.align {
  display: flex;
  align-items: center;
}
@media(max-width: 576px){
  .margin{
    margin-left: 4rem !important;
  }
  .top .margin{
    margin-top: 13px;
  }
  .margin-card{
  margin-left: 1rem;
  margin-right: 0;
}
.top .margin-card{
  margin-top: 51px;
}
}
</style>