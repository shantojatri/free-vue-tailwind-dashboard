<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const sidebarMenus = ref([
  [
    { name: "Dashboard", icon: "ri-dashboard-line", url: "/" },
    { name: "Products", icon: "ri-shopping-bag-line", url: "/products" },
    { name: "Profile", icon: "ri-line-chart-line", url: "/profile" },
    { name: "Table", icon: "ri-calendar-schedule-line", url: "/table" },
    { name: "Team", icon: "ri-secure-payment-line", url: "/team" },
    { name: "Settings", icon: "ri-bar-chart-box-line", url: "/settings" },
  ],
  [
    { name: "Help", icon: "ri-questionnaire-line", url: "#" },
    { name: "Authentication", icon: "ri-logout-circle-r-line", url: "#" },
  ],
]);

const logoutHandler = () => {
  console.log("Logout");
};
</script>

<template>
  <aside
    class="absolute left-0 top-0 z-50 h-screen w-64 flex-col overflow-y-hidden border-r bg-gray-50 border-gray-200 hidden lg:flex"
  >
    <div class="py-4 px-10">
      <div>
        <img
          src="https://ticket.jatri.co/_nuxt/img/jatri-logo.09f7d45.svg"
          alt="w-28"
        />
      </div>

      <!-- Search Bar -->
      <div class="flex md:hidden pt-5">
        <div class="relative w-[20rem]">
          <div class="absolute inset-y-0 left-0 flex items-center pl-2">
            <i class="ri-search-line ri-lg pr-2 text-gray-400"></i>
          </div>
          <input
            type="text"
            class="w-full pl-8 pr-4 py-2 bg-gray-200 text-gray-900 font-light placeholder:text-gray-400 border border-gray-400 rounded focus:outline-none focus:border-gray-900 focus:ring-0"
            placeholder="search..."
          />
        </div>
      </div>

      <!-- Main Menu -->
      <nav class="pt-5 md:pt-8">
        <ul
          v-for="(group, index) in sidebarMenus"
          :key="index"
          class="flex flex-col gap-y-6 py-5"
        >
          <li v-for="(item, key) in group" :key="key">
            <RouterLink
              :to="item.url"
              class="flex gap-x-3 items-center py-1 text-gray-700 hover:text-indigo-600 group"
              v-if="item.name !== 'Logout'"
            >
              <span
                class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
              ></span>
              <i :class="`${item.icon} ri-xl`"></i>
              <span>{{ item.name }}</span>
            </RouterLink>

            <button
              v-else
              class="flex gap-x-3 items-center py-1 text-gray-700 hover:text-indigo-600 group"
              @click="logoutHandler"
            >
              <span
                class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
              ></span>
              <i :class="`${item.icon} ri-xl`"></i>
              <span>{{ item.name }}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
