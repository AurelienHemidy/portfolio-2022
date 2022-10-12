<template>
  <div class="mainTitle">
    <h1 class="mainTitle__name">Aurélien</h1>
    <h1 class="mainTitle__surname">Hémidy</h1>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.mainTitle {
  grid-area: name-dev;

  font-family: 'Butler';
  font-size: min(4rem, 4vw);

  z-index: 9998;

  @include md {
    font-size: min(3rem, 5vw);
  }

  @include xs {
    font-size: 1.8rem;
  }

  &__name {
    *.page-enter-from & {
      transform: translateY(100%);
    }
    *.page-leave-to & {
      transform: translateY(100%);
    }

    *.page-enter-active &,
    *.page-leave-active & {
      transition: 0.8s all ease;
    }
  }

  &__surname {
    position: relative;

    *.page-enter-from & {
      transform: translateY(100%);
    }
    *.page-leave-to & {
      transform: translateY(100%);
    }

    *.page-enter-active &,
    *.page-leave-active & {
      transition: 0.8s all ease;
    }

    &::after {
      content: 'FRONT-END DEVELOPER';

      font-family: 'Oswald';
      color: $primary-color;

      position: absolute;
      bottom: min(25px, 1.8vw);

      font-size: min(1rem, 1.3vw);
    }

    @include md {
      &::after {
        font-size: 0.7rem;
      }
    }
  }
}
</style>
