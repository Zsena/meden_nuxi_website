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
    <section class="py-10 px-4">
      <div class="container mx-auto my-8">
        <h2 class="h2 py-10">Szolgáltatásaink</h2>
        <LightBox />
      </div>
    </section>
    <section class="py-10 px-4">
      <div class="container mx-auto my-8">
        <h2 class="h2 py-10">Munkáink</h2>
        <LightBox />
      </div>
    </section>
  </main>
</template>
