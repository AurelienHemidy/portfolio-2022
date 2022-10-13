<template>
  <div class="rights">
    <p class="rights__name"><TextRevealAnimation text="© Aurélien Hémidy" /></p>
    <div class="rights__separator"></div>
    <p class="rights__text"><TextRevealAnimation text="All rights reserved" /></p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.rights {
  grid-area: rights;
  // background-color: green;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  padding-bottom: 10px;

  overflow: hidden;

  @include md {
    margin-top: 20px;
  }

  &__name,
  &__text {
    font-size: 0.8rem;
    font-family: 'Open Sans';
    color: $primary-color;
    white-space: nowrap;

    @include md {
      font-size: 0.6rem;
    }
  }

  &__separator {
    width: 15px;
    height: 1px;
    margin: 7.5px 10px;

    background-color: $primary-color;

    *.page-enter-from &,
    *.page-leave-to & {
      transform: translateY(100%);
    }

    *.page-leave-active &,
    *.page-enter-active & {
      transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }
  }
}
</style>
