<script setup lang="ts">
import { Bar } from "vue-chartjs";
import { useThemeStore } from "@/stores/theme";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { themeMode } = useThemeStore();

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Monthly wise sales report of 2024",
      data: [220, 350, 400, 380, 110, 260, 320, 350, 220, 110, 370, 280],
      color: "#fff",
      backgroundColor: "#9BD0F5",
    },
  ],
};

const options = {
  responsive: true,
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
        Bar Chart
      </h3>
      <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
        Example of a bar chart
      </p>
    </div>

    <div class="p-8 border border-gray-300">
      <Bar :data="data" :options="options" />
    </div>
  </div>
</template>
