<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Homepage</router-link>
      <router-link to="/biography">{{ $t("message.navbarLinkBio")}}</router-link>
      <router-link to="/progress">{{ $t("message.navbarLinkProgress")}}</router-link>
      <router-link to="/documentary">{{ $t("message.navbarLinkDocumentary")}}</router-link>

      <select v-model="language" @change="switchLanguage()">
        <option value="en"> English </option>
        <option value="es"> Español </option>
        <option value="fr"> Français </option>
        <option value="ptBr"> Português </option>
      </select>
    </div>
    <router-view />
  </div>
</template>

<script>
export default ({
  data() {
    return {
      language: null,
    }
  },
  methods: {
    switchLanguage() {
      localStorage.setItem("lang", this.language);
      window.location.reload();
    },
    created() {
      if (localStorage.getItem("lang") === null) {
        localStorage.setItem("lang", null);
      }
     this.language = localStorage.getItem("lang"); 
    }
  }
})
</script>


<style>
*  {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2D2424;
  background-color: #F1E9E5;
  height: 100vh;
}

#nav {
  padding: 30px;
  background-color: #DEBA9D;
}

#nav a {
  font-weight: bold;
  color: #2D2424;
  padding: 0 10px;
  text-decoration: none;

}

#nav a.router-link-exact-active {
  color: #B85C38;
}
</style>
