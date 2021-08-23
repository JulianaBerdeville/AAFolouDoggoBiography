<template>
  <div class= "progress-page">
    <h2>
      {{ $t("message.progressPageTitle") }}
    </h2>

    <div>
      <p v-for="(item, index) in phases" :key="item.phase">
        <router-link :to="{ name: 'ProgressDetails', query: { phaseName: item.phase }, params: { id: index}}">
          {{ item.phase }}
        </router-link>
      </p>
    </div>
    <img :src="require('@/assets/hungry-a-a-folou.png')" />
  </div>
</template>


<script scoped>
export default {
  data() {
    return {
      phases: [
        { phase: this.$t("message.progressPagePhase1") },
        { phase: this.$t("message.progressPagePhase2") },
        { phase: this.$t("message.progressPagePhase3") },
        { phase: this.$t("message.progressPagePhase4") },
        { phase: this.$t("message.progressPagePhase5") },
        { phase: this.$t("message.progressPagePhase6") },
        { phase: this.$t("message.progressPagePhase7") },
        { phase: this.$t("message.progressPagePhase8") },
        { phase: this.$t("message.progressPagePhase9") },
        { phase: this.$t("message.progressPagePhase10") },
        { phase: this.$t("message.progressPagePhase11") },
        { phase: this.$t("message.progressPagePhase12") },
        { phase: this.$t("message.progressPagePhase13") },
        { phase: this.$t("message.progressPagePhase14") },
        { phase: this.$t("message.progressPagePhase15") },
        { phase: this.$t("message.progressPagePhase16") },
        { phase: this.$t("message.progressPagePhase17") },
      ]
    };
  },
};
</script>

<style scoped>
.progress-page {
  background-color: inherit;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  margin-bottom: 1em;
  margin-top: 5px;
}

p {
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
}

a {
  text-decoration: none;
  color: #2D2424;
}

img {
  float: right;
  position: relative;
}
</style>