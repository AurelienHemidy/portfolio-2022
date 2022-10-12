<template>
  <div class="viewTitle" @mouseenter="onMouseEnterImage" @mouseleave="onMouseLeaveImage">
    <div class="viewTitle__line" :class="isAnimating ? 'viewTitle__line--animation' : ''" ref="rightLine"></div>
    <p class="viewTitle__text" :class="isAnimating ? 'viewTitle__text--animation' : ''" ref="rightLineText">View</p>
  </div>
</template>

<script setup>
const props = defineProps({
  isAnimating: Boolean,
});
</script>

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

    transform: translateX(-30%);
    transform-origin: left;

    -webkit-animation: line-anim-out 0.6s forwards;

    &--animation {
      -webkit-animation: line-anim-in 0.6s forwards;
    }
  }

  &__text {
    color: $primary-color;

    transform: translateX(100%);

    opacity: 0;

    -webkit-animation: text-anim-out 0.6s forwards;

    &--animation {
      -webkit-animation: text-anim-in 0.6s forwards;
    }
  }
}

@keyframes line-anim-in {
  0% {
    transform: translateX(-50%);
    transform-origin: left;
    opacity: 0;
  }
  30% {
    transform: translateX(-50%) scaleX(1.3);
    opacity: 0.8;
  }
  50% {
    transform: translateX(-50%) scaleX(1.5);
    opacity: 1;
  }
  100% {
    transform: scaleX(1) translateX(30%);
    opacity: 1;
  }
}

@keyframes line-anim-out {
  0% {
    transform: scaleX(1) translateX(30%);
    opacity: 1;
  }
  50% {
    transform: translateX(-50%) scaleX(1.5);
    opacity: 1;
  }

  70% {
    transform: translateX(-50%) scaleX(1.3);
    opacity: 0.8;
  }
  100% {
    transform: translateX(-50%);
    opacity: 0;
  }
}

@keyframes text-anim-in {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  30% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    transform: translateX(70%);
  }
  100% {
    transform: translateX(50%);
    opacity: 1;
  }
}

@keyframes text-anim-out {
  0% {
    transform: translateX(50%);
    opacity: 1;
  }
  50% {
    transform: translateX(70%);
  }
  70% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
