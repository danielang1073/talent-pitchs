<template>
  <div>
    <h1 class="text-left tracking-tighter m-0 font-medium text-[#1A237E]">
      Publicadas recientemente
    </h1>
    <el-carousel
      class="bg-white mt-2 border-solid-style"
      indicator-position="outside"
      height="620px"
      type="card"
    >
      <el-carousel-item v-for="item in $store.state.vacancies" :key="item">
        <CardCarousel :dataInfo="item" />
      </el-carousel-item>
    </el-carousel>
    <h1 class="text-left tracking-tighter font-medium text-[#1A237E]">
      Publicadas recientemente
    </h1>
    <el-carousel
      class="bg-white mt-2 border-solid-style"
      indicator-position="outside"
      height="620px"
      type="card"
    >
      <el-carousel-item v-for="item in $store.state.vacancies" :key="item">
        <CardCarousel :dataInfo="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardCarousel from "@/components/CardCarousel.vue";
import axios from "axios";
@Component({
  components: {
    CardCarousel,
  },
})
export default class CarouselComponent extends Vue {
  mounted() {
    this.getVacancy();
  }

  async getVacancy() {
    const response = await axios.get(
      "https://data2.talentpitch.co/api/homeservice/categories/d/challenges/trending_challenges/unique/null?limit=10"
    );
    console.log("Response:", response.data.data);
    this.$store.dispatch("actionChangeVacancies", {
      vacancies: response.data.data,
    });
  }
}
</script>

<style lang="postcss" scope>
.border-solid-style {
  @apply border-solid !important;
  @apply rounded-xl !important;
}
</style>
