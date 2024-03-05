<template>
  <div :class="`${bgClass}`" class="card p-5 w-full lg:w-[400px] text-white lg:min-h-[250px]">
    <h3 class="h3 mb-3 uppercase">
      {{ title }}
    </h3>
    <ol class="list-disc ml-8 text-[11px] sm:text-[13px] font-bold ">
      <li class="pl-2 pb-2 uppercase">{{ list1 }}</li>
      <li class="pl-2 pb-2 uppercase">{{ list2 }}</li>
      <li class="pl-2 pb-2 uppercase">{{ list3 }}</li>
      <li class="pl-2 pb-2 uppercase">{{ list4 }}</li>
    </ol>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  list1: String,
  list2: String,
  list3: String,
  list4: String,
  bgClass: String,
  url: String,
});
</script>
