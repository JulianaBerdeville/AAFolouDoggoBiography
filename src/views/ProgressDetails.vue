<template>
  <div class="progress-details-page">
    <h2>
      
      {{ $t("message.progressDetailsPageTitle") }}
    </h2>
    <h4>{{ phaseData }}</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id
      nibh tortor id. Quisque non tellus orci ac auctor augue mauris. Ligula
      ullamcorper malesuada proin libero nunc. Cras sed felis eget velit
      aliquet. Turpis tincidunt id aliquet risus feugiat in ante. Placerat
      vestibulum lectus mauris ultrices eros in cursus turpis. Pellentesque id
      nibh tortor id aliquet. A lacus vestibulum sed arcu non. Mauris commodo
      quis imperdiet massa. Cras ornare arcu dui vivamus arcu felis bibendum ut.
      Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nisl
      nunc mi ipsum faucibus.
    </p>
    <p>
      Odio tempor orci dapibus ultrices in iaculis. Auctor eu augue ut lectus
      arcu bibendum at varius. Sed odio morbi quis commodo odio aenean. Montes
      nascetur ridiculus mus mauris vitae ultricies leo integer. Aenean sed
      adipiscing diam donec adipiscing tristique risus. Varius duis at
      consectetur lorem donec massa sapien faucibus. Enim tortor at auctor urna
      nunc id cursus. Et pharetra pharetra massa massa ultricies mi quis. Amet
      tellus cras adipiscing enim. Accumsan lacus vel facilisis volutpat est
      velit egestas.
    </p>
    <p>
      Eleifend donec pretium vulputate sapien nec sagittis aliquam. Interdum
      consectetur libero id faucibus nisl tincidunt eget. Quis auctor elit sed
      vulputate mi sit amet. Amet mattis vulputate enim nulla aliquet. Auctor
      augue mauris augue neque gravida in. Interdum velit laoreet id donec
      ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus
      pulvinar. Egestas congue quisque egestas diam in arcu. Pulvinar
      pellentesque habitant morbi tristique senectus. Volutpat blandit aliquam
      etiam erat velit scelerisque in dictum. Morbi leo urna molestie at
      elementum eu facilisis sed. Nibh ipsum consequat nisl vel pretium lectus.
      Nec dui nunc mattis enim.
    </p>

    <img :src="require('@/assets/hungry-a-a-folou.png')" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      phaseId: this.$route.params.id,
      phaseData: this.$route.query.phaseName,
    };
  },
};
</script>

<style scoped>
.progress-details-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h2 {
  margin-top: 5px;
  margin-bottom: 2em;
}

h4 {
  margin-bottom: 1em;
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
