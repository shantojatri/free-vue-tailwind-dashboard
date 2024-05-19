import { Doughnut } from 'vue-chartjs'
<script setup lang="ts">
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useThemeStore } from "@/stores/theme";

ChartJS.register(ArcElement, Tooltip, Legend);

const { themeMode } = useThemeStore();

const data = {
    labels: ["Mobile", "Desktop", "Tablet", "Speaker"],
  datasets: [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
      data: [40, 20, 80, 10],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: themeMode ? "white" : 'black',
        font: {
          size: 16,
        },
      },
    },
  },
};
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
        Doughnut Chart
      </h3>
      <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
        Example of a doughnut chart
      </p>
    </div>

    <div class="p-8 border border-gray-300">
      <Doughnut :data="data" :options="options" />
    </div>
  </div>
</template>
