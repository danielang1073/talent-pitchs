<template>
  <div>
    <el-card class="container-card">
      <div class="flex flex-wrap">
        <img class="img-style" src="../assets/User.png" />
        <span class="ml-4 text-lg font-bold tracking-tighter text-title"
          >Resumen de la empresa</span
        >
      </div>
      <div class="flex flex-wrap flex-col">
        <span class="text-left mt-8 text-description">Descripción</span>
        <span class="text-p-style text-xs tracking-tighter text-left mt-2">
          {{ informationEmployeeCard[0].description }}</span
        >
      </div>
      <el-row class="text-left">
        <el-col class="mt-5" :span="12">
          <span class="text-description">Correo electrónico</span>
        </el-col>
        <el-col class="mt-5" :span="12">
          <span class="text-description">Número de contacto</span>
        </el-col>
        <el-col class="mt-5" :span="12">
          <p class="text-p-style">{{ informationEmployeeCard[0].email }}</p>
        </el-col>
        <el-col class="mt-5" :span="12">
          <p class="text-p-style">{{ informationEmployeeCard[0].phone }}</p>
        </el-col>
        <el-col class="mt-5" :span="12">
          <span class="text-description">Estados deseados buscados</span>
        </el-col>
        <el-col class="mt-5" :span="12">
          <span class="text-description">Rol más buscado</span>
        </el-col>
        <el-col class="mt-5" :span="12">
          <p class="text-p-style">
            {{ informationEmployeeCard[0].statesSearch }}
          </p>
        </el-col>
        <el-col class="mt-5" :span="12">
          <p class="text-p-style">{{ informationEmployeeCard[0].name }}</p>
        </el-col>
      </el-row>
    </el-card>
    <el-row class="mt-4" :gutter="20">
      <el-col v-for="item in dummyData" :key="item.id" :span="12">
        <CardContentDataEmployee :dataMap="item" />
      </el-col>
      <TitleCArdComponent title="Lo que buscamos en el talento" />
      <el-col
        class="mt-4"
        v-for="item in PerfilSearch"
        :key="item.id"
        :span="12"
      >
        <CardContentDataEmployee :dataMap="item" />
      </el-col>
      <el-col
        class="mt-4"
        v-for="item in Metodologías"
        :key="item.id"
        :span="24"
      >
        <CardContentDataEmployee :dataMap="item" />
      </el-col>
      <TitleCArdComponent title="Lo que ofrecemos en la empresa" />
      <el-col
        class="mt-4"
        v-for="item in InformationEmployee"
        :key="item.id"
        :span="12"
      >
        <CardContentDataEmployee :dataMap="item" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardContentDataEmployee from "./CardContentDataEmployee.vue";
import TitleCArdComponent from "./TitleCArdComponent.vue";

import {
  DummyItem,
  dummyData,
  PerfilSearch,
  Metodologías,
  InformationEmployee,
  informationEmployeeCard,
  dataEmployeeDetail,
} from "./DataEmploye";

interface ProfileTabData {
  dummyData: DummyItem[];
  PerfilSearch: DummyItem[];
  Metodologías: DummyItem[];
  InformationEmployee: DummyItem[];
  informationEmployeeCard: dataEmployeeDetail[];
}

@Component({
  components: {
    CardContentDataEmployee,
    TitleCArdComponent,
  },
})
export default class ProfileTab extends Vue {
  [dummyData: string]: any;

  data(): ProfileTabData {
    return {
      dummyData,
      PerfilSearch,
      Metodologías,
      InformationEmployee,
      informationEmployeeCard,
    };
  }
}
</script>

<style lang="postcss">
.container-card {
  border: 1px solid #e8eaf6;
  @apply rounded-xl !important;
}
.img-style {
  @apply bg-[#f6f6f6];
  border-radius: 50px;
}
.text-title {
  line-height: 125%;
  @apply text-[#1a237e];
}
.text-description {
  @apply text-[13px];
  @apply font-semibold;
  @apply tracking-tighter;
}
.text-p-style {
  line-height: 150%;
}
.color-title {
  @apply text-[#1A237E];
}
.border-color-style {
  @apply border-[#E8EAF6];
}
.padding-col-style {
  @apply pr-[30px] !important;
}
</style>
