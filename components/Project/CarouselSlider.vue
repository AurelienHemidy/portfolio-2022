<template>
  <div class="carouselSlider">
    <div
      class="carouselSlider__sliderBackground"
      ref="sliderBackground"
      :style="`transform: 
      translateX(calc(
        ${100 * MainStore.state.sliderImageID}% + 
        ${pixelsToAddResponsive * MainStore.state.sliderImageID}px) 
      )`"
    ></div>
    <ProjectCarouselSliderImage v-for="(image, i) in images" :id="i" :onClick="onImageSliderClick" :image="image" />
  </div>
</template>

<script setup>
import MainStore from '~/stores/globalState';

const props = defineProps({
  images: Array,
});

const sliderBackground = ref(null);
const pixelsToAddResponsive = ref(21);

const checkResponsiveImage = () => (pixelsToAddResponsive.value = window.innerWidth > 800 ? 21 : 2);

onMounted(() => {
  checkResponsiveImage();

  window.addEventListener('resize', () => {
    checkResponsiveImage();
  });
});

const onImageSliderClick = (e) => {
  if (!MainStore.state.isImageChanging) MainStore.state.sliderImageID = e.target.getAttribute('id');
};
</script>

<style lang="scss" scoped>
.carouselSlider {
  grid-area: slider-image;

  padding: 15px 12.5px 0 12.5px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 25px;
  grid-template-areas: '. . . . . .';

  position: relative;

  @include md {
    padding: 0;
    gap: 0 5px;
  }

  &__sliderBackground {
    position: absolute;
    height: calc(4vw + 5px);
    width: calc(100% / 6 - 21px);

    margin-left: 10.5px;
    margin-top: 13px;

    z-index: -1;

    background-color: $primary-color;

    transition: 0.3s cubic-bezier(0.62, 0.05, 0.01, 0.99);

    *.page-enter-from &,
    *.page-leave-to & {
      opacity: 0;
    }

    *.page-leave-active & {
      transition: 0.5s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }
    *.page-enter-active & {
      transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }

    @include md {
      margin-left: -2px;
      margin-top: -2px;
      height: calc(10vw + 4px);
      width: calc(100% / 6 - 1px);
    }
  }
}
</style>
