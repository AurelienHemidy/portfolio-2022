<template>
  <div class="bottomLeftButton">
    <button class="bottomLeftButton__button">
      <img
        src="~/assets/background/arrow-icon.svg"
        alt="arrow icon"
        class="bottomLeftButton__button_image"
        ref="buttonBottomLeft"
      />
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bottomLeftButton {
  grid-area: bottom-button;

  display: flex;
  align-items: flex-end;

  &__button {
    width: 60px;
    height: 60px;

    border-radius: 100%;
    border: none;

    background-color: $primary-color;

    cursor: pointer;

    @include md {
      width: 30px;
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    &_image {
      animation-timing-function: ease;
      animation-duration: 0.5s;
      animation-fill-mode: both;
      @include md {
        width: 40%;
      }
    }

    @include hover {
      img {
        animation-name: anim-button;
      }
    }
  }
}

@keyframes anim-button {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  50% {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  50.0001% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
