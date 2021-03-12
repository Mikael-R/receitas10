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
  margin-left: 6rem;
}
.margin-card{
  margin-right: 1rem;
}
.top {
  margin-top: 100px;
}
.tamanho {
  background-color: #fcf5e0;
  display: flex;
}
.logo {
  width: 480px;
  height: 170px;
}
.align {
  display: flex;
  align-items: center;
}
.top .margin-card {
  margin-top: 51px;
}
</style>