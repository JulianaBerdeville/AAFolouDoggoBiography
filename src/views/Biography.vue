<template>
  <div class="biography-page">
    <h2>
      {{ $t("message.biographyPageTitle") }}
    </h2>
    <h3>
      {{ $t("message.biographyPageHeader") }}
    </h3>
    <p>
      {{ $t("message.biographyPageContent1") }}
    </p>
    <p>
      {{ $t("message.biographyPageContent2") }}
    </p>
    <p>
      {{ $t("message.biographyPageContent3") }}
    </p>

    <h4>
      {{ $t("message.biographyPageContentEnding") }}
    </h4>
    <img :src="require('@/assets/hungry-a-a-folou.png')" />
  </div>
</template>

<style scoped>
.biography-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  margin-top: 5px;
  margin-bottom: 2em;
}

h3 {
  margin-bottom: 1em;
}

h4 {
  margin-top: 4em;
}

p {
  margin-bottom: 1em;
  width: 80%;
}

img {
  bottom: 0;
  position: absolute;
}
</style>