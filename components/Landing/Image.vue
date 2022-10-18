<template>
  <div class="imageLanding">
    <picture
      class="imageLanding__picture"
      ref="image"
      id="image"
      @mouseenter="onHover"
      @mouseleave="onHover"
      @click="handleClick"
      data-scroll
    >
      <img
        class="imageLanding__picture--image"
        src="~/assets/background/image-of-me.png"
        alt="picture of the developer"
        data-scroll
        data-scroll-speed="1"
      />
    </picture>
  </div>
</template>

<script setup>
import MainStore from '~~/stores/globalState';

const props = defineProps({
  onHover: Function,
});

const handleClick = () => MainStore.state.locomotiveScroll.scrollTo(document.getElementById('projects'));
</script>

<style lang="scss" scoped>
.imageLanding {
  grid-area: image;

  overflow: hidden;

  margin-left: 25px;

  cursor: pointer;
  position: relative;

  &__picture {
    width: 100%;
    height: 100%;

    position: absolute;

    transform: scale(1.05, 0);
    transform-origin: bottom;

    object-fit: cover;

    transition: 0.8s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.7s;

    &.is-inview {
      transform: scale(1.05);

      &::after {
        transform: scaleY(0);
      }
    }

    *.page-enter-from &,
    *.page-leave-to & {
      transform: scale(1.05, 0);
    }

    *.page-enter-active & {
      transition: 0.8s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.2s;
    }
    *.page-leave-active & {
      transition: 0.8s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.4s;
    }

    &::after {
      content: '';

      position: absolute;
      left: 0;

      height: 100%;
      width: 100%;

      background-color: $primary-color;

      transform-origin: top;

      transform: scaleY(1);
      transition: 0.8s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 1.5s;

      *.page-enter-from &,
      *.page-leave-to & {
        transform: scaleY(1);
      }

      *.page-enter-active & {
        transition: 0.8s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.4s;
      }

      *.page-leave-active & {
        transition: 0.8s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.2s;
      }
    }

    @include hover {
      transform: scale(0.9);
      transition-duration: 1s;
      transition-delay: 0s;
      transition-timing-function: cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }

    &--image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @include xs {
    margin-left: 0px !important;
  }
}
</style>
