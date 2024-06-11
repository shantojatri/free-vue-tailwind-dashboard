<script setup lang="ts">
import { reactive } from "vue"; 
defineProps({
  isLarge: {
    type: Boolean,
    default: false,
  } 
});

const meta = reactive({
    from: 1,
    to: 10,
    total: 100    
});
</script>

<template>
  <span class="text-gray-700 dark:text-gray-300" :class="isLarge ? 'text-md': 'text-sm'">
    Showing
    <span class="font-semibold text-gray-900 dark:text-white">{{ meta.from }}</span> to
    <span class="font-semibold text-gray-900 dark:text-white">{{ meta.to }}</span> of
    <span class="font-semibold text-gray-900 dark:text-white">{{ meta.total }}</span>
    Entries
  </span>
</template>
