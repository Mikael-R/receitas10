<template>
  <div class="aling">
    <!-- <BannerFooter /> -->
    <img src="../assets/img/comida.png" alt="faixa comida" />
  </div>
</template>

<script>
// import BannerFooter from "../assets/img/comida.svg";
export default {
  // components: {
  //   BannerFooter,
  // },
};
</script>

<style scoped>
  div {
  background-color: #fcf5e0;
}
.aling{
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
img {
 
  width: 100%;
  position: absolute;
  margin-top: 6rem;
  background-color: #fcf5e0;

}
</style>