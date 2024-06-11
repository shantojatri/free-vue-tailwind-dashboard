<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
import MainPagination from "@/components/Pagination/MainPagination.vue"; 
import ShowingEntries from "@/components/Pagination/ShowingEntries.vue"; 
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Common', 'Pagination']" />

    <!-- Basic pagination -->
    <div class="card p-8">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Basic pagination
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of a basic pagination
        </p>
      </div>

      <div class="grid place-items-center">
        <!-- Small pagination -->
        <MainPagination class="mb-5">
          <template #previous>
            Previous
          </template>

          <template #next>
            Next
          </template>
        </MainPagination>

        <!-- large pagination -->
        <MainPagination :isLarge="true">
          <template #previous>
            Previous
          </template>

          <template #next>
            Next
          </template>
        </MainPagination>
      </div>
    </div>

    <!-- Pagination with icon -->
    <div class="card p-8 mt-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Pagination with icon
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of a pagination with icon
        </p>
      </div>

      <div class="grid place-items-center">
        <!-- Small pagination -->
        <MainPagination class="mb-5">
          <template #previous>
            <i class="ri-arrow-left-s-line ri-lg"></i>
          </template>

          <template #next>
            <i class="ri-arrow-right-s-line ri-lg"></i>
          </template>
        </MainPagination>


        <!-- large pagination -->
        <MainPagination :isLarge="true">
          <template #previous>
            <i class="ri-arrow-left-s-line ri-lg"></i>
          </template>

          <template #next>
            <i class="ri-arrow-right-s-line ri-lg"></i>
          </template>
        </MainPagination> 
      </div>
    </div>

    <!-- Table data pagination with icon -->
    <div class="card p-8 mt-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Table data pagination with icon
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of a table data pagination with icon
        </p>
      </div>


      <div class="flex items-center justify-between mb-5">
        <!-- Showing entries text -->
        <ShowingEntries/> 

        <!-- Small pagination -->
        <MainPagination class="mb-5">
          <template #previous>
            <i class="ri-arrow-left-s-line ri-lg"></i>
          </template>

          <template #next>
            <i class="ri-arrow-right-s-line ri-lg"></i>
          </template>
        </MainPagination>
      </div>

      <div class="flex items-center justify-between mb-5">
        <!-- Showing entries text -->
        <ShowingEntries :isLarge="true"/> 

        <!-- large pagination -->
        <MainPagination :isLarge="true">
          <template #previous>
            <i class="ri-arrow-left-s-line ri-lg"></i>
          </template>

          <template #next>
            <i class="ri-arrow-right-s-line ri-lg"></i>
          </template>
        </MainPagination> 
      </div>
    </div>

    <!-- Table data pagination box style with icon -->
    <div class="card p-8 mt-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Table data pagination box style with icon
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of a table data pagination box style with icon
        </p>
      </div>

      <div class="flex items-center justify-between mb-5">
        <!-- Showing entries text -->
        <ShowingEntries/> 

        <!-- Small pagination -->
        <MainPagination :isBoxed="true" class="mb-5">
          <template #previous>
            <i class="ri-arrow-left-s-line ri-lg"></i>
          </template>

          <template #next>
            <i class="ri-arrow-right-s-line ri-lg"></i>
          </template>
        </MainPagination>
      </div>

      <!-- large pagination -->
      <div class="flex items-center justify-between mb-5">
        <!-- Showing entries text -->
        <ShowingEntries :isLarge="true"/> 

        <!-- large pagination -->
        <MainPagination :isLarge="true" :isBoxed="true">
          <template #previous>
            <i class="ri-arrow-left-s-line ri-lg"></i>
          </template>

          <template #next>
            <i class="ri-arrow-right-s-line ri-lg"></i>
          </template>
        </MainPagination>
      </div>
    </div>
  </MainLayout>
</template>
