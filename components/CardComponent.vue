<template>
  <div :class="['card', backgroundColor]" class="card p-4 mt-4 mx-2 w-[90%] md:max-w-fit">
    <h3 class="text-h3 sm:text-h4 lg:text-h5 xl:text-h4 2xl:text-h3 text-center mt-4 lg:mt-16 uppercase font-semibold">
       {{ title }}
    </h3>
    <p class="text-md lg:text-sm xl:text-md text-center mt-6 mb-4 lg:mb-32 uppercase">{{ description }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  title: String,
  description: String,
  backgroundColor: String,
  textColor: String,
  url: String,
});

const title = ref(props.title);
const description = ref(props.description);
const backgroundColor = ref(props.backgroundColor);
</script>

<style scoped>
.card {
  border-radius: 1rem 1rem 1rem 0rem;
  @apply text-white p-5;
}
</style>
