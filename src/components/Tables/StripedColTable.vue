<script setup lang="ts">
defineProps(["headers", "products"]);
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
        Striped Column Table
      </h3>
      <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
        Example of a Striped col table
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-200">
        <thead
          class="text-xs text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-neutral-700 uppercase"
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
            class="bg-white dark:bg-neutral-400 border-b dark:border-neutral-900"
          >
            <td class="px-6 py-4 bg-gray-100 dark:bg-neutral-700">
              {{ product.id }}
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              {{ product.name }}
            </th>
            <td class="px-6 py-4 bg-gray-100 dark:bg-neutral-700">
              {{ product.color }}
            </td>
            <td class="px-6 py-4">{{ product.category }}</td>
            <td class="px-6 py-4 bg-gray-100 dark:bg-neutral-700">
              {{ product.qty }}
            </td>
            <td class="px-6 py-4">${{ product.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
