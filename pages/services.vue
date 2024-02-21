<script setup lang="ts">
const title = ref("Szolgáltatásaink");
</script>

<template>
  <main class="">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <Hero />
    <section class="py-10">
      <LightBox />
    </section>
  </main>
</template>
