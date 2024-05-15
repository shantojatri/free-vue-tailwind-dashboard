<script setup lang="ts">
import { ref } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
import BasicTable from "@/components/Tables/BasicTable.vue"; 
import BorderTable from "@/components/Tables/BorderTable.vue"; 
import StripedRowTable from "@/components/Tables/StripedRowTable.vue"; 
import StripedColTable from "@/components/Tables/StripedColTable.vue"; 
import HoverTable from "@/components/Tables/HoverTable.vue"; 
import FooterTable from "@/components/Tables/FooterTable.vue"; 

const tableHeaders = ref(['ID', 'Product Name', 'Color', 'Category', 'Qty', 'Price']);

const products = ref([
  {id: '01', name: 'Apple MacBook 17"', color: 'White', category: 'Laptop', qty: 100, price: 2999},
  {id: '02', name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', qty: 25, price: 1999},
  {id: '03', name: 'Google Pixel Phone', color: 'Gray', category: 'Phone', qty: 50, price: 799},
  {id: '04', name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', qty: 100, price: 99},
]);
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Tables']" />

    <div class="space-y-8">
      <!-- Basic Table -->
      <BasicTable :headers="tableHeaders" :products="products"/>

      <!-- Border Table -->
      <BorderTable :headers="tableHeaders" :products="products"/>

      <!-- Stripped Row Table -->
      <StripedRowTable :headers="tableHeaders" :products="products"/>

      <!-- Stripped Col Table -->
      <StripedColTable :headers="tableHeaders" :products="products"/>

      <!-- Stripped Table -->
      <HoverTable :headers="tableHeaders" :products="products"/>

      <!-- Footer Table -->
      <FooterTable :headers="tableHeaders" :products="products"/>

    </div>
  </MainLayout>
</template>
