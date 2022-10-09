<template>
  <div class="work-container">
    <h1 class="t">WORK</h1>

    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';

.work-container {
  margin-top: 150px;
  .t {
    position: relative;

    left: calc(100% / 12);

    margin-bottom: 50px;

    font-size: 6rem;
    color: $primary-color;
  }
}
</style>
