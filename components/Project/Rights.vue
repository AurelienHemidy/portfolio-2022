<template>
  <div class="rights">
    <p class="rights__name">
      <span class="textRevealAnimation">© Aurélien Hémidy</span>
    </p>
    <div class="rights__separator"></div>
    <p class="rights__text">
      <span class="textRevealAnimation">All rights reserved</span>
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.rights {
  // grid-area: rights;

  position: absolute;
  left: 15px;
  bottom: 15px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  writing-mode: vertical-rl;
  text-orientation: mixed;

  // overflow: hidden;

  @include md {
    left: -25px;
  }

  &__name,
  &__text {
    font-size: 0.7rem;
    font-family: 'Fira Sans';
    opacity: 0.5;
    color: $secondary-color;
    white-space: nowrap;

    overflow: hidden;

    @include md {
      font-size: 0.6rem;
    }
  }

  &__separator {
    width: 1px;
    height: 15px;
    margin: 7.5px 7.5px;

    background-color: $secondary-color;
    opacity: 0.5;

    transform-origin: bottom;

    *.page-enter-from &,
    *.page-leave-to &,
    *.between-projects-enter-from &,
    *.between-projects-leave-to & {
      transform: scaleY(0);
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
