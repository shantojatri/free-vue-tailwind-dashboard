<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { RouterLink, useRoute } from "vue-router";
import { useSidebarStore } from "@/stores/sidebar";

import Tadmin from "../../assets/tadmin.png";

const target = ref(null);
const sidebarStore = useSidebarStore();

onClickOutside(target, () => {
  sidebarStore.isSidebarOpenMobile = false;
});

interface SidebarItem {
  label: string;
}

const sidebarMenus = ref([
  {
    name: "Applications",
    menuItems: [
      { label: "Dashboard", icon: "ri-dashboard-line", path: "/" },
      { label: "Tables", icon: "ri-table-line", path: "/tables" },
    ],
  },
  {
    name: "Components",
    menuItems: [
      {
        label: "Common",
        icon: "ri-box-3-line",
        path: "#",
        submenu: true,
        children: [
          { label: "Alert", path: "#" },
          { label: "Pagination", path: "/common/pagination" },
          { label: "Spinner", path: "#" },
          { label: "Toast", path: "#" },
          { label: "Tooltip", path: "#" },
        ],
      },
      {
        label: "Forms",
        icon: "ri-file-add-line",
        path: "#",
        submenu: true,
        children: [
          { label: "Input", path: "#" },
          { label: "Textarea", path: "#" },
          { label: "Radio", path: "#" },
          { label: "Checkbox", path: "#" },
          { label: "Toggle", path: "#" },
          { label: "Select", path: "#" },
          { label: "Form Group", path: "#" },
        ],
      },
      { label: "Charts", icon: "ri-pie-chart-line", path: "/charts" },
      { label: "Icons", icon: "ri-remixicon-line", path: "/icons" },
      { label: "Typography", icon: "ri-font-size-2", path: "/typography" },
    ],
  },
  {
    name: "Pages",
    menuItems: [
      {
        label: "Users",
        icon: "ri-user-4-line",
        path: "#",
        submenu: true,
        children: [
          { label: "Profile", path: "/profile" },
          { label: "Update Password", path: "/update-password" },
        ],
      },
      {
        label: "Others",
        icon: "ri-settings-5-line",
        path: "#",
        submenu: true,
        children: [
          { label: "Settings", path: "/settings" },
          { label: "Teams", path: "/teams" },
          { label: "Error 404", path: "/404" },
          { label: "Error 500", path: "/500" },
        ],
      },
      {
        label: "Authentication",
        icon: "ri-lock-line",
        path: "#",
        submenu: true,
        children: [
          { label: "Login", path: "/login" },
          { label: "Register", path: "/register" },
          { label: "Reset Password", path: "/reset-password" },
        ],
      },
    ],
  },
]);

const handleParentClick = (item: any) => {
  const pageName = sidebarStore.page === item.label ? "" : item.label;
  sidebarStore.page = pageName;

  if (item.children) {
    return item.children.some(
      (child: SidebarItem) => sidebarStore.activatedMenu === child.label
    );
  }
};

const handleChildClick = (submenu: any) => {
  const pageName =
    sidebarStore.activatedMenu === submenu.label ? "" : submenu.label;
  sidebarStore.activatedMenu = pageName;
};
</script>

<template>
  <aside
    class="absolute left-0 top-0 z-50 h-screen w-64 flex-col overflow-y-hidden border-r bg-gray-50 dark:bg-neutral-600 border-gray-200 dark:border-neutral-900 hidden lg:flex"
    ref="target"
  >
    <div class="py-4">
      <div class="px-7">
        <RouterLink to="/">
          <img
            class="w-[50%]"
            :src="Tadmin"
            alt="t-admin"
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
      <nav>
        <ul
          v-for="menus in sidebarMenus"
          :key="menus.name"
          class="flex flex-col gap-y-2"
        >
          <!-- Group Label -->
          <h3
            class="text-sm font-medium text-gray-400 dark:text-indigo-300 px-5 mt-5"
          >
            {{ menus.name }}
          </h3>

          <!-- Menu Item -->
          <li v-for="(item, key) in menus?.menuItems" :key="key">
            <RouterLink
              :to="item.path"
              class="flex items-center justify-between text-gray-700 dark:text-gray-50 hover:text-indigo-600 hover:dark:text-gray-900 group hover:bg-indigo-100 px-7 py-2"
              @click.prevent="handleParentClick(item)"
              :class="{
                'bg-indigo-100 dark:bg-indigo-200 dark:text-gray-900':
                  sidebarStore.page === item.label,
              }"
            >
              <div class="flex items-center gap-x-2">
                <span
                  class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
                  :class="
                    sidebarStore.page === item.label
                      ? 'scale-y-100'
                      : 'scale-y-0'
                  "
                ></span>
                <i :class="`${item.icon} ri-xl`"></i>
                <span>{{ item.label }}</span>
              </div>
              <i
                v-if="item?.submenu"
                class="ri-arrow-down-s-line ri-xl"
                :class="{ 'rotate-180': sidebarStore.page === item.label }"
              ></i>
            </RouterLink>

            <!-- Dropdown Item -->
            <div
              v-if="item?.submenu"
              class="pt-1 pl-10 translate transform overflow-hidden"
              v-show="sidebarStore.page === item.label"
            >
              <ul
                class="flex flex-col pl-1 text-gray-500 dark:text-gray-50 border-l border-gray-400 dark:border-gray-100"
              >
                <li v-for="(submenu, key) in item?.children" :key="key">
                  <RouterLink
                    :to="submenu.path"
                    class="inline-block w-full px-4 py-2 text-sm hover:text-indigo-600 dark:hover:text-gray-50"
                    @click.prevent="handleChildClick(submenu)"
                    :class="{
                      'text-indigo-600 dark:text-indigo-400':
                        submenu.label === sidebarStore.activatedMenu,
                    }"
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
