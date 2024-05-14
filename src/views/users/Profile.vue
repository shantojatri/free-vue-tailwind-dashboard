<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <div class="flex justify-between items-center bg-gray-50 my-5 p-4">
      <h2 class="text-md">Profile</h2>
      <ul class="flex text-sm">
        <i class="ri-home-4-line mr-1"></i>
        <li>Home</li>
        <i class="ri-arrow-right-s-line mx-1"></i>
        <li>
          <a href="#" class="text-indigo-600">
            Profile
          </a>
        </li>
      </ul>
    </div>
  </MainLayout>
</template>
