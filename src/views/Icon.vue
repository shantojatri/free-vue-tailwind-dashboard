<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
import RemixIcon from "@/components/Icons/RemixIcon.vue";
import HeroIcon from "@/components/Icons/HeroIcon.vue";
import LineIcon from "@/components/Icons/LineIcon.vue";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Icons']" />

    <div class="space-y-8">
      <!-- Remix Icon -->
      <RemixIcon />

      <!-- Hero Icon -->
      <HeroIcon />

      <!-- Remix Icon -->
      <LineIcon />
    </div>
  </MainLayout>
</template>
