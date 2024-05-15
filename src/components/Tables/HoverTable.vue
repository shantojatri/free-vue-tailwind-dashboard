<script setup lang="ts">
defineProps(["headers", "products"]);
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
        Hover Table
      </h3>
      <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
        Example of a hover table
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-200">
        <thead
          class="text-xs text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-neutral-400 uppercase"
        >
          <tr class="border-b dark:border-neutral-900">
            <th
              v-for="(header, index) in headers"
              :key="index"
              scope="col"
              class="px-6 py-3"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, key) in products"
            :key="key"
            class="bg-white dark:bg-neutral-700 hover:bg-gray-50 hover:dark:dark:bg-neutral-500 border-b dark:border-neutral-900"
          >
            <td class="px-6 py-4">{{ product.id }}</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-gray-50 whitespace-nowrap"
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
