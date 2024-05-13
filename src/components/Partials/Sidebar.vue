<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const sidebarMenus = ref([
  [
    { name: "Dashboard", icon: "ri-dashboard-line", url: "/"},
    { name: "Products", icon: "ri-shopping-bag-line", url: "/products"},
    { name: "Profile", icon: "ri-line-chart-line", url: "/profile"},
    { name: "Table", icon: "ri-calendar-schedule-line", url: "/table" },
    { name: "Team", icon: "ri-secure-payment-line", url: "/team" },
    { name: "Settings", icon: "ri-bar-chart-box-line", url: "/settings" },
  ],
  [
    { name: "Help", icon: "ri-questionnaire-line", url: "#" },
    { name: "Authentication", icon: "ri-logout-circle-r-line", url: "#" }, 
  ],
]);

const logoutHandler = () =>{
  console.log("Logout");
}
</script>

<template>
  <aside class="absolute left-0 top-0 z-50 h-screen w-64 flex-col overflow-y-hidden border-r bg-gray-50 border-gray-200 hidden lg:flex">
    <div class="py-4 px-10">
      <div>
        <img
          src="https://ticket.jatri.co/_nuxt/img/jatri-logo.09f7d45.svg"
          alt="w-28"
        />
      </div>

      <ul
        v-for="(group, index) in sidebarMenus"
        :key="index"
        class="flex flex-col gap-y-6 pt-10 py-5"
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
    </div>
  </aside>
</template>
