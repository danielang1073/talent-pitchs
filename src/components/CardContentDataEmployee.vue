<template>
  <el-card class="container-card">
    <div class="flex flex-wrap justify-left">
      <img :src="dataMap.img" />
      <h2 class="title-style text-lg font-bold tracking-tighter ml-4">
        {{ dataMap.title }}
      </h2>
    </div>
    <div
      class="flex flex-wrap justify-left items-center mt-4 container-items-layout"
    >
      <div
        class="flex justify-between"
        v-for="item in dataMap?.items"
        :key="item.id"
      >
        <div
          class="text-xs font-bold tracking-tighter rounded-xl cotainer-item"
          v-if="!dataMap.level"
        >
          {{ item.text }}
        </div>
        <div class="flex flex-col text-center justify-between" v-else>
          <span class="text-[13px] font-bold">{{ item.text }}</span>
          <span class="text-xs"> Avanzado</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DummyItem } from "./DataEmploye";

@Component
export default class CardContentDataEmployee extends Vue {
  @Prop() dataMap!: DummyItem;
}
</script>
<style lang="postcss">
.container-card {
  border: 1px solid #e8eaf6;
  @apply rounded-xl !important;
}
.title-style {
  line-height: 125%;
  @apply text-[#1a237e];
}
.container-items-layout {
  @apply px-[5px];
  @apply gap-[8px];
}
.cotainer-item {
  @apply bg-[#e3f2fd];
  @apply text-[#2196f3];
  @apply min-w-[70px];
  line-height: 150%;
}
</style>
