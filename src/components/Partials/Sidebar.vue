<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
// console.log(route);

const sidebarMenus = ref([
  {
    name: "Applications",
    menuItems: [
      { label: "Dashboard", icon: "ri-dashboard-line", path: "/" },
      { label: "Products", icon: "ri-shopping-bag-line", path: "/products" },
      { label: "Profile", icon: "ri-line-chart-line", path: "/profile" },
      { label: "Table", icon: "ri-calendar-schedule-line", path: "/table" },
      { label: "Team", icon: "ri-secure-payment-line", path: "/team" },
      { label: "Settings", icon: "ri-bar-chart-box-line", path: "/settings" },
    ],
  },
  {
    name: "Components",
    menuItems: [{ label: "Icons", icon: "ri-remixicon-line", path: "/icons" }],
  },
  {
    name: "Pages",
    menuItems: [
      {
        label: "Authentication",
        icon: "ri-lock-line",
        path: "#",
        submenu: true,
        children: [
          { label: "Login", path: "/login" },
          { label: "Register", path: "/register" },
          { label: "Forget Password", path: "/forget-password" },
        ],
      },
    ],
  },
]);
</script>

<template>
  <aside
    class="absolute left-0 top-0 z-50 h-screen w-64 flex-col overflow-y-hidden border-r bg-gray-50 border-gray-200 hidden lg:flex"
  >
    <div class="py-4">
      <div class="px-7">
        <RouterLink to="/">
          <img
            src="https://ticket.jatri.co/_nuxt/img/jatri-logo.09f7d45.svg"
            alt="w-28"
          />
        </RouterLink>
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
      <nav class="">
        <ul
          v-for="(menus, index) in sidebarMenus"
          :key="index"
          class="flex flex-col gap-y-2"
        >
          <h3 class="text-sm font-medium text-gray-400 px-5 mt-5">
            {{ menus.name }}
          </h3>
          <li v-for="(item, key) in menus?.menuItems" :key="key">
            <RouterLink
              :to="item.path"
              class="flex items-center justify-between py-2 text-gray-700 hover:text-indigo-600 group hover:bg-indigo-100 px-7"
              :class="item.label === route.meta.title ? 'bg-indigo-100' : ''"
            >
              <div class="flex items-center gap-x-2">
                <span
                  class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
                  :class="item.label === route.meta.title ? 'scale-y-100' : ''"
                ></span>
                <i :class="`${item.icon} ri-xl`"></i>
                <span>{{ item.label }}</span>
              </div>
              <i
                v-if="item && item?.submenu"
                class="ri-arrow-down-s-line ri-xl"
              ></i>
            </RouterLink>

            <div v-if="item?.submenu" class="pt-1 pl-10">
              <ul
                class="flex flex-col pl-1 text-gray-500 border-l border-gray-400"
              >
                <li v-for="(submenu, key) in item?.children" :key="key">
                  <RouterLink
                    :to="submenu.path"
                    class="inline-block w-full px-4 py-2 text-sm hover:text-indigo-600"
                  >
                    {{ submenu.label }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
