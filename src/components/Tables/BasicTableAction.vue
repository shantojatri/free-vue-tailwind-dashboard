<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const target = ref(null);
const dropIndex = ref(null);
const dropdownStatus = ref(false);

onClickOutside(target, () => {
  dropdownStatus.value = false;
});

const dropDownHandler = (index) => {
  dropdownStatus.value = true;
  dropIndex.value = index;
}
const tableHeaders = ref([
  "ID",
  "Product Name",
  "Color",
  "Category",
  "Qty",
  "Price",
  "Action",
]);

const products = ref([
  {
    id: "01",
    name: 'Apple MacBook 17"',
    color: "White",
    category: "Laptop",
    qty: 100,
    price: 2999,
  },
  {
    id: "02",
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    qty: 25,
    price: 1999,
  },
  // {
  //   id: "03",
  //   name: "Google Pixel Phone",
  //   color: "Gray",
  //   category: "Phone",
  //   qty: 50,
  //   price: 799,
  // },
  // {
  //   id: "04",
  //   name: "Magic Mouse 2",
  //   color: "Black",
  //   category: "Accessories",
  //   qty: 100,
  //   price: 99,
  // },
]);
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
        Basic Table
      </h3>
      <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
        Example of a basic table
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-200">
        <thead
          class="text-xs text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-neutral-500 uppercase"
        >
          <tr class="border-b dark:border-neutral-900">
            <th
              v-for="(header, index) in tableHeaders"
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
            <td class="px-6 py-4">
              <a class="flex justify-start" href="#" @click.prevent="dropDownHandler(key)" ref="target">
                <i class="ri-more-fill ri-lg"></i>
              </a>
              <!-- Dropdown  -->
              <div
                v-show="dropdownStatus && key=== dropIndex"
                class="absolute -right-[-5rem] mt-[-135px] flex h-[7.5rem] w-[150px] flex-col rounded-sm border border-stroke dark:border-neutral-900 bg-white dark:bg-neutral-600"
              >
                <ul class="flex h-auto flex-col overflow-y-auto py-1">
                  <!-- Messages -->
                  <li>
                    <a
                      href="#"
                      class="flex gap-2 px-5 py-2 items-center hover:text-indigo-600 hover:hover:text-indigo-400"
                    >
                      <i class="ri-user-4-line ri-lg"></i>
                      <h5 class="text-md font-normal">My Profile</h5>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex gap-2 px-5 py-2 items-center hover:text-indigo-600 hover:hover:text-indigo-400"
                    >
                      <i class="ri-lock-2-line ri-lg"></i>
                      <h5 class="text-md font-normal">Password</h5>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex gap-2 px-5 py-2 items-center hover:text-indigo-600 hover:hover:text-indigo-400"
                    >
                      <i class="ri-settings-5-line ri-lg"></i>
                      <h5 class="text-md font-normal">Settings</h5>
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
