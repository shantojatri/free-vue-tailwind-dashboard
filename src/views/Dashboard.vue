<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <div class="flex justify-between items-center bg-slate-50 my-5 p-4">
      <h2 class="text-md">Dashboard</h2>
      <ul class="flex text-sm">
        <i class="ri-home-4-line mr-1"></i>
        <li>Home</li>
        <i class="ri-arrow-right-s-line mx-1"></i>
        <li>
          <a href="#" class="text-indigo-600">
            Dashboard
          </a>
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <!-- Card -->
      <div class="card p-8">
        <div  class="space-y-2">
          <i class="ri-eye-line ri-3x"></i>
          <h2 class="text-xl font-bold">$3.555K</h2>
          <div class="flex items-center justify-between text-sm">
            <p>Total Views</p>
            <div class="flex text-green-400">
              <p>0.43%</p>
              <i class="ri-arrow-up-line"></i>
            </div>
          </div>
        </div>
      </div> 

      <!-- Card -->
      <div class="card p-8">
        <div  class="space-y-2">
          <i class="ri-shopping-cart-line ri-3x"></i>
          <h2 class="text-xl font-bold">$551K</h2>
          <div class="flex items-center justify-between text-sm">
            <p>Total Profits</p>
            <div class="flex text-green-400">
              <p>12.75%</p>
              <i class="ri-arrow-up-line"></i>
            </div>
          </div>
        </div>
      </div> 

      <!-- Card -->
      <div class="card p-8">
        <div  class="space-y-2"> 
          <i class="ri-shopping-bag-4-line ri-3x"></i> 
          <h2 class="text-xl font-bold">1600</h2>
          <div class="flex items-center justify-between text-sm">
            <p>Total Products</p>
            <div class="flex text-red-400">
              <p>0.43%</p>
              <i class="ri-arrow-down-line"></i> 
            </div>
          </div>
        </div>
      </div> 

      <!-- Card -->
      <div class="card p-8">
        <div  class="space-y-2">
          <i class="ri-team-line ri-3x"></i> 
          <h2 class="text-xl font-bold">51.4K</h2>
          <div class="flex items-center justify-between text-sm">
            <p>Total Users</p>
            <div class="flex text-green-400">
              <p>5.12%</p>
              <i class="ri-arrow-up-line"></i>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </MainLayout>
</template>
