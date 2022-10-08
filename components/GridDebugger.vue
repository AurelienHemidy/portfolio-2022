<template>
  <div class="grid-line-1"></div>
  <div class="grid-line-2"></div>
  <div class="grid-line-3"></div>
  <div class="grid-line-4"></div>
  <div class="grid-line-5"></div>
  <div class="grid-line-6"></div>
  <div class="grid-line-7"></div>
  <div class="grid-line-8"></div>
  <div class="grid-line-9"></div>
  <div class="grid-line-10"></div>
  <div class="grid-line-11"></div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@import '@/assets/styles/variables/_variables.scss';

$number-of-columns: 12;

@for $i from 1 through 11 {
  .grid-line-#{$i} {
    height: 100%;
    width: 1px;

    background-color: red;

    opacity: 0.2;

    position: absolute;
    left: calc($i * math.div(100, $number-of-columns) * 1%);
    top: 0;
    transform: translateX(-50%);

    z-index: -1;

    &::after,
    &::before {
      content: '';

      position: absolute;

      width: 25px;
      height: 100%;

      opacity: 0.2;
    }

    &::after {
      background-color: blue;
    }
    &::before {
      background-color: red;
      transform: translateX(-100%);
    }
  }
}
</style>
