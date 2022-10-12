<template>
  <div class="dateTitle">
    <h5 class="dateTitle__text">2022</h5>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.dateTitle {
  grid-area: date;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  // overflow: hidden;

  &__text {
    font-size: 2rem;
    font-weight: 700;
    *.page-enter-from & {
      // color: red;
      transform: translateY(100%);
    }
    *.page-leave-to & {
      // color: green;
      transform: translateY(100%);
    }

    *.page-enter-active &,
    *.page-leave-active & {
      transition: 0.9s all;
    }
  }
}
</style>
