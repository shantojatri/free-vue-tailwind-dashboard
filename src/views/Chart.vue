<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
import BarChart from "@/components/Charts/BarChart.vue";
import PieChart from "@/components/Charts/PieChart.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import PolarChart from "@/components/Charts/PolarChart.vue";
import RadarChart from "@/components/Charts/RadarChart.vue";
import DoughnutChart from "@/components/Charts/DoughnutChart.vue";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Charts']" />

    <div class="grid grid-cols-2 gap-x-10 mt-8">
      <div>
        <!-- Bar chart -->
        <BarChart />
      </div>
      <div>
        <!-- Line chart -->
        <LineChart />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-x-10 mt-8">
      <div>
        <!-- Pie chart -->
        <PieChart />
      </div>
      <div>
        <!-- Polar chart -->
        <PolarChart />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-x-10 mt-8">
      <div>
        <!-- Radar chart -->
        <RadarChart />
      </div>
      <div>
        <!-- Doughnut chart -->
        <DoughnutChart />
      </div>
    </div>
  </MainLayout>
</template>
