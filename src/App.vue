<template>
  <!-- create a reset button that dispatched  "reset-all-filters-event"-->
  <button @click="resetAll">reset</button>
  <button @click="disabledComparison">disabled Comparison</button>
  <button @click="enabledComparison">enabled Comparison</button>

  <!-- call the HeatmapFilter -->
  <HeatmapFilter @on-filter-values-change="filterValueChanged" />

  <!-- <HeatmapFilterNew /> -->
</template>

<script setup lang="ts">
import { ReturnData } from "./components/FilterComponent.vue";
import HeatmapFilter from "./components/HeatmapFilter.vue";
// import HeatmapFilterNew from "heatmap-filter-new";

const filterValueChanged = (value: ReturnData[]) => {
  console.log(value);
};

// when ever reset button is clicked, dispatch this event
const resetAll = () => {
  const resetAllEvent = new CustomEvent("reset-all-filters-event");
  document.dispatchEvent(resetAllEvent);
};

const disabledComparison = () => {
  const resetAllEvent = new CustomEvent("disable-comparison-event", {
    detail: { disabled: true },
  });
  document.dispatchEvent(resetAllEvent);
};

const enabledComparison = () => {
  const resetAllEvent = new CustomEvent("disable-comparison-event", {
    detail: { disabled: false },
  });
  document.dispatchEvent(resetAllEvent);
};
</script>
