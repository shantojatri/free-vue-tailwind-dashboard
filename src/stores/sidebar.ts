import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", () => {
  const isSidebarOpenMobile = ref(false);
  const activatedMenu = useStorage("selected", ref("dashboard"));
  const page = useStorage("page", ref("Dashboard"));

  function toggleSidebarMobile() {
    isSidebarOpenMobile.value = !isSidebarOpenMobile.value;
  }

  return { isSidebarOpenMobile, toggleSidebarMobile, activatedMenu, page };
});
