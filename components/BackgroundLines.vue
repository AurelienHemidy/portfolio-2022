<template>
  <div>
    <div class="backgroundLine-1" data-scroll :class="isProject ? 'isProject' : 'isLanding'"></div>
    <div class="backgroundLine-2" data-scroll :class="isProject ? 'isProject' : 'isLanding'"></div>
    <div class="backgroundLine-3" data-scroll :class="isProject ? 'isProject' : 'isLanding'"></div>
    <div class="backgroundLine-4" data-scroll :class="isProject ? 'isProject' : 'isLanding'"></div>
    <div class="backgroundLine-5" data-scroll :class="isProject ? 'isProject' : 'isLanding'"></div>
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

    transform: scaleY(0) translateX(-50%);
    transform-origin: top;

    transition: 1.2s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.2s;

    z-index: -1;

    &.is-inview {
      transform: scaleY(1) translateX(-50%);
    }

    &.isProject {
      background-color: var(--theme-color);
      height: 100vh;
      *.page-enter-from &,
      *.page-leave-to & {
        transform: scaleY(0) translateX(-50%);
      }

      *.page-leave-active &,
      *.page-enter-active & {
        transition: 1.2s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.2s;
      }
    }

    &.isLanding {
      *.page-enter-from &,
      *.page-leave-to & {
        transform: scaleY(0) translateX(-50%);
      }

      *.page-leave-active &,
      *.page-enter-active & {
        transition: 1.2s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.2s;
      }
    }
  }
}
</style>
