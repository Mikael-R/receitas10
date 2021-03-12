<template>
  <div>
    <div class="nav-receitas">
      <img src="../assets/img/logoNav.png" alt="logo" />
      <div class="wrap">
        <div class="group-search">
          <input
            class="input-search"
            type="text"
            placeholder="Encontre uma receita..."
          />
          <button class="btn-search">
            <img src="../assets/img/search.png" alt="icon-search" />
          </button>
        </div>
      </div>
      <div class="enviar">
        <img src="../assets/img/shopping-list.png" alt="icon-shopping" />
        <span>ENVIE SUA RECEITA</span>
      </div>
      <div class="img">
        <img src="../assets/img/blanck.png" alt="foto perfil" @click="perfil()">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    perfil() {
      this.$router.push("perfil");
    },
  },
  
};
</script>

<style >
.img img{
  width: 40px;
  height: 40px;
}
.enviar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #c62828;
  font-size: 11px;
}
.enviar img {
  width: 26px;
  height: 29px;
}
.nav-receitas {
  background: #e3d8b4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
}
group-search {
  position: relative;
}
.input-search {
  background: #fcf5e0;
  border: 1px solid rgba(198, 40, 40, 0.5);
  box-sizing: border-box;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: none;
  padding: 7px;
  cursor: pointer;
}
.input-search:focus {
  outline: 0;
}
.btn-search {
  background: #fcf5e0;
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(198, 40, 40, 0.5);
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  border-left: none;
  text-align: center;
  outline: none;
  transition: 0.3s;
  padding: 7px;
}
.input-search:hover .btn-search:hover {
  border-color: rgba(198, 40, 40, 0.5);
}
</style>