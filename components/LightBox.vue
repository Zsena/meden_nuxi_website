<template>
  <div
    class="container grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto"
  >
    <div
      v-for="(imageObject, index) in imgs"
      :key="index"
      class="lightbox-card cursor-pointer"
      @click="showImg(index)"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="50"
      data-aos-delay="100"
    >
      <div class="h-full w-full relative">
        <img
          :src="imageObject.src"
          class="lightbox-card-img"
          :alt="imageObject.title"
        />
        <div class="bg-card-overlay"></div>
      </div>
    </div>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgs"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import { ref, defineComponent, watch, toRefs } from "vue";

export default defineComponent({
  components: {
    VueEasyLightbox,
  },
  props: {
    imgs: {
      type: Array,
      required: true,
    },
    startIndex: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { imgs, startIndex } = toRefs(props);
    const visibleRef = ref(false);
    const indexRef = ref(startIndex.value);

    watch(startIndex, (newVal) => {
      indexRef.value = newVal;
      console.log("indexRef.value", indexRef.value);
    });

    const showImg = (index) => {
      indexRef.value = index;
      visibleRef.value = true;
    };

    const onHide = () => {
      visibleRef.value = false;
    };

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
