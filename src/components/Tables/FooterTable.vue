<script setup lang="ts">
defineProps(["headers", "products"])
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium">Table with Footer</h3>
      <p class="text-sm font-regular">
        Example of a table with footer
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-900 uppercase bg-gray-200">
          <tr>
            <th v-for="(header, index) in headers" :key="index" scope="col" class="px-6 py-3">{{ header }}</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, key) in products" :key="key" class="bg-white border-b">
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
        <tfoot>
            <tr class="font-semibold text-gray-900 bg-white border-b">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">4</td>
                <td class="px-6 py-3"></td>
                <td class="px-6 py-3"></td>
                <td class="px-6 py-3">275</td>
                <td class="px-6 py-3">$5,896</td>
            </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
