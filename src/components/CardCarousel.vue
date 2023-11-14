<template>
  <el-card>
    <img class="rounded-t-xl w-full" :src="dataInfo.image" />
    <div
      class="flex justify-between items-center px-[12px] py-[8px] bg-[#FAFAFA]"
    >
      <span class="text-left text-xs"> Experticia</span>
      <img src="../assets/GroupStart.png" />
      <img src="../assets/Share_Alt.png" />
    </div>
    <div class="flex flex-col text-left px-[12px] py-[8px]">
      <h2 class="text-base text-[#1A237E]">{{ dataInfo.name }}</h2>
      <div
        class="text-xs text-left bg-[#E3F2FD] px-[1px] py-[2px] mt-2 rounded-xl"
      >
        <span class="text-[#39A1F5]"
          >Creada por organización: {{ dataInfo.company_name }}</span
        >
      </div>
    </div>
    <p
      class="text-xs text-left px-[12px] py-[8px] max-w-[350px] leading-relaxed"
    >
      {{ dataInfo.description }}
    </p>

    <div class="flex justify-between px-[12px] py-[8px]">
      <div class="flex flex-col text-left">
        <p
          class="bg-[#E565A5] text-white text-xs max-w-[30px] max-h-[30px] text-center rounded-xl"
        >
          {{ dataInfo.views_count }}
        </p>
        <p class="text-[11px] mt-2">Vistas</p>
      </div>
      <div class="flex flex-col text-left">
        <p
          class="bg-[#E565A5] text-white text-xs max-w-[30px] max-h-[30px] text-center rounded-xl"
        >
          {{ dataInfo.review }}
        </p>
        <p class="text-[11px] mt-2">Comentarios</p>
      </div>
      <div class="flex flex-col text-left">
        <p
          class="bg-[#E565A5] text-white text-xs max-w-[30px] max-h-[30px] text-center rounded-xl"
        >
          {{ dataInfo.pitches_count }}
        </p>
        <p class="text-[11px] mt-2">Pitches</p>
      </div>
    </div>
    <div class="mt-3 border-solid bg-[#E8EAF6] mb-4 h-px" />
    <div class="flex justify-left">
      <el-bottom
        class="bg-[#DE1C7D] text-xs text-white px-[12px] py-[8px] rounded-[10px]"
      >
        Aplicar a vacante
      </el-bottom>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { JobData } from "./DataEmploye";
@Component
export default class CardCarousel extends Vue {
  @Prop() dataInfo!: JobData;
}
</script>
