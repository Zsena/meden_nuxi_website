<template>
  <div :class="['card', bgColor]" class="p-4  w-full lg:w-[400px] text-white">
    <h3 class=" sm:text-h3 lg:text-h5 xl:text-h4 text-start mb-3 uppercase font-semibold ">
      {{ title }}
    </h3>

    <ol class="list-disc ml-8 text-[11px] sm:text-[13px] ">
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
  bgColor: String,
  url: String,
});
</script>

<style scoped>
.card {
  border-radius: 1rem 1rem 1rem 0rem;
  @apply p-5;
}
</style>
