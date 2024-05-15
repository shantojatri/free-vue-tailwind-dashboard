<script setup lang="ts">
defineProps(["headers", "products"]);
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
        Table with Footer
      </h3>
      <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
        Example of a table with footer
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
            class="bg-white dark:bg-neutral-700 border-b dark:border-neutral-900"
          >
            <td class="px-6 py-4">{{ product.id }}</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
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
          <tr
            class="font-semibold text-gray-900 dark:text-white bg-white dark:bg-neutral-700 border-b dark:border-neutral-900"
          >
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
