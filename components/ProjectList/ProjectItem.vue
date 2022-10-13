<template>
  <NuxtLink :to="link" class="link linkProjects">
    <div class="projectListItem" data-scroll data-scroll-offset="70" :style="`--delay: ${0.1 * props.delay}s`">
      <div class="projectListItem__index">
        <h3 class="projectListItem__index--text" ref="number">\ 0{{ props.number }}</h3>
      </div>

      <div class="projectListItem__title-context">
        <h5 class="projectListItem__title-context--title">{{ props.title }}</h5>
        <p class="projectListItem__title-context--context">{{ props.context }}</p>
      </div>

      <div class="projectListItem__date">
        <p class="projectListItem__date--text">{{ props.date }}</p>
      </div>

      <div class="projectListItem__image">
        <picture class="projectListItem__image--picture">
          <img src="~/assets/background/forgotten-skies-image.png" alt="forgotten skies img" ref="image" />
        </picture>
      </div>

      <div class="projectListItem__arrow">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" ref="arrow">
          <path
            d="M7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L15.0711 8.34315C15.4616 7.95262 15.4616 7.31946 15.0711 6.92893C14.6805 6.53841 14.0474 6.53841 13.6569 6.92893L8 12.5858L2.34315 6.92893C1.95262 6.53841 1.31946 6.53841 0.928932 6.92893C0.538408 7.31946 0.538408 7.95262 0.928933 8.34315L7.29289 14.7071ZM7 4.37114e-08L7 14L9 14L9 -4.37114e-08L7 4.37114e-08Z"
            fill="#1F1D1A"
          />
        </svg>
      </div>

      <div class="projectListItem__lines">
        <div class="line top-line" :class="isFirst ? 'isFirst' : ''"></div>
        <div class="line bottom-line"></div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  isFirst: Boolean,
  number: Number,
  title: String,
  context: String,
  date: Number,
  slug: String,
  delay: Number,
});

const link = `/projects/${props.slug}`;
</script>

<style lang="scss" scoped>
.projectListItem {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'number . name-context name-context date . image . arrow';

  // margin-left: calc(100% / 12 * 2);
  // margin-right: calc(100% / 12);

  position: relative;

  padding: 25px 0;

  background-color: $background-color;

  transform-origin: left;

  // min-height: 140px;

  // transition: 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99) var(--delay + 0.2);

  @include hover {
    &::after {
      transform-origin: left;
      // transform: scaleX(1);
      // opacity: 0.05;
    }
  }

  *.page-enter-from &,
  *.page-leave-to & {
    transform: scaleX(0);
  }

  *.page-leave-active &,
  *.page-enter-active & {
    transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99) var(--delay);
  }

  &::after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: $primary-color;

    transform-origin: left;
    transform: scaleX(0);

    transition: 0.7s cubic-bezier(0.62, 0.05, 0.01, 0.99) var(--delay);

    *.page-enter-from &,
    *.page-leave-to & {
      transform: scaleX(1);
      opacity: 1;
    }

    *.page-leave-active & {
      transform-origin: right;
      transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }
    *.page-enter-active & {
      transform-origin: left;
      transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
    }
  }

  @include sm {
    grid-template-areas: 'number . name-context name-context . . . date arrow';

    height: 100px;
  }

  @include hover {
    .projectListItem__index {
      transform: translateX(10%);
    }

    .projectListItem__title-context--title {
      transform: translateX(10%);
      letter-spacing: 1.5px;
    }
    .projectListItem__title-context--context {
      transform: translateX(10%);
    }

    .projectListItem__date--text {
      transform: translateX(10%);
    }

    // .projectListItem__image {
    //   transform: scale(0.9);
    //   img {
    //     transform: scale(1.2);
    //   }
    // }

    .projectListItem__arrow {
      svg {
        transform: rotate(45deg);
      }
    }
  }

  &__index {
    grid-area: number;

    transition: 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99);

    &--text {
      font-family: 'Butler';
      color: $primary-color;
      font-size: 2.5rem;
      font-size: min(2.5rem, 4vw);
      font-weight: 900;

      white-space: nowrap;

      @include sm {
        font-size: 1.2rem;
      }
    }
  }

  &__title-context {
    grid-area: name-context;

    &--title {
      font-size: min(2rem, 2vw);
      white-space: nowrap;

      margin-bottom: 20px;

      line-height: 2.2rem;
      line-height: min(2.2rem, 3vw);

      transition: 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99);

      @include sm {
        font-size: 1.6875rem;
        line-height: 1.5625rem;
        letter-spacing: -1.35px;
        white-space: initial;
      }
    }

    &--context {
      font-family: 'Open Sans';
      font-size: min(1rem, 1.25vw);

      transition: 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99);

      @include sm {
        display: none;
      }
    }
  }

  &__date {
    grid-area: date;

    display: flex;
    justify-content: flex-end;

    &--text {
      font-family: 'Open Sans';
      font-size: 1rem;
      font-size: min(1rem, 1.5vw);
      line-height: 2.5rem;

      transition: 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99);

      @include sm {
        font-size: 0.7rem;
      }
    }
  }

  &__image {
    grid-area: image;

    position: relative;

    transition: 1s cubic-bezier(0.62, 0.05, 0.01, 0.99);

    @include sm {
      display: none;
    }

    &--picture {
      width: 100%;
      max-width: 8rem;
      height: 100%;

      position: absolute;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: 1s cubic-bezier(0.62, 0.05, 0.01, 0.99);
      }
    }
  }
  &__arrow {
    grid-area: arrow;

    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    svg {
      transition: 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99) 0.2s;
      path {
        fill: $primary-color;
      }
    }
  }

  &__lines {
    & .line {
      position: absolute;
      left: 0;

      width: 100%;

      height: 1px;

      background-color: $primary-color;
    }

    & .top-line {
      top: 0;
      display: none;
    }
    & .bottom-line {
      bottom: 0;
    }

    & .isFirst {
      display: block;
    }
  }
}
</style>
