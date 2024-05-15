<script setup lang="ts">
defineProps(["headers", "products"]);
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
        Bordered Table
      </h3>
      <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
        Example of a bordered table
      </p>
    </div>

    <div class="overflow-x-auto">
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-200 border-collapse border border-gray-400"
      >
        <thead class="text-xs text-gray-900 dark:text-gray-50 uppercase">
          <tr class="bg-white dark:bg-neutral-700">
            <th
              v-for="(header, index) in headers"
              :key="index"
              scope="col"
              class="px-6 py-3 border border-gray-300 dark:border-neutral-900"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, key) in products"
            :key="key"
            class="bg-white dark:bg-neutral-700"
          >
            <td
              class="px-6 py-4 border border-gray-300 dark:border-neutral-900"
            >
              {{ product.id }}
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-gray-50 whitespace-nowrap border border-gray-300 dark:border-neutral-900"
            >
              {{ product.name }}
            </th>
            <td
              class="px-6 py-4 border border-gray-300 dark:border-neutral-900"
            >
              {{ product.color }}
            </td>
            <td
              class="px-6 py-4 border border-gray-300 dark:border-neutral-900"
            >
              {{ product.category }}
            </td>
            <td
              class="px-6 py-4 border border-gray-300 dark:border-neutral-900"
            >
              {{ product.qty }}
            </td>
            <td
              class="px-6 py-4 border border-gray-300 dark:border-neutral-900"
            >
              ${{ product.price }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
