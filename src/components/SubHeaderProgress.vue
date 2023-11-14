<template>
  <div class="flex justify-between items-center pr-10">
    <div class="flex flex-wrap items-center w-2/4">
      <span class="text-sm span-style tracking-widest font-bold"
        >Match con la cultura</span
      >
      <span
        class="ml-2 mr-2 text-sm font-semibold tracking-tighter style-text-percentage"
        >80%</span
      >
      <el-progress
        color="#8BC34A"
        :show-text="false"
        :stroke-width="14"
        :percentage="80"
      />
    </div>
    <div class="flex flex-wrap">
      <el-button class="style-bottom">Enviar Pitch</el-button>
      <el-button class="style-bottom-outline">
        <span class="flex items-center"
          ><img src="../assets/User Plus.png" />Seguir</span
        ></el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SubHeaderProgress",
};
</script>

<style lang="postcss" scope>
.el-progress {
  @apply w-[40%];
}

.span-style {
  @apply text-[#9fa8da];
  line-height: 150%;
}
.style-text-percentage {
  @apply text-[#a8d277];
  line-height: 150%;
}
.style-bottom {
  @apply bg-[#de1c7d] !important;
  @apply text-white !important;
  @apply flex !important;
  @apply px-[12px] !important;
  @apply py-[8px] !important;
  @apply justify-center !important;
  @apply items-center !important;
  @apply gap-10 !important;
  @apply rounded-[10px] !important;
}
.style-bottom-outline {
  @apply text-[#de1c7d] !important;
  @apply w-[91px];
  @apply px-[12px] !important;
  @apply py-[8px] !important;
  @apply justify-center !important;
  @apply items-center !important;
  @apply gap-10 !important;
  @apply rounded-[10px] !important;
  border: 1px solid #de1c7d !important;
}
</style>
