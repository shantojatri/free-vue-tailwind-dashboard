<script setup lang="ts">
defineProps(["headers", "products"])
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium">Bordered Table</h3>
      <p class="text-sm font-regular">
        Example of a bordered table
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 border-collapse border border-gray-400">
        <thead class="text-xs text-gray-900 uppercase">
          <tr class="bg-white">
            <th v-for="(header, index) in headers" :key="index" scope="col" class="px-6 py-3 border border-gray-300">{{ header }}</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, key) in products" :key="key" class="bg-white">
            <td class="px-6 py-4 border border-gray-300">{{ product.id }}</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-gray-300"
            >
              {{ product.name }}
            </th>
            <td class="px-6 py-4 border border-gray-300">{{ product.color }}</td>
            <td class="px-6 py-4 border border-gray-300">{{ product.category }}</td>
            <td class="px-6 py-4 border border-gray-300">{{ product.qty }}</td>
            <td class="px-6 py-4 border border-gray-300">${{ product.price }}</td>
          </tr> 
        </tbody>
      </table>
    </div>
  </div>
</template>
