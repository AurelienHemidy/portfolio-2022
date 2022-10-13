<template>
  <div>
    <div class="backgroundLine-1" :class="isProject ? 'isProject' : ''"></div>
    <div class="backgroundLine-2" :class="isProject ? 'isProject' : ''"></div>
    <div class="backgroundLine-3" :class="isProject ? 'isProject' : ''"></div>
    <div class="backgroundLine-4" :class="isProject ? 'isProject' : ''"></div>
    <div class="backgroundLine-5" :class="isProject ? 'isProject' : ''"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  isProject: Boolean,
});
</script>

<style lang="scss" scoped>
@for $i from 1 through 5 {
  .backgroundLine-#{$i} {
    height: calc((100 / 12 * 11vh));
    width: 1px;

    background-color: $primary-color;

    opacity: 0.5;

    position: absolute;
    left: calc($i * math.div(100, 6) * 1%);
    top: 0;
    transform: scaleY(1) translateX(-50%);

    transform-origin: top;

    z-index: -1;
    &.isProject {
      height: 100vh;
    }

    *.page-enter-from &,
    *.page-leave-to & {
      transform: scaleY(0) translateX(-50%);
    }

    *.page-leave-active &,
    *.page-enter-active & {
      transition: 2s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.5s;
    }
  }
}
</style>
