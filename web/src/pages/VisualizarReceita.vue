<template>
  <div style="background: #ffefc0">
    <Nav :desabilitar="true" />
    <div class="container">
      <div class="header">
        <span class="title"
          >{{
            recipe.name
              .split("-")
              .join(" ")
              .toLowerCase()
              .replace(/(?:^|\s)\S/g, (w) => w.toUpperCase())
          }}
        </span>
        <span class="creator">
          Por:
          <router-link :to="`/perfil/${recipe.authorUsername}`">
            {{ recipe.authorName }}
          </router-link>
        </span>
        <span class="post-date">
          Publicado em:
          {{ new Date(recipe.createdAt).toLocaleDateString() }}
        </span>
      </div>

      <div class="main">
        <div class="receita">
          <div class="preparo">
            <span class="ingredientes-title">Ingredientes</span>

            <span
              class="ingredientes"
              v-bind:key="ingredient"
              v-for="ingredient in recipe.ingredients"
            >
              {{ ingredient }}
            </span>

            <span class="modo-preparo-title">Modo de Prepado</span>
            <span
              class="modo-preparo"
              v-bind:key="index"
              v-for="index of recipe.howPrepare"
            >
              {{ index }}
            </span>
          </div>

          <div class="receita-info">
            <div class="title">
              <span class="item-title">Tempo de preparo</span>
              <span class="item-title">Rendimento</span>
              <span class="item-title">Dificuldade</span>
            </div>

            <div class="content">
              <span class="item-content">{{ recipe.preparationTime }}</span>
              <span class="item-content">{{ recipe.servings }} porções</span>
              <span class="item-content">{{ recipe.difficulty }}</span>
            </div>
          </div>

          <div v-if="recipe.additionalInformation" class="info-adicional">
            <span class="info-adicional-title">Adicionais: </span>

            <span class="info-adicional-content">{{
              recipe.additionalInformation
            }}</span>
          </div>
        </div>

        <div class="galeria">
          <span class="title">Galeria</span>
          <img
            v-bind:key="image"
            v-for="image of recipe.demoImages"
            :src="image"
            alt="foto da receita"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import recipesService from "../services/recipes.js";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      recipe: {},
    };
  },
  async beforeMount() {
    const { username, recipeName } = this.$route.params;
    const { recipe } = (
      await recipesService.userRecipe(username, recipeName)
    ).data;
    recipe.ingredients = recipe.ingredients.split("\n");
    recipe.howPrepare = recipe.howPrepare.split("\n");
    recipe.demoImages = recipe.demoImages.split("\n");
    this.recipe = recipe;
  },
};
</script>

<style scoped>
.container {
  padding: 30px;
}
.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.header .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
}
.header .creator {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: rgba(0, 0, 0, 0.5);
}
.header .post-date {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: rgba(0, 0, 0, 0.5);
}
.main {
  display: flex;
  flex-direction: row;
}
.main .receita .preparo {
  background: #e3d8b4;

  border-radius: 8px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.main .receita .ingredientes-title {
  font-size: 27px;
  margin-bottom: 12px;
}
.main .receita .ingredientes {
  font-size: 15px;
}
.main .receita .modo-preparo-title {
  font-size: 27px;
  margin-top: 2rem;
}
.main .galeria {
  margin: -42px 0 0 1.5rem;
  display: flex;
  flex-direction: column;
}
.main .galeria img {
  width: 280px;
  height: 180px;
}
.main .galeria .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
}
.main .galeria img {
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.main .receita-info {
  margin-top: 20px;
  background: #e3d8b4;

  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.main .info-adicional {
  margin-top: 20px;
  background: #e3d8b4;

  border-radius: 8px;
  width: 100%;
  padding: 2rem;
  display: inline-block;
}

.main .receita-info .title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
}
.main .receita-info .content {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.main .info-adicional .info-adicional-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
}
.main .info-adicional-content {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
}
.main .receita-info .title .item-title {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main .receita-info .content .item-content {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
