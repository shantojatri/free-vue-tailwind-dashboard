<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <MainLayout>
    <div class="card p-8">
      <div class="space-y-2">
        <div class="min-h-[75vh] flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-9xl font-bold text-indigo-700 dark:text-indigo-500">
              500
            </h1>
            <h4
              class="text-lg font-semibold text-gray-700 dark:text-gray-50 mb-3"
            >
              Oops! Server Error!
            </h4>
            <p
              class="text-sm font-medium text-gray-400 dark:text-gray-200 mb-10"
            >
              Something went wrong
            </p>
            <RouterLink
              to="/"
              class="m-w-md text-white bg-indigo-700 dark:bg-indigo-500 hover:bg-indigo-800 hover:dark:bg-indigo-600 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Back to Home
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
