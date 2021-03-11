<template>
  <div class="tamanho">
    <div class="row align">
      <div class="col top" style="margin-left: 17rem;">
        <img class="logo" src="../assets/img/logo.png" alt="logo" />
      </div>
      <div class="col top" style="margin-right: 15rem;">
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
</style>