<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();
</script>

<template>
  <li>
    <a
      v-show="!themeStore.themeMode"
      @click="themeStore.toggleDarkMode"
      href="#"
      class="transition ease-in-out"
    >
      <i class="ri-sun-line ri-lg"></i>
    </a>
    <a
      v-show="themeStore.themeMode"
      @click="themeStore.toggleDarkMode"
      href="#"
      class="transition ease-out"
    >
      <i class="ri-moon-fill ri-lg"></i>
    </a>
  </li>
</template>
