<template>
  <el-header class="flex flex-wrap">
    <el-row :gutter="20">
      <el-col :span="24"><img src="../assets/new_logo_utils.svg.svg" /></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="7"
        ><span class="text-white text-base font-bold">Conéctate</span></el-col
      >
      <el-col :span="8"
        ><span class="text-white text-base font-bold">Mis muros</span></el-col
      >
      <el-col :span="7"
        ><span class="text-white text-base font-bold">Mis listas</span></el-col
      >
      <el-col :span="2"
        ><span class="text-white text-base font-bold">Aprende</span></el-col
      >
    </el-row>
    <el-row class="flex items-center" :gutter="22">
      <el-col :span="10">
        <el-button
          class="flex justify-center items-center rounded-[10px] font-medium tracking-tighter el-button-styled font-bottom-text"
          ><span class="text-xs font-semibold">Comenzar</span>
          <i class="el-icon-plus ml-2"></i>
        </el-button>
      </el-col>
      <el-col :span="4">
        <img src="../assets/email.svg" />
      </el-col>
      <el-col :span="3">
        <img src="../assets/bell-light 9.svg" />
      </el-col>

      <el-col :span="4">
        <img
          alt="notificación"
          class="scale-150"
          src="../assets/Ellipse 164.svg"
        />
      </el-col>
      <el-col :span="3">
        <img src="../assets/Outline.svg" />
      </el-col>
    </el-row>
  </el-header>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
};
</script>
<style lang="postcss" scoped>
.el-header {
  @apply px-[100px];
  @apply bg-[#1a237e];
  height: 84px !important;
  @apply flex;
  @apply items-center;
  @apply justify-between;
}
.el-button-styled {
  @apply bg-[#de1c7d];
  @apply border-none;
  @apply text-white;
}
.font-bottom-text {
  @apply px-[12px];
  @apply py-[5px];
  @apply gap-[8px];
  font-family: "Roboto";
  line-height: 150%;
}
</style>
