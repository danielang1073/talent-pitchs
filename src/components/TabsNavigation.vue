<template>
  <div class="pr-10 mt-8">
    <el-tabs v-model="activeName" @tab-click="navigate">
      <el-tab-pane
        :disabled="isTabDisabled('perfil')"
        label="Perfil"
        name="perfil"
      />
      <el-tab-pane
        :disabled="isTabDisabled('vacantes')"
        label="Vacantes"
        name="vacantes"
      />
      <el-tab-pane
        :disabled="isTabDisabled('listas')"
        label="Listas"
        name="listas"
      />
    </el-tabs>

    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ProfileTab from "./ProfileTab.vue";
@Component({
  components: {
    ProfileTab,
  },
})
export default class TabsNavigation extends Vue {
  activeName!: string;

  data() {
    return {
      activeName: this.$router.currentRoute.path.split("/")[1],
    };
  }

  handleClick(tab: string, event: any) {
    console.log(tab, event);
  }
  navigate(tab: { name: string }) {
    console.log(tab);
    this.$router.push(`/${tab.name}`);
  }
  isTabDisabled(tabName: string): boolean {
    return this.$router.currentRoute.path === `/${tabName}`;
  }
}
</script>

<style lang="postcss">
.el-tabs__item.is-active {
  @apply text-[#de1c7d] !important;
  @apply font-bold !important;
  letter-spacing: 1px !important;
  @apply text-sm !important;
}
.el-tabs__active-bar {
  @apply bg-[#de1c7d] !important;
  @apply min-w-[58px] !important;
  @apply text-base !important;
}
.el-tabs__item {
  @apply text-[#9fa8da] !important;
  @apply font-bold !important;
  letter-spacing: 1px !important;
  line-height: 30px;
}
</style>
