<template>
  <div class="homepage">
    <h1>{{ $t("message.homepageTitle") }}</h1>
    <p>{{ $t("message.homepageContent") }}</p>
    <div class="nav-container">
      <div class="nav-block">
        <router-link :to="{name: 'Biography'}"> {{ $t("message.navbarLinkBio") }} </router-link>
        <router-link :to="{name: 'Biography'}">
          <img :src="require('@/assets/confident-a-a-folou.png')" />
        </router-link>
      </div>
      <div class="nav-block">
        <router-link :to="{name: 'Progress'}"> {{ $t("message.navbarLinkProgress") }} </router-link>
        <router-link :to="{name: 'Progress'}">
          <img :src="require('@/assets/peaceful-a-a-folou.png')" />
        </router-link>
      </div>
      <div class="nav-block">
        <router-link :to="{name: 'Documentary'}"> {{ $t("message.navbarLinkDocumentary") }} </router-link>
        <router-link :to="{name: 'Documentary'}">
          <img :src="require('@/assets/drip-a-a-folou.png')" />
        </router-link>
      </div>
    </div>
    <img :src="require('@/assets/hungry-a-a-folou.png')" class="img-footer" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.homepage {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.nav-container {
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 2em;
}
.nav-block {
  display: flex;
  flex-direction: column;
}

.img-footer {
  width: auto;
  bottom: 0;
  position: fixed;
  margin: 0;
}

img {
  width: calc(100vh / 5);
  margin-right: 1em;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  margin-right: 1em;
  color: #2d2424;
  margin-top: 5px;
}
</style>
