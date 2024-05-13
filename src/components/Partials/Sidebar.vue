<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const sidebarMenus = ref([
  [
    { name: "Dashboard", icon: "ri-dashboard-line", url: "/"},
    { name: "Products", icon: "ri-shopping-bag-line", url: "/products"},
    { name: "Analytics", icon: "ri-line-chart-line", url: "#"},
    { name: "Schedule", icon: "ri-calendar-schedule-line", url: "#" },
    { name: "Payout", icon: "ri-secure-payment-line", url: "#" },
    { name: "Statement", icon: "ri-bar-chart-box-line", url: "#" },
  ],
  [
    { name: "Help", icon: "ri-questionnaire-line", url: "#" },
    { name: "Settings", icon: "ri-settings-5-line", url: "#" },
    { name: "Logout", icon: "ri-logout-circle-r-line"},
  ],
]);

const logoutHandler = () =>{
  console.log("Logout");
}
</script>

<template>
  <aside class="absolute left-0 top-0 z-50 h-screen w-64 flex flex-col overflow-y-hidden border-r border-gray-200">
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
