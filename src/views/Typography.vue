<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Typography']" />

    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Typography
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of different font sizes
        </p>
      </div>

      <div class="space-y-2">
        <p class="text-sm">This is sm text</p>
        <p class="text-base">This is base text</p>
        <p class="text-lg">This is lg text</p>
        <p class="text-xl">This is XL text</p>
        <p class="text-2xl">This is 2XL text</p>
        <p class="text-3xl">This is 3XL text</p>
        <p class="text-4xl">This is 4XL text</p>
        <p class="text-5xl">This is 5XL text</p>
      </div>
    </div>

    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Font Weight
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of different font weight
        </p>
      </div>

      <div class="space-y-2">
        <p class="font-light">This is light font</p>
        <p class="font-normal">This is normal font</p>
        <p class="font-medium">This is medium font</p>
        <p class="font-semibold">This is semibold font</p>
        <p class="font-bold">This is bold font</p>
        <p class="font-bold italic">This is bold and italic font</p>
      </div>
    </div>
  </MainLayout>
</template>
