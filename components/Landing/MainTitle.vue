<template>
  <div class="mainTitle">
    <h1 class="mainTitle__name"><TextRevealAnimation text="Aurélien"></TextRevealAnimation></h1>
    <h1 class="mainTitle__surname">
      <TextRevealAnimation text="Hémidy" :delay="0.2">
        <span class="mainTitle__surname--job">FRONT-END DEVELOPER</span>
      </TextRevealAnimation>
    </h1>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.mainTitle {
  grid-area: name-dev;

  // font-family: 'Butler';
  font-size: min(4rem, 4vw);

  line-height: 1.24;

  z-index: 9998;

  @include md {
    font-size: min(3rem, 5vw);
  }

  @include xs {
    font-size: 1.8rem;
  }

  &__name {
  }

  &__surname {
    position: relative;

    &--job {
      font-family: 'Oswald';
      color: $primary-color;
      font-size: min(1rem, 1.3vw);

      display: inline-block;
      position: absolute;

      bottom: min(12px, 1.5vw);

      z-index: -1;

      @include md {
        font-size: 0.7rem;
      }

      *.page-enter-from &,
      *.page-leave-to & {
        transform: translateX(-100%);
        opacity: 0;
      }

      *.page-enter-active &,
      *.page-leave-active & {
        transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
      }
    }
  }
}
</style>
