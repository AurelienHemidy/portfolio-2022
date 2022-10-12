<template>
  <div class="projectsLanding">
    <p class="projectsLanding__text" ref="projectTextLeft">PROJECTS</p>
  </div>
</template>

<script setup></script>

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

    position: absolute;

    transform: rotate(90deg) translateY(-50%);
  }
}
</style>
