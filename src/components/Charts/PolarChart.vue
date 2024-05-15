<script setup lang="ts">
import { PolarArea } from "vue-chartjs";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "First month",
      backgroundColor: "rgba(179,181,198,0.3)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 70, 90, 20, 56, 55, 25],
    },
    {
      label: "Second month",
      backgroundColor: "rgba(211,4,239,0.5)",
      pointBackgroundColor: "rgba(211,4,239,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(211,4,239,1)",
      data: [28, 90, 70, 70, 70, 85, 40],
    },
    {
      label: "Third month",
      backgroundColor: "rgba(4,239,99,0.5)",
      pointBackgroundColor: "rgba(4,239,99,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(4,239,99,1)",
      data: [40, 48, 80, 81, 99, 70, 90],
    },
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
        Polar Chart
      </h3>
      <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
        Example of a polar chart
      </p>
    </div>

    <div class="p-8 border border-gray-300">
      <PolarArea :data="data" :options="options" />
    </div>
  </div>
</template>
