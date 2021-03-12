<template>
  <div>
    <Nav />
    <div class="container">
      <div class="row marginTop">
        <div class="col">
          <img src="../assets/img/blanck.png" alt="foto perfil">
          <span>{{ user.name }}</span>
        </div>
      </div>
      <div class="row marginTop">
        <div class="col">
          <h2>Atividades</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  components: {
    Nav,
  },
  data: function() {
    return {
      user: {
        name: 'Iguinho Bariloche'
      }
    };
  },
};
</script>

<style scoped>
.marginTop {
  margin-top: 4rem;
}
.marginTop img {
  width: 70px;
  height: 70px;
}
.marginTop .col {
  display: flex;
  align-items: center;
}
.marginTop .col span {
  margin-left: 14px;
  color: #c62828;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
}
.marginTop .col img {
  border-radius: 50%;
}
</style>
