<template>
  <div class="sliderImage">
    <img :src="image.src" :alt="image.alt" class="sliderImage__image" :id="id" @click="onClick" />
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  image: Object,
  onClick: Function,
});
</script>

<style lang="scss" scoped>
.sliderImage {
  height: 4vw;
  width: 100%;

  object-fit: cover;

  cursor: pointer;

  @include md {
    height: 10vw;
  }
  &__image {
    width: 100%;
    height: 100%;
  }

  *.page-enter-from &,
  *.page-leave-to & {
    transform: translateY(50%);
    opacity: 0;
  }

  *.page-leave-active &,
  *.page-enter-active & {
    transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
  }
}
</style>
