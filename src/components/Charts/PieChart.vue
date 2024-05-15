<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Mobile", "Desktop", "Tablet", "Speaker"],
  datasets: [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
      data: [50, 10, 25, 15],
    }
  ]
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <div class="card p-6">
    <div class="mb-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
        Pie Chart
      </h3>
      <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
        Example of a pie chart
      </p>
    </div>

    <div class="p-8 border border-gray-300">
      <Pie :data="data" :options="options" />
    </div>
  </div>
</template>
