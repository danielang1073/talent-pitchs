<template>
  <div>
    <el-col :span="11">
      <h2 class="text-xl text-justify ml-4 mt-10 color-title font-bold">
        {{ title }}
      </h2>
    </el-col>
    <el-col class="padding-col-style mt-11 mb-11" :span="13">
      <div class="mt-3 border-solid bg-[#E8EAF6] h-px" />
    </el-col>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TitleCArdComponent extends Vue {
  @Prop() title!: string;
}
</script>

<style lang="postcss" scoped>
.color-title {
  @apply text-[#1A237E];
}
.padding-col-style {
  @apply pr-[30px] !important;
}
.border-color-style {
  @apply border-[#E8EAF6];
}
</style>
