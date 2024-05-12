<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "./components/Partials/Sidebar.vue";
import Header from "./components/Partials/Header.vue";
</script>

<template>
  <div
    class="w-full min-h-screen font-poppins text-gray-900 bg-gray-50 relative overflow-hidden"
  >
    <!-- Sidebar Start-->
    <Sidebar />
    <!-- Sidebar Ends /.-->

    <!-- Header Start-->
    <Header />
    <!-- Header Ends /.-->

    <!-- Main Start-->
    <main
      class="w-[calc(100%-16rem)] min-h-screen ml-[16rem] relative overflow-auto z-10"
    >
      <div class="w-full min-h-screen bg-gray-100 absolute mt-[4rem]">
        <!-- Content Start-->
        <div class="m-7">
          <RouterView />
        </div>
        <!-- Content Ends /.-->
      </div>
    </main>
    <!-- Main Ends /.-->
  </div>
</template>
