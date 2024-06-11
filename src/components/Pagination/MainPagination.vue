<script setup lang="ts">
defineProps({
  isLarge: {
    type: Boolean,
    default: false,
  },
  isBoxed: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <nav>
    <ul
      class="inline-flex -space-x-px"
      :class="isLarge ? 'text-base h-10' : 'text-sm'"
    >
      <li>
        <a
          href="#"
          class="flex items-center justify-center ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-neutral-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :class="[
            isLarge ? 'px-4 h-10' : 'px-3 h-8',
            isBoxed ? '' : 'rounded-s-md',
          ]"
        >
          <slot name="previous" />
        </a>
      </li>
      <li v-for="(item, index) in 5" :key="index">
        <a
          href="#"
          class="flex items-center justify-center leading-tight"
          :class="[
            index === 2
              ? 'text-indigo-700 border border-gray-300 bg-indigo-100 hover:bg-indigo-200 hover:text-indigo-700 dark:border-indigo-600 dark:bg-indigo-600 dark:text-gray-50 hover:dark:bg-indigo-500'
              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-neutral-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
            isLarge ? 'px-4 h-10' : 'px-3 h-8',
          ]"
        >
          {{ item }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-neutral-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :class="[
            isLarge ? 'px-4 h-10' : 'px-3 h-8',
            isBoxed ? '' : 'rounded-e-md',
          ]"
        >
          <slot name="next" />
        </a>
      </li>
    </ul>
  </nav>
</template>
