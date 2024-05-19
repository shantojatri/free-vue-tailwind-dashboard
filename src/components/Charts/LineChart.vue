<script setup lang="ts">
import { Line } from "vue-chartjs";
import { useThemeStore } from "@/stores/theme";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const { themeMode } = useThemeStore();

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales statistics of 2024",
      backgroundColor: "#f87979",
      data: [250, 39, 10, 40, 39, 80, 40],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
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
  scales: {
    x: {
      ticks: {
        color: themeMode ? "white" : 'black',
      },
    },
    y: {
      suggestedMin: 50,
      suggestedMax: 100,
      ticks: {
        color: themeMode ? "white" : 'black',
      },
    },
  }, 
};
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
        Line Chart
      </h3>
      <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
        Example of a line chart
      </p>
    </div>

    <div class="p-8 border border-gray-300">
      <Line :data="data" :options="options" />
    </div>
  </div>
</template>
