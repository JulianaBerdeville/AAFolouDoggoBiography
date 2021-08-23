<template>
  <div class="documentary-page">
    <h2>
      {{ $t("message.documentaryPageTitle") }}
    </h2>

    <p>
      {{ $t("message.documentaryPageContent") }}
    </p>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5PgIOUIeBps"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <img :src="require('@/assets/hungry-a-a-folou.png')" />
  </div>
</template>

<style scoped>
.documentary-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  margin-top: 5px;
  margin-bottom: 2em;
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
