<template>
  <NuxtLink :to="link" class="link">
    <div
      class="project-container"
      data-scroll
      data-scroll-offset="70"
      @mouseenter="onMouseEnterProject"
      @mouseleave="onMouseLeaveProject"
    >
      <div class="number">
        <h3 class="t" ref="number">\ 0{{ props.number }}</h3>
      </div>
      <div class="name-context">
        <h5 class="t">{{ props.title }}</h5>
        <p class="t2">{{ props.context }}</p>
      </div>
      <div class="date">
        <p class="t">{{ props.date }}</p>
      </div>
      <div class="image">
        <img src="~/assets/background/forgotten-skies-image.png" alt="forgotten skies img" ref="image" />
      </div>
      <div class="arrow">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" ref="arrow">
          <path
            d="M7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L15.0711 8.34315C15.4616 7.95262 15.4616 7.31946 15.0711 6.92893C14.6805 6.53841 14.0474 6.53841 13.6569 6.92893L8 12.5858L2.34315 6.92893C1.95262 6.53841 1.31946 6.53841 0.928932 6.92893C0.538408 7.31946 0.538408 7.95262 0.928933 8.34315L7.29289 14.7071ZM7 4.37114e-08L7 14L9 14L9 -4.37114e-08L7 4.37114e-08Z"
            fill="#1F1D1A"
          />
        </svg>
      </div>

      <div class="lines">
        <div class="line top-line" :class="isFirst ? 'isFirst' : ''"></div>
        <div class="line bottom-line"></div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import gsap from 'gsap';

const props = defineProps({
  isFirst: Boolean,
  number: Number,
  title: String,
  context: String,
  date: Number,
  slug: String,
  //   image: Image,
});

const link = `/projects/${props.slug}`;

const number = ref(null);
const image = ref(null);
const arrow = ref(null);

const onMouseEnterProject = () => {
  gsap.to(number.value, {
    x: '20%',
    duration: 0.5,
    ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
  });
  gsap.to(image.value, {
    x: '-20%',
    duration: 0.5,
    ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
  });
  gsap.to(arrow.value, {
    rotate: '45deg',
    duration: 0.5,
    ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
  });
};

const onMouseLeaveProject = () => {
  gsap.to(number.value, {
    x: '0',
    duration: 0.5,
    ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
  });
  gsap.to(image.value, {
    x: '0',
    duration: 0.5,
    ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
  });
  gsap.to(arrow.value, {
    rotate: '0',
    duration: 0.5,
    ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
  });
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';

.project-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'number . name-context name-context date . image . arrow';

  margin-left: calc(100% / 12 * 2);
  margin-right: calc(100% / 12);

  position: relative;

  //   height: 150px;
  padding: 25px 0;

  opacity: 0;
  transform: translateY(20%);
  transition-duration: 0.75s;
  transition-timing-function: cubic-bezier(0.62, 0.05, 0.01, 0.99);
  transition-property: opacity, transform;

  &.is-inview {
    opacity: 1;
    transform: translateY(0);
  }

  .number {
    grid-area: number;
    // background-color: red;

    .t {
      font-family: 'Butler';
      color: $primary-color;
      font-size: 2.5rem;
      font-size: min(2.5rem, 4vw);
      font-weight: 900;

      white-space: nowrap;
    }
  }
  .name-context {
    grid-area: name-context;
    // background-color: blue;

    .t {
      //   font-size: 2rem;
      font-size: min(2rem, 2vw);

      margin-bottom: 20px;

      line-height: 2.2rem;
      line-height: min(2.2rem, 3vw);
    }

    .t2 {
      font-family: 'Open Sans';
      //   font-size: 1rem;
      font-size: min(1rem, 1.25vw);
    }
  }
  .date {
    grid-area: date;
    // background-color: green;
    display: flex;
    justify-content: flex-end;

    .t {
      font-family: 'Open Sans';
      font-size: 1rem;
      font-size: min(1rem, 1.5vw);
      line-height: 2.5rem;
    }
  }
  .image {
    grid-area: image;
    // background-color: yellow;
    // display: flex;
    // align-items: center;

    img {
      width: calc(100% + 50px);
      height: 100%;

      transform: translateX(-25px);

      object-fit: cover;
    }
  }
  .arrow {
    grid-area: arrow;
    // background-color: pink;

    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    svg {
      path {
        fill: $primary-color;
      }
    }
  }

  .lines {
    .line {
      position: absolute;
      left: 0;

      width: 100%;

      height: 1px;

      background-color: $primary-color;
    }

    .top-line {
      top: 0;
      display: none;
    }
    .bottom-line {
      bottom: 0;
    }

    .isFirst {
      display: block;
    }
  }
}

@media only screen and (max-width: 800px) {
  .project-container {
    margin-left: calc(100% / 12);
  }
}

@media only screen and (max-width: 500px) {
  .project-container {
    grid-template-areas: 'number . name-context name-context . . . date arrow';

    height: 100px;

    .number {
      .t {
        font-size: 1.2rem;
      }
    }

    .name-context {
      .t {
        font-size: 1.6875rem;
        line-height: 1.5625rem;
        letter-spacing: -1.35px;
      }
      .t2 {
        display: none;
      }
    }

    .date {
      .t {
        font-size: 0.7rem;
      }
    }

    .image {
      display: none;
    }
  }
}
</style>
