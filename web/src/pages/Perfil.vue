<template>
  <div class="main">
    <Nav :desabilitar="true" />
    <div class="container">
      <div class="row marginTop">
        <div class="col">
          <img class="avatar" :src="user.avatarUrl || require('../assets/img/blanck.png')" alt="foto perfil" />
          <span class="nome">{{ user.name }}</span>
        </div>
      </div>
      <div class="row marginTop">
        <div class="col">
          <span class="description">{{ user.description }}</span>
        </div>
      </div>
      <div class="row marginTop">
        <!-- <div class="col">
          <h2>Atividades</h2>
        </div> -->
        <div class="col">
          <h2>Receitas</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="hr"></div>
        </div>
      </div>
      <div class="row">
        <!-- <div class="col">
          <div class="cart-text">
            <span>Curtiu a receita de Tortas de Elefante de Junior Tavares</span>
          </div>
        </div> -->
        <div
          class="card-receita"
          v-bind:key="recipe.id"
          v-for="recipe in recipes"
        >
          <div>
            <img
              class="card-receita-img"
              :src="recipe.demoImages"
              alt="foto da receita"
            />
          </div>
          <div class="texto">
            <router-link
              class="card-receita-title"
              :to="`/receita/${recipe.authorUsername}/${recipe.name}`"
            >
              {{
                recipe.name
                  .split("-")
                  .join(" ")
                  .toLowerCase()
                  .replace(/(?:^|\s)\S/g, (w) => w.toUpperCase())
              }}
            </router-link>
            <span class="card-receita-categoria">{{
              recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)
            }}</span>
            <span class="card-receita-data">
              Publicado em:
              {{ new Date(recipe.createdAt).toLocaleDateString() }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import usersService from "../services/users.js";
import recipesService from "../services/recipes.js";
export default {
  components: {
    Nav,
  },
  data: function() {
    return {
      user: {},
      recipes: [],
    };
  },
  async beforeMount() {
    const { username } = this.$route.params;
    const { user } = (await usersService.userInfo(username)).data;
    const { recipes } = (await recipesService.userRecipes(username)).data;
    this.user = user;
    this.recipes = recipes;
  },
};
</script>

<style scoped>
.main {
  background: #ffefc0;
}
.texto {
  margin-top: 12px;
}
.card-receita {
  width: 328px;
  height: 125px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  background: #e3d8b4;
  border-radius: 8px 8px 8px 8px;
  margin-left: 15px;
  margin-top: 15px;
}
.card-receita-img {
  width: 128px;
  height: 125px;
  border-radius: 8px;
}
.card-receita-title {
  margin: 16px 26px 0 26px;
  font-size: 15px;
  line-height: 22px;
  font-style: normal;
  font-weight: 600;
}
.card-receita-data {
  display: flex;
  justify-content: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  margin-top: 18px;
}
.card-receita-categoria {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  margin-top: 18px;
}
.ml {
  margin-left: 18rem;
}
.hr {
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 550px;
  height: 0px;
  margin-bottom: 25px;
}
.cart-text {
  width: 550px;
  height: 35px;
  background: #e3d8b4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 24px;
  display: flex;
  align-items: center;
}
.cart-text span {
  color: #000000;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-left: 12px;
}
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
.marginTop .col .nome {
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
.avatar {
  width: 70px;
  height: 70px;
}
.description {
}
</style>
