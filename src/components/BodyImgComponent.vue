<template>
  <div>
    <div
      class="bg-cover h-[230px] w-full bg-center"
      :style="{ backgroundImage: `url(${require('@/assets/word.png')})` }"
    ></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "BodyImgComponent",
};
</script>
