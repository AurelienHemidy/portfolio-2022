<template>
  <div class="animation-image"></div>
</template>

<style lang="scss" scoped>
.image {
  height: 100%;
  width: 100%;
  position: absolute;
  picture::after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: 1000;

    transition: 1s cubic-bezier(0.62, 0.05, 0.01, 0.99);
    transform-origin: left;
    // transform: scaleX(0);

    background-color: white;
  }
}
</style>
