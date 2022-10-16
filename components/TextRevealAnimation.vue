<template>
  <div data-scroll :data-scroll-offset="props.offset || 70" class="textReveal" :style="`--delay: ${delay || 0}s`">
    <span class="textReveal__text">{{ props.text }}</span>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  offset: Number,
  delay: Number,
});
</script>

<style lang="scss">
.textReveal {
  overflow: hidden;

  &__text {
    position: relative;

    display: inline-block;

    transition-duration: 1.5s;
    transition-timing-function: cubic-bezier(0.62, 0.05, 0.01, 0.99);
    transition-property: transform;

    *.page-enter-from &,
    *.page-leave-to &,
    *.between-projects-enter-from &,
    *.between-projects-leave-to & {
      transform: translateY(400%);
    }

    *.page-leave-active &,
    *.page-enter-active &,
    *.between-projects-leave-active &,
    *.between-projects-enter-active & {
      transition: 2s all cubic-bezier(0.62, 0.05, 0.01, 0.99) var(--delay);
    }
  }
}
</style>
