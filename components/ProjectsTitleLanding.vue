<template>
  <div class="projectsLanding">
    <p
      class="projectsLanding__text"
      :class="isAnimating ? 'projectsLanding__text__animation' : ''"
      ref="projectTextLeft"
    >
      PROJECTS
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

    transition: 0.4s letter-spacing cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.3s;

    position: absolute;

    transform: rotate(90deg) translateY(-50%);

    &__animation {
      letter-spacing: 5px;
    }
  }
}
</style>
