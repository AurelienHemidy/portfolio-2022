<template>
  <div class="carouselSideSlider">
    <div class="carouselSideSlider__mainLine">
      <div
        class="carouselSideSlider__mainLine--slide"
        :style="`transform: translateY(${100 * MainStore.state.sliderImageID}%); --length: ${length}`"
        ref="slide"
      ></div>
    </div>
  </div>
</template>

<script setup>
import MainStore from '~/stores/globalState';

const props = defineProps({
  length: Number,
});
</script>

<style lang="scss" scoped>
.carouselSideSlider {
  grid-area: slider;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &__mainLine {
    height: 100%;
    width: 3px;

    background-color: #2c352e;

    *.page-enter-from &,
    *.page-leave-to &,
    *.between-projects-enter-from &,
    *.between-projects-leave-to & {
      transform: translateY(100%);
    }

    *.page-enter-active &,
    *.page-leave-active &,
    *.between-projects-enter-active &,
    *.between-projects-leave-active & {
      transition: 1.5s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.2s;
    }

    &--slide {
      height: calc(100% / var(--length));
      width: 3px;

      position: relative;

      background-color: var(--theme-color);

      transition: 0.3s cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }
  }
}
</style>
