<script setup lang="ts">
defineProps(["headers", "products"])
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium">Striped Row Table</h3>
      <p class="text-sm font-regular">
        Example of a Striped row table 
      </p>
    </div>

    <div class="overflow-x-auto shadow-md">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-900 uppercase bg-gray-200">
          <tr>
            <th v-for="(header, index) in headers" :key="index" scope="col" class="px-6 py-3">{{ header }}</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, key) in products" :key="key" class="odd:bg-white even:bg-gray-100">
            <td class="px-6 py-4">{{ product.id }}</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ product.name }}
            </th>
            <td class="px-6 py-4">{{ product.color }}</td>
            <td class="px-6 py-4">{{ product.category }}</td>
            <td class="px-6 py-4">{{ product.qty }}</td>
            <td class="px-6 py-4">${{ product.price }}</td>
          </tr> 
        </tbody>
      </table>
    </div>
  </div>
</template>
