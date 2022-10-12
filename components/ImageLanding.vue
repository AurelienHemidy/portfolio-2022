<template>
  <div class="imageLanding image">
    <picture ref="image" id="image" @mouseenter="onMouseEnterImage" @mouseleave="onMouseLeaveImage">
      <img src="~/assets/background/image-of-me.png" alt="arrow icon" />
    </picture>
    <!-- <div class="animation-block"></div> -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.imageLanding {
  grid-area: image;

  overflow: hidden;

  margin-left: 25px;

  cursor: pointer;
  position: relative;

  picture {
    width: 100%;
    height: 100%;

    transform: scale(1.05);

    object-fit: cover;

    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.62, 0.05, 0.01, 0.99);

    @include hover {
      transform: scale(0.9);
    }
  }

  @include xs {
    margin-left: 0px !important;
  }
}
</style>
