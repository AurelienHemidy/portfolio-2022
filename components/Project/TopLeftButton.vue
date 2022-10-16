<template>
  <div class="topLeftButton">
    <button class="topLeftButton__button" @click="backToMainPage">
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" ref="arrow">
        <path
          d="M7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L15.0711 8.34315C15.4616 7.95262 15.4616 7.31946 15.0711 6.92893C14.6805 6.53841 14.0474 6.53841 13.6569 6.92893L8 12.5858L2.34315 6.92893C1.95262 6.53841 1.31946 6.53841 0.928932 6.92893C0.538408 7.31946 0.538408 7.95262 0.928933 8.34315L7.29289 14.7071ZM7 4.37114e-08L7 14L9 14L9 -4.37114e-08L7 4.37114e-08Z"
          fill="#1F1D1A"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
const router = useRouter();

const backToMainPage = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped>
.topLeftButton {
  grid-area: top-button;

  display: flex;
  align-items: flex-end;

  @include md {
    position: absolute;
    margin-top: 7.5px;
  }

  &__button {
    width: 60px;
    height: 60px;

    border-radius: 100%;
    border: none;

    background-color: transparent;
    border: 1.5px solid var(--theme-color);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    *.page-enter-from &,
    *.page-leave-to &,
    *.between-projects-enter-from &,
    *.between-projects-leave-to & {
      transform: translateY(100%);
      opacity: 0;
    }

    *.page-enter-active &,
    *.page-leave-active &,
    *.between-projects-enter-active &,
    *.between-projects-leave-active & {
      transition: 1.5s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }

    @include md {
      width: 30px;
      height: 30px;
    }

    svg {
      transform: rotate(90deg);

      animation-timing-function: ease;
      animation-duration: 0.5s;
      animation-fill-mode: both;

      @include md {
        width: 10px;
      }

      path {
        fill: var(--theme-color);
      }
    }

    @include hover {
      svg {
        animation-name: anim-button;
      }
    }
  }
}

@keyframes anim-button {
  0% {
    transform: translate3d(0, 0, 0) rotate(90deg);
    opacity: 1;
  }
  50% {
    transform: translate3d(-100%, 0, 0) rotate(90deg);
    opacity: 0;
  }
  50.0001% {
    transform: translate3d(100%, 0, 0) rotate(90deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(90deg);
    opacity: 1;
  }
}
</style>
