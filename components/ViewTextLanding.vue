<template>
  <div class="viewTitle">
    <div class="viewTitle__line" ref="rightLine"></div>
    <p class="viewTitle__text" ref="rightLineText">View</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.viewTitle {
  grid-area: view;

  display: flex;
  align-items: center;
  margin-left: 15px;

  @include md {
    display: none;
  }

  &__line {
    width: 50px;
    height: 1px;

    opacity: 0;

    background-color: $primary-color;

    margin-right: 15px;

    transform: translateX(-50%);
    transform-origin: left;
  }

  &__text {
    color: $primary-color;

    transform: translateX(20%);

    opacity: 0;
  }
}
</style>
