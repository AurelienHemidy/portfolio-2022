<template>
  <div class="background-line"></div>
  <div class="background-line"></div>
  <div class="background-line"></div>
  <div class="background-line"></div>
  <div class="background-line"></div>
  <slot />
</template>

<style lang="scss" scoped>
@use 'sass:math';
@import '@/assets/styles/variables/_variables.scss';

@for $i from 1 through 5 {
  .background-line:nth-child(#{$i + 3}) {
    height: 100%;
    width: 1px;

    background-color: $primary-color;

    opacity: 0.5;

    position: absolute;
    left: calc($i * math.div(100, 6) * 1%);
    top: 0;
    transform: translateX(-50%);

    z-index: -1;
  }
}
</style>
