<template>
  <div class="projects app">
    <p class="t">WORK</p>
    <Project />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';
.projects {
  margin-top: 300px;
  .t {
    grid-column-start: 2;
    grid-column-end: 6;

    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 900;

    color: $primary-color;
  }
}
</style>
