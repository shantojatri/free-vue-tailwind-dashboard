<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "../components/Partials/Sidebar.vue";
import Header from "../components/Partials/Header.vue";
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar Start-->
    <Sidebar />
    <!-- Sidebar Ends /.-->

    <!-- Content Start-->
    <div
      class="relative overflow-y-auto overflow-x-hidden w-full lg:w-[calc(100%-16rem)] ml-0 lg:ml-[16rem] pb-7 md:pb-0"
    >
      <!-- Header Start-->
      <Header />
      <!-- Header Ends /.-->
      <main>
        <div class="mx-auto w-full">
          <!-- Content Start-->
          <div class="py-4 px-8">
            <slot></slot>
          </div>
          <!-- Content Ends /.-->
        </div>
      </main>
    </div>
    <!-- Content Ends /.-->
  </div>
</template>
