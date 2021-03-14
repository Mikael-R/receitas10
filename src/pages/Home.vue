<template>
  <div style="backgroud: #ffefc0">
    <Nav :desabilitar="false" />
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="card-receita"
            v-bind:key="recipe.id"
            v-for="recipe in recipes.column1"
          >
            <img :src="recipe.demoImages" alt="Foto da receita" />
            <router-link
              class="card-title"
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
            <span class="card-subtitle">{{
              recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)
            }}</span>
            <span class="card-subtitle">
              Por:
              <router-link :to="`/perfil/${recipe.authorUsername}`">
                {{ recipe.authorName }}
              </router-link>
            </span>
            <span class="card-subtitle" style="margin-bottom:10px">
              Publicado em:
              {{ new Date(recipe.createdAt).toLocaleDateString() }}
            </span>
          </div>
        </div>

        <div class="col">
          <div
            class="card-receita"
            v-bind:key="recipe.id"
            v-for="recipe in recipes.column2"
          >
            <img :src="recipe.demoImages" alt="Foto da receita" />
            <router-link
              class="card-title"
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
            <span class="card-subtitle">{{
              recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)
            }}</span>
            <span class="card-subtitle">
              Por:
              <router-link to="/perfil">
                {{ recipe.authorName }}
              </router-link>
            </span>
            <span class="card-subtitle" style="margin-bottom:10px">
              Publicado em:
              {{ new Date(recipe.createdAt).toLocaleDateString() }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <hr/>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import recipes from "../services/recipes";
export default {
  components: {
    Nav,
  },
  data: () => {
    return {
      recipes: {
        column1: [],
        column2: [],
      },
      errored: false,
      loading: true,
    };
  },
  async beforeMount() {
    const { data } = await recipes.listRandom(1); // 1 = pagina
    data.recipes.forEach((v, i) => {
      if (i < 4) this.recipes.column1.push(v);
      if (i > 4 && i <= 8) this.recipes.column2.push(v);
    });
  },
  methods: {},
};
</script>

<style scoped>
.card-receita {
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 277px;
  height: 314px;
  background: #e3d8b4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
.card-receita img {
  width: 280px;
  height: 180px;
  position: relative;
  border-radius: 8px 8px 0 0;
  margin-bottom: 20px;
}
.card-title {
  margin-top: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
}
.card-subtitle {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 11px;
}
.container {
  overflow-y: hidden;
}
</style>
