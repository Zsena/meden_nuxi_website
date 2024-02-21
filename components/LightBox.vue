<template>
  <div class="container flex items-center justify-between flex-wrap gap-5 mx-auto">
    <div
      v-for="(imageObject, index) in imgs"
      :key="index"
      class="lightbox-card"
      @click="() => showImg(index)"
    >
      <img :src="imageObject.src" class="lightbox-card-img" :alt="imageObject.title" />
    </div>

    <vue-easy-lightbox class="asdf"
      :visible="visibleRef"
      :imgs="imgs"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import VueEasyLightbox from "vue-easy-lightbox";
import { ref, defineComponent } from "vue";

export default defineComponent({
  components: {
    VueEasyLightbox,
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgs = [
      { src: "/img/headers/header2.webp", title: "this is title" },
      { src: "/img/headers/header3.webp", title: "this is title" },
      { src: "/img/headers/header4.webp", title: "this is title" },
      { src: "/img/headers/header5.webp", title: "this is title" },
      { src: "/img/headers/header6.webp", title: "this is title" },
      { src: "/img/headers/header7.webp", title: "this is title" },
    ];
    const showImg = (index) => {
      indexRef.value = index;
      visibleRef.value = true;
    };
    const onHide = () => (visibleRef.value = false);
    return {
      visibleRef,
      indexRef,
      imgs,
      showImg,
      onHide,
    };
  },
});
</script>
