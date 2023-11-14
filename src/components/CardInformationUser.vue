<template>
  <el-row :gutter="20">
    <el-card class="el-card-style border-solid" shadow="always">
      <el-row>
        <el-col :span="24">
          <div class="mt-3 flex justify-center">
            <div
              class="container-circle font-bold rounded-full items-center flex justify-center"
            >
              <span class="ml-[-10px]">AC</span>
            </div>
          </div>
        </el-col>
        <el-col class="mt-4" :span="24">
          <p class="sub-text-user text-2xl font-bold">A.C. Telecom</p>
        </el-col>
        <el-col class="mt-2 mb-2" :span="24">
          <span class="text-xs font-normal tracking-wider opacity-75">
            @ac-telecom
          </span>
        </el-col>
        <el-col class="mt-2" :span="24">
          <p class="text-sm-style tracking-widest font-semibold">
            Startup - tecnología
          </p>
        </el-col>
        <el-col
          class="mt-3 flex items-center justify-center container-col"
          :span="24"
        >
          <div
            class="container-circle-point w-2.5 h-2.5 rounded-full items-center flex justify-center"
          />
          <p style="color: #c4e0a4" class="text-xs font-normal tracking-wider">
            Empresa activa
          </p>
        </el-col>
        <el-col
          class="mt-3 flex items-center justify-center container-col"
          :span="24"
        >
          <i class="el-icon-location-outline scale-150"></i>
          <p class="text-xs font-normal tracking-wider">
            Floridablanca - Colombia
          </p>
        </el-col>
        <el-col
          class="mt-4 flex items-center justify-center container-col"
          :span="24"
        >
          <img src="../assets/Star.png" />
          <img src="../assets/Star.png" />
          <img src="../assets/Star.png" />
          <img src="../assets/Star.png" />
          <img src="../assets/Star_16.png" />
          <span class="text-xs">(10 Reviews)</span>
        </el-col>
        <el-col
          class="mt-4 flex items-center justify-center container-col"
          :span="24"
        >
          <img src="../assets/facebook_square.png" />
          <img src="../assets/instagram.png" />
          <img src="../assets/X_twitter.png" />
          <img src="../assets/linkedin.png" />
        </el-col>
        <el-col
          class="mt-4 flex items-center justify-center container-col"
          :span="24"
        >
          <img src="../assets/Link.png" />
          <span class="text-xs color-link-style">
            https://www.actelecom.net/telecom
          </span>
        </el-col>
        <el-col
          class="mt-4 flex items-center justify-center container-col"
          :span="24"
        >
          <img src="../assets/foto.png" />
        </el-col>
        <el-col :span="24">
          <div
            class="mt-4 border-solid-style flex items-center justify-center rounded-xl container-col bg-transparent"
          >
            <img src="../assets/codigo.png" />
          </div>
        </el-col>
        <el-col class="mt-4" :span="24">
          <el-button class="buttom-style">
            <div class="flex items-center">
              <img src="../assets/Share.png" />
              <span>Compartir perfil</span>
            </div>
          </el-button>
        </el-col>
        <el-col
          class="icon-color rounded-s-lg flex justify-center mt-4"
          :span="3"
        >
          <div class="style-height flex items-center">
            <img src="../assets/Download.png" />
          </div>
        </el-col>
        <el-col class="mt-4" :span="21">
          <el-button class="buttom-style-outline-card">
            <span class="ml-2">Descargar resumen</span>
          </el-button>
        </el-col>
        <OptionsLeftMenu
          :imagen="require('@/assets/Users_gray.png')"
          text="Talentos"
        />
        <OptionsLeftMenu
          :imagen="require('@/assets/Eye.png')"
          text="vistas del perfil"
        />
        <OptionsLeftMenu
          :imagen="require('@/assets/Video.png')"
          text="Pitches recibidos"
        />
        <OptionsLeftMenu
          :imagen="require('@/assets/Transporter.png')"
          text="Exhibiciones"
        />
        <OptionsLeftMenu
          :imagen="require('@/assets/File_User.png')"
          text="Vacantes"
        />
        <OptionsLeftMenu
          :imagen="require('@/assets/Photo_Video.png')"
          text="Contenidos"
        />
      </el-row>
    </el-card>
  </el-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OptionsLeftMenu from "./OptionsLeftMenu.vue";

@Component({
  components: {
    OptionsLeftMenu,
  },
})
export default class CardInformationUser extends Vue {}
</script>
<style lang="postcss" scope>
.el-card-style {
  @apply w-[336px];
  @apply absolute;
  @apply top-[-120px];
  @apply left-[141px];
  border-radius: 10px !important;
  padding: 32px, 24px, 16px, 24px !important;
}

.container-circle {
  @apply bg-[#e8eaf6];
  @apply w-[170px];
  @apply h-[170px];
  @apply text-[80px];
  @apply text-[#1a237e];
  letter-spacing: -16px;
}
.sub-text-user {
  @apply text-[#1a237e];
  letter-spacing: 1px;
}

.container-circle-point {
  @apply bg-[#8bc34a];
}
.container-col {
  @apply gap-[6px];
}

.text-sm-style {
  @apply text-[12px];
  @apply text-[#9fa8da];
}
.color-link-style {
  @apply text-[#DE1C7D];
  letter-spacing: 1px;
}
.border-solid-style {
  @apply border-solid;
  @apply border-2 border-[#E8EAF6];
}
.buttom-style {
  @apply bg-[#DE1C7D] !important;
  @apply w-full !important;
  @apply text-white !important;
  @apply flex !important;
  @apply px-[12px] !important;
  @apply py-[8px] !important;
  @apply justify-center !important;
  @apply items-center !important;
  @apply gap-10 !important;
  @apply rounded-[10px] !important;
}
.buttom-style-outline-card {
  @apply bg-transparent !important;
  @apply w-full !important;
  @apply text-black !important;
  @apply px-[12px] !important;
  @apply py-[14px] !important;
  @apply items-center !important;
  @apply gap-10 !important;
  @apply rounded-[10px] !important;
  @apply items-center !important;
  @apply flex !important;
  @apply border-l-0 !important;
  @apply rounded-s-none !important;
  @apply text-left !important;
  @apply text-xs !important;
}
.icon-color {
  @apply bg-[#DE1C7D];
}
.style-height {
  @apply h-[46px];
}
</style>
