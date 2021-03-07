<template>
  <div class="">
    <div class="row align ">
      <div class="col top">
      <img class="logo" src="../assets/img/logo.png" alt="logo">
      </div>
      <div class="col">
        <CardLogin/>
      </div>
    </div>
  </div>
</template>

<script>
import CardLogin from '../components/CardLogin'
export default {
  components: {
    CardLogin
  }
}
</script>

<style>
.top{
  margin-top: 100px;
}
  div{
   background-color: #FCF5E0;
   width: 100%;
   height: 100vh;
  }
  .logo{
    width: 481px;
    height: 173px;

  }
  .align{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>