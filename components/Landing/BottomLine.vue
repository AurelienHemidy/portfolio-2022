<template>
  <div class="bottomLineLanding" data-scroll></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bottomLineLanding {
  grid-area: bottom-line;

  background-color: $primary-color;

  position: relative;
  top: 0;

  width: 100%;
  height: 1px;

  opacity: 0.5;

  transform-origin: left;
  transform: scaleX(0);

  transition: 2s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 1.2s;

  &.is-inview {
    transform: scaleX(1);
  }

  *.page-enter-from &,
  *.page-leave-to & {
    transform: scaleX(0);
  }

  *.page-leave-active &,
  *.page-enter-active & {
    transition: 1.2s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
  }
}
</style>
