<template>
  <div class="carouselMainImage">
    <!-- <div class="carouselMainImage__line-visit">
      <div class="carouselMainImage__line-visit--line"></div>
      <NuxtLink :to="link"
        ><h4 class="carouselMainImage__line-visit--text"><TextRevealAnimation text="Visit the site" /></h4
      ></NuxtLink>
    </div> -->
    <picture
      class="carouselMainImage__picture"
      ref="picture"
      :class="isAnimating ? 'animatingOnchange' : ''"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <img :src="selectedImage" :alt="props.images[MainStore.state.sliderImageID].alt" />
    </picture>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import MainStore from '~~/stores/globalState';

const props = defineProps({
  images: Array,
  link: String,
});

const selectedImage = ref(props.images[MainStore.state.sliderImageID].src);
const isAnimating = ref(false);

const toucheStartPositionX = ref(0);
const toucheEndPositionX = ref(0);

const changeImage = (sliderImageID) => {
  isAnimating.value = true;
  MainStore.state.isImageChanging = true;

  const changeImage = setTimeout(() => {
    selectedImage.value = props.images[sliderImageID].src;

    clearTimeout(changeImage);
  }, 500);

  const resetAnimation = setTimeout(() => {
    isAnimating.value = false;
    MainStore.state.isImageChanging = false;

    clearTimeout(resetAnimation);
  }, 1000);
};

const handleTouchStart = (e) => {
  e.preventDefault();

  if (MainStore.state.isImageChanging) return;

  toucheStartPositionX.value = e.changedTouches[0].clientX;
};
const handleTouchEnd = (e) => {
  e.preventDefault();

  if (MainStore.state.isImageChanging) return;

  toucheEndPositionX.value = e.changedTouches[0].clientX;

  if (toucheStartPositionX.value > toucheEndPositionX.value) {
    console.log(MainStore.state.sliderImageID);
    if (MainStore.state.sliderImageID === props.images.length - 1) {
      MainStore.state.sliderImageID = 0;
      return;
    }
    console.log('swipe-right');

    MainStore.state.sliderImageID++;
  } else {
    console.log('swipe-left');
    if (MainStore.state.sliderImageID === 0) {
      MainStore.state.sliderImageID = props.images.length - 1;
      return;
    }

    MainStore.state.sliderImageID--;
  }
};

watch(
  () => MainStore.state.sliderImageID,
  (sliderImageID) => changeImage(sliderImageID)
);
</script>

<style lang="scss" scoped>
.carouselMainImage {
  grid-area: image;

  width: 100%;
  position: relative;

  @include md {
    height: calc(30vh);
  }

  &__line-visit {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;

    cursor: pointer;

    @include hover {
      .carouselMainImage__line-visit--text {
        animation-name: anim-link;
      }
    }

    &--line {
      flex-grow: 1;
      height: 1px;
      transform-origin: left;

      background-color: var(--theme-color);

      *.page-enter-from &,
      *.page-leave-to &,
      *.between-projects-enter-from &,
      *.between-projects-leave-to & {
        flex-grow: 0;
      }

      *.page-leave-active &,
      *.page-enter-active &,
      *.between-projects-enter-active &,
      *.between-projects-leave-active & {
        transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
      }
    }

    &--text {
      margin-left: 20px;

      text-transform: uppercase;
      color: var(--theme-color);
      letter-spacing: 1px;
      font-size: 0.9rem;
      // -webkit-text-stroke: 1pt var(--theme-color);

      cursor: pointer;

      animation-timing-function: ease;
      animation-duration: 0.5s;
      animation-fill-mode: both;
    }
  }

  &__picture {
    width: 100%;
    position: absolute;

    z-index: 9999;

    height: calc(100%);

    @include md {
      height: calc(100% - 1rem);
    }

    &.animatingOnchange {
      &::after {
        animation-name: anim-change-image;
      }
    }

    overflow: hidden;

    &::after {
      content: '';

      position: absolute;
      left: 0;

      height: 100%;
      width: 100%;
      z-index: 9999;

      background-color: $background-color;

      transform-origin: right;

      transform: scaleX(0);

      animation-timing-function: cubic-bezier(0.62, 0.05, 0.01, 0.99);
      animation-duration: 1s;
      animation-fill-mode: both;

      *.page-enter-from &,
      *.page-leave-to &,
      *.between-projects-enter-from &,
      *.between-projects-leave-to & {
        transform: scaleX(1);
      }

      *.page-enter-active &,
      *.between-projects-enter-active &,
      *.between-projects-leave-active & {
        transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.1s;
      }

      *.page-leave-active & {
        transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.1s;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      transform: scale(1);

      *.page-enter-from &,
      *.between-projects-enter-from & {
        transform: scale(1.5);
      }
      *.page-leave-to &,
      *.between-projects-leave-to & {
        transform: scale(1.2);
      }

      *.page-leave-active &,
      *.page-enter-active &,
      *.between-projects-enter-active &,
      *.between-projects-leave-active & {
        transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
      }
    }
  }
}

@keyframes anim-link {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  50% {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  50.0001% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes anim-change-image {
  0% {
    background-color: var(--theme-color);
    transform-origin: left;
    transform: scaleX(0);
  }
  50% {
    transform-origin: left;
    transform: scaleX(1);
  }
  50.0001% {
    transform-origin: right;
    transform: scaleX(1);
  }
  100% {
    background-color: var(--theme-color);
    transform-origin: right;
    transform: scaleX(0);
  }
}
</style>
