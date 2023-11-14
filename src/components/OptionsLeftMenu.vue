<template>
  <div>
    <el-col class="flex items-center justify-between mt-4" :span="24">
      <div class="flex items-center">
        <img :src="imagen" />
        <span class="ml-2 text-xs">{{ text }}</span>
      </div>
      <span class="text-lg text-[#666666]">20</span>
    </el-col>
    <el-col>
      <div class="mt-3 border-solid bg-[#E8EAF6] h-px" />
    </el-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class OptionsLeftMenu extends Vue {
  @Prop() text!: string;
  @Prop() imagen!: string;
}
</script>
