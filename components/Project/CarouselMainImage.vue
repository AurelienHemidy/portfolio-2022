<template>
  <div class="carouselMainImage">
    <div class="carouselMainImage__line-visit">
      <div class="carouselMainImage__line-visit--line"></div>
      <h4 class="carouselMainImage__line-visit--text"><TextRevealAnimation text="Visit the site" /></h4>
    </div>
    <picture class="carouselMainImage__picture" ref="picture">
      <img src="~/assets/background/forgotten-skies-image.png" alt="forgotten skies img" ref="image" />
    </picture>
  </div>
</template>

<script setup></script>

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

    &--line {
      flex-grow: 1;
      height: 1px;
      transform-origin: left;

      background-color: $primary-color;

      *.page-enter-from &,
      *.page-leave-to & {
        flex-grow: 0;
      }

      *.page-leave-active &,
      *.page-enter-active & {
        transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
      }
    }

    &--text {
      margin-left: 20px;

      text-transform: uppercase;
      color: $primary-color;
      letter-spacing: 1px;
      font-size: 0.9rem;

      cursor: pointer;
    }
  }

  picture {
    width: 100%;
    position: absolute;

    z-index: 9999;

    height: calc(100% - 1.5rem);

    @include md {
      height: calc(100% - 2.5rem);
    }

    overflow: hidden;

    &::after {
      content: '';

      position: absolute;
      left: 0;

      height: 100%;
      width: 100%;

      background-color: $background-color;

      transform-origin: right;

      transform: scaleX(0);

      *.page-enter-from &,
      *.page-leave-to & {
        transform: scaleX(1);
      }

      *.page-enter-active & {
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
      // transform-origin: lef;

      *.page-enter-from & {
        transform: scale(1.5);
      }
      *.page-leave-to & {
        transform: scale(1.5);
      }

      *.page-leave-active &,
      *.page-enter-active & {
        transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
      }
    }
  }
}
</style>
