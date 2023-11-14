<template>
  <div>
    <AppHeader />
    <BodyImgComponent />
    <el-container>
      <el-aside class="container-el-side" width="470px">
        <CardInformationUser />
      </el-aside>
      <el-main
        ><SubHeaderProgress />
        <TabsNavigation />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader.vue";
import BodyImgComponent from "@/components/BodyImgComponent.vue";
import CardInformationUser from "@/components/CardInformationUser.vue";
import SubHeaderProgress from "@/components/SubHeaderProgress.vue"; // @ is an alias to /src
import TabsNavigation from "@/components/TabsNavigation.vue"; // @ is an alias to /src

@Component({
  components: {
    AppHeader,
    BodyImgComponent,
    CardInformationUser,
    SubHeaderProgress,
    TabsNavigation,
  },
})
export default class HomeView extends Vue {}
</script>
<style>
.container-el-side {
  overflow: initial !important;
}
</style>
