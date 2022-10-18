<template>
  <div class="projectsLanding">
    <p
      class="projectsLanding__text"
      :style="isAnimating ? 'letter-spacing: 5px; transform: translateX(-100%);' : ''"
      ref="projectTextLeft"
      data-scroll
    >
      Portfolio
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  isAnimating: Boolean,
});
</script>

<style lang="scss" scoped>
.projectsLanding {
  grid-area: projects;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__text {
    color: $primary-color;
    font-weight: 500;
    font-size: 2rem;
    text-transform: uppercase;

    transition: 0.4s all cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.3s;

    position: absolute;

    writing-mode: vertical-rl;
    text-orientation: mixed;

    opacity: 0;
    letter-spacing: 5px;
    transform: translateX(-100%);

    &__animation {
      letter-spacing: 5px;
    }

    &.is-inview {
      opacity: 1;
      letter-spacing: 1px;
      transform: translateX(0);
    }

    *.page-enter-from &,
    *.page-leave-to & {
      letter-spacing: 5px;
      opacity: 0;
    }

    *.page-enter-active &,
    *.page-leave-active & {
      transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }
  }
}
</style>
