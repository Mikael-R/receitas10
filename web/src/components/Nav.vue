<template>
  <div>
    <div class="nav-receitas">
      <router-link class="home" to="/">
        <img src="../assets/img/logoNav.png" alt="logo" />
      </router-link>
      <div class="wrap">
        <div class="group-search">
          <input
            v-if="desabilitar"
            class="input-search"
            type="text"
            placeholder="Encontre uma receita..."
            disabled="disabled"
          />
          <input
            v-if="!desabilitar"
            class="input-search"
            type="text"
            placeholder="Encontre uma receita..."
          />
          <button v-if="desabilitar" class="btn-search" disabled=" disabled">
            <img src="../assets/img/search.png" alt="icon-search" />
          </button>
          <button v-if="!desabilitar" class="btn-search">
            <img src="../assets/img/search.png" alt="icon-search" />
          </button>
        </div>
      </div>
      <div class="enviar">
        <img
          src="../assets/img/shopping-list.png"
          alt="icon-shopping"
          @click="() => this.$router.replace('/enviar-receita')"
        />
        <router-link class="link" to="/enviar-receita"
          >ENVIE SUA RECEITA</router-link
        >
      </div>
      <router-link
        class="img"
        :to="username ? `/perfil/${username}` : '/login'"
      >
        <img
          :src="avatarUrl || require('../assets/img/blanck.png')"
          alt="foto de perfil"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    desabilitar: Boolean,
  },
  data() {
    return {
      username: "",
      avatarUrl: "",
    };
  },
  async beforeMount() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    this.username = user?.username;
    this.avatarUrl = user?.avatarUrl;
  },
};
</script>

<style scooped>
.home:hover {
  cursor: pointer;
}
.wrap:hover {
  cursor: pointer;
}
.enviar img:hover {
  cursor: pointer;
}
.img:hover {
  cursor: pointer;
}
.img img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
.input-search:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.btn-search:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.link {
  color: #c62828;
}
.link:hover {
  color: #c62828;
}
</style>
