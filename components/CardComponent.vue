<template>
  <div :class="['card', backgroundColor]" class="card p-4">
    <h3 class="text-h3 lg:text-h4 xl:text-h3 text-center mt-16 uppercase">
      {{ title }}
    </h3>
    <p class="text-xl text-center mt-4 mb-32">{{ description }}</p>
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
