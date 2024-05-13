import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useThemeStore = defineStore("themeMode", () => {
  const themeMode = useStorage("themeMode", ref(false));
  document.documentElement.classList.toggle("dark", themeMode.value);

  function toggleDarkMode() {
    themeMode.value = !themeMode.value;
    document.documentElement.classList.toggle("dark", themeMode.value);
  }

  return { themeMode, toggleDarkMode };
});
