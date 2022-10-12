<template>
  <div class="carouselSideSlider">
    <div class="carouselSideSlider__mainLine">
      <div
        class="carouselSideSlider__mainLine--slide"
        :style="`transform: translateY(${100 * MainStore.state.sliderImageID}%)`"
        ref="slide"
      ></div>
    </div>
  </div>
</template>

<script setup>
import MainStore from '~/stores/globalState';
</script>

<style lang="scss" scoped>
.carouselSideSlider {
  grid-area: slider;

  display: flex;
  align-items: center;
  justify-content: center;

  &__mainLine {
    height: 100%;
    width: 3px;

    background-color: #1b2c1e;

    &--slide {
      height: calc(100% / 6);
      width: 3px;

      position: relative;

      background-color: $primary-color;

      transition: 0.3s cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }
  }
}
</style>
