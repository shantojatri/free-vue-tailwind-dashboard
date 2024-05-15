<script setup lang="ts">
defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <div class="flex justify-between items-center bg-gray-50 dark:bg-neutral-600 p-4 mb-7 rounded-md">
    <h2 class="text-md font-medium dark:text-gray-50">{{ items[items.length - 1] }}</h2>
    <ul class="flex text-sm">
      <i class="ri-home-4-line mr-1 dark:text-gray-50"></i>
      <template v-for="(item, index) in items" :key="index">
        <li>
          <p
            v-if="items.length - 1 !== index"
            class="text-indigo-600 dark:text-gray-50 cursor-pointer"
          >
            {{ item }}
          </p>
          <a v-else href="#" class="text-gray-500 dark:text-gray-400">
            {{ item }}
          </a>
        </li>
        <i
          v-if="items.length - 1 !== index"
          class="ri-arrow-right-s-line mx-1 dark:text-gray-50"
        ></i>
      </template>
    </ul>
  </div>
</template>
