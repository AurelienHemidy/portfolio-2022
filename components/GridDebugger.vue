<template>
  <div class="grid-line"></div>
  <div class="grid-line"></div>
  <div class="grid-line"></div>
  <div class="grid-line"></div>
  <div class="grid-line"></div>
  <div class="grid-line"></div>
  <div class="grid-line"></div>
  <div class="grid-line"></div>
  <div class="grid-line"></div>
  <div class="grid-line"></div>
  <div class="grid-line"></div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@import '@/assets/styles/variables/_variables.scss';

$number-of-columns: 12;

@for $i from 1 through 11 {
  .grid-line:nth-child(#{$i}) {
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
