<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
import BarChart from "@/components/Charts/BarChart.vue";
import PieChart from "@/components/Charts/PieChart.vue"; 
import PolarChart from "@/components/Charts/PolarChart.vue";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Dashboard']"/>

    <!-- Top Analytics Start -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <!-- Card -->
      <div class="card p-8">
        <div class="space-y-2">
          <i class="ri-eye-line ri-3x text-indigo-600 dark:text-indigo-400"></i>
          <h2 class="text-xl font-bold dark:text-gray-50">$3.555K</h2>
          <div class="flex items-center justify-between text-sm">
            <p class="dark:text-gray-400">Total Views</p>
            <div class="flex text-green-400 dark:text-green-500">
              <p>0.43%</p>
              <i class="ri-arrow-up-line"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Card -->
      <div class="card p-8">
        <div class="space-y-2">
          <i class="ri-shopping-cart-line ri-3x text-indigo-600 dark:text-indigo-400"></i>
          <h2 class="text-xl font-bold dark:text-gray-50">$551K</h2>
          <div class="flex items-center justify-between text-sm">
            <p class="dark:text-gray-400">Total Profits</p>
            <div class="flex text-green-400 dark:text-green-500">
              <p>12.75%</p>
              <i class="ri-arrow-up-line"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Card -->
      <div class="card p-8">
        <div class="space-y-2">
          <i class="ri-shopping-bag-4-line ri-3x text-indigo-600 dark:text-indigo-400"></i>
          <h2 class="text-xl font-bold dark:text-gray-50">1600</h2>
          <div class="flex items-center justify-between text-sm">
            <p class="dark:text-gray-400">Total Products</p>
            <div class="flex text-red-400 dark:text-red-500">
              <p>0.43%</p>
              <i class="ri-arrow-down-line"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Card -->
      <div class="card p-8">
        <div class="space-y-2">
          <i class="ri-team-line ri-3x text-indigo-600 dark:text-indigo-400"></i>
          <h2 class="text-xl font-bold dark:text-gray-50">51.4K</h2>
          <div class="flex items-center justify-between text-sm">
            <p class="dark:text-gray-400">Total Users</p>
            <div class="flex text-green-400 dark:text-green-500">
              <p>5.12%</p>
              <i class="ri-arrow-up-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Top Analytics Ends /.-->

    <div class="grid grid-cols-1 gap-10 mt-8">
      <div>
        <!-- Bar chart -->
        <BarChart />
      </div> 
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
      <div>
        <!-- Pie chart -->
        <PieChart />
      </div>
      <div>
        <!-- Polar chart -->
        <PolarChart />
      </div>
    </div>

    <!-- Bottom Table Start -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
      <!-- Card -->
      <div class="card col-span-3 lg:col-span-2 p-5">
        <div class="mb-4">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-50">Top Vendors</h2>
        </div>
        <!-- Table -->
        <div>
          <div class="overflow-x-auto">
            <table
              class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200"
            >
              <thead
                class="text-xs text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-neutral-500 uppercase"
              >
                <tr class="border-b dark:border-neutral-900">
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Revenues</th>
                  <th scope="col" class="px-6 py-3">Sales</th>
                  <th scope="col" class="px-6 py-3">Conversion</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white dark:bg-neutral-700 border-b dark:border-neutral-900"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple
                  </th>
                  <td class="px-6 py-4 text-green-400">3.5K</td>
                  <td class="px-6 py-4">580</td>
                  <td class="px-6 py-4 text-indigo-400">3.2%</td>
                </tr>
                <tr
                  class="bg-white dark:bg-neutral-700 border-b dark:border-neutral-900"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft
                  </th>
                  <td class="px-6 py-4 text-green-400">4.8K</td>
                  <td class="px-6 py-4">1120</td>
                  <td class="px-6 py-4 text-indigo-400">4.2%</td>
                </tr>
                <tr class="bg-white dark:bg-neutral-700 border-b dark:border-neutral-900">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Walton
                  </th>
                  <td class="px-6 py-4 text-green-400">1.8K</td>
                  <td class="px-6 py-4">370</td>
                  <td class="px-6 py-4 text-indigo-400">1.2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Card -->
      <div class="card col-span-3 lg:col-span-1 p-5">
        <div class="mb-4">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-50">Top Products</h2>
        </div>
        <!-- Table -->
        <div>
          <div class="overflow-x-auto">
            <table
              class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200"
            >
              <thead
                class="text-xs text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-neutral-500 uppercase"
              >
                <tr> 
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Category</th>
                  <th scope="col" class="px-6 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white dark:bg-neutral-700 border-b dark:border-neutral-900"
                > 
                  <td class="px-6 py-4">I phone 15 pro</td>
                  <td class="px-6 py-4">Mobile</td>
                  <td class="px-6 py-4">$1299</td>
                </tr>
                <tr
                  class="bg-white dark:bg-neutral-700 border-b dark:border-neutral-900"
                > 
                  <td class="px-6 py-4">Cannon 50D</td>
                  <td class="px-6 py-4">Camera</td>
                  <td class="px-6 py-4">$999</td>
                </tr>
                <tr class="bg-white dark:bg-neutral-700 border-b dark:border-neutral-900"> 
                  <td class="px-6 py-4">Haier AC 1.5 ton</td>
                  <td class="px-6 py-4">Electronics</td>
                  <td class="px-6 py-4">$99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Table Ends /.-->
  </MainLayout>
</template>
