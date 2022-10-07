<template>
  <div>
    <div class="background-line-1"></div>
    <div class="background-line-2"></div>
    <div class="background-line-3"></div>
    <div class="background-line-4"></div>
    <div class="background-line-5"></div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@import '@/assets/styles/variables/_variables.scss';

@for $i from 1 through 5 {
  .background-line-#{$i} {
    height: calc((100 / 12 * 11%));
    width: 1px;

    background-color: $primary-color;

    opacity: 0.5;

    position: fixed;
    left: calc($i * math.div(100, 6) * 1%);
    top: 0;
    transform: translateX(-50%);

    z-index: -1;
  }
}
</style>
