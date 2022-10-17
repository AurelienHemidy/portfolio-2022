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

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  padding-bottom: 10px;

  overflow: hidden;

  @include md {
    margin-top: 20px;
  }

  &__name,
  &__text {
    font-size: 0.8rem;
    font-family: 'Open Sans';
    color: $secondary-color;
    white-space: nowrap;

    @include md {
      font-size: 0.6rem;
    }
  }

  &__separator {
    width: 15px;
    height: 1px;
    margin: 7.5px 10px;

    background-color: $secondary-color;

    *.page-enter-from &,
    *.page-leave-to &,
    *.between-projects-enter-from &,
    *.between-projects-leave-to & {
      transform: translateY(10px);
      opacity: 0;
    }

    *.page-leave-active &,
    *.page-enter-active &,
    *.between-projects-enter-active &,
    *.between-projects-leave-active & {
      transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }
  }
}
</style>
