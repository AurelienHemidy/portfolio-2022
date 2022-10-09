<template>
  <div class="about-container" @wheel="onScroll">
    <BackgroundLines isAbout />
    <div class="top-button">
      <button class="button">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" ref="arrow">
          <path
            d="M7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L15.0711 8.34315C15.4616 7.95262 15.4616 7.31946 15.0711 6.92893C14.6805 6.53841 14.0474 6.53841 13.6569 6.92893L8 12.5858L2.34315 6.92893C1.95262 6.53841 1.31946 6.53841 0.928932 6.92893C0.538408 7.31946 0.538408 7.95262 0.928933 8.34315L7.29289 14.7071ZM7 4.37114e-08L7 14L9 14L9 -4.37114e-08L7 4.37114e-08Z"
            fill="#1F1D1A"
          />
        </svg>
      </button>
    </div>
    <div class="rights">
      <p class="t">© Aurélien Hémidy</p>
      <div class="line"></div>
      <p class="t">All rights reserved</p>
    </div>
    <div class="projects">
      <h5 class="t">THE PROJECT</h5>
      <p class="t2">
        Telling stories threw web experiences is the ultimate goal for me. And As I will do it, it was not alone.
        Telling stories threw web experiences is the ultimate goal for me. Telling stories threw web experiences is the
        ultimate goal for me.
      </p>
    </div>
    <div class="why">
      <h5 class="t">WHY ?</h5>
      <p class="t2">
        Telling stories threw web experiences is the ultimate goal for me. And As I will do it, it was not alone.
        Telling stories threw web experiences is the ultimate goal for me. Telling stories threw web experiences is the
        ultimate goal for me.
      </p>
    </div>
    <div class="tech-stack">
      <h5 class="t">TECH STACK</h5>
      <div class="tag-list">
        <div class="tag"><span>NuxtJS</span></div>
        <div class="tag"><span>ThreeJS</span></div>
        <div class="tag"><span>SCSS</span></div>
        <div class="tag"><span>TypeScript</span></div>
        <div class="tag"><span>TypeScript</span></div>
        <div class="tag"><span>TypeScript</span></div>
        <div class="tag"><span>TypeScript</span></div>
      </div>
    </div>
    <div class="title">
      <h1 class="t">Forgotten Skies</h1>
      <h5 class="t2">Gobelins, l'Ecole de l'Image</h5>
      <p class="t3">2022</p>
    </div>
    <div class="image">
      <img src="~/assets/background/forgotten-skies-image.png" alt="forgotten skies img" ref="image" />
    </div>
    <div class="previous-project"></div>
    <div class="next-project"></div>
    <div class="slider">
      <div class="slider-main-line">
        <div class="slide" ref="slide"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
const slide = ref(null);

const onScroll = () => {
  // console.log('whelll');
  // gsap.to(slide.value, {
  //   y: '+=100%',
  //   duration: 0.1,
  //   ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
  // });
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';
.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.7fr 1.3fr 1fr 1fr 1fr 0.5fr 1fr 1.3fr 0.5fr 1fr 1.5fr 1fr 1.5fr 0.7fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . . . . previous-project previous-project previous-project previous-project previous-project previous-project .'
    '. top-button . . . . . . title title title .'
    '. . . . . . . . title title title .'
    '. projects projects projects . image image image image image image .'
    '. projects projects projects . image image image image image image .'
    '. . . . . image image image image image image slider'
    '. why why why . image image image image image image slider'
    '. why why why . image image image image image image slider'
    '. . . . . image image image image image image .'
    '. tech-stack tech-stack tech-stack . image image image image image image .'
    '. tech-stack tech-stack tech-stack . image image image image image image .'
    '. . . . . . . . . . . .'
    '. . . . . . . . . . . .'
    '. . rights rights . next-projects next-projects next-projects next-projects next-projects next-projects .';

  height: 100vh;

  .top-button {
    grid-area: top-button;
    // background-color: red;

    display: flex;
    align-items: flex-end;

    .button {
      width: 60px;
      height: 60px;

      border-radius: 100%;
      border: none;

      background-color: transparent;
      border: 1.5px solid $primary-color;

      cursor: pointer;

      svg {
        transform: rotate(90deg);
        path {
          fill: $primary-color;
        }
      }
    }
  }
  .rights {
    grid-area: rights;
    // background-color: green;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    padding-bottom: 10px;

    .t {
      font-size: 0.8rem;
      font-family: 'Open Sans';
      color: $primary-color;
    }

    .line {
      width: 15px;
      height: 1px;
      margin: 7.5px 10px;

      background-color: $primary-color;
    }
  }
  .projects {
    grid-area: projects;
    // background-color: purple;

    .t {
      font-size: 2rem;

      margin-bottom: 15px;
    }

    .t2 {
      font-family: 'Open Sans';
      font-weight: 300;
      font-size: 0.9rem;
    }
  }
  .why {
    grid-area: why;
    // background-color: aqua;
    .t {
      font-size: 2rem;

      margin-bottom: 15px;
    }

    .t2 {
      font-size: 0.9rem;
      font-family: 'Open Sans';
      font-weight: 300;
    }
  }
  .tech-stack {
    grid-area: tech-stack;
    // background-color: orange;

    .t {
      font-size: 2rem;

      margin-bottom: 15px;
    }
    .tag-list {
      display: flex;
      flex-wrap: wrap;

      .tag {
        padding: 5px 15px;
        margin: 0 15px 15px 0;

        border: 1px solid $primary-color;

        span {
          font-family: 'Open Sans';
          // font-size: 1rem;
          font-weight: 300;
        }
      }
    }
  }
  .title {
    grid-area: title;
    // background-color: blue;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .t {
      font-size: 3rem;
    }

    .t2 {
      font-size: 1.2rem;
      color: $primary-color;

      margin-bottom: 10px;
    }

    .t3 {
      font-size: 1.2rem;
      font-weight: 900;
    }
  }
  .image {
    grid-area: image;
    // background-color: chocolate;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .previous-project {
    grid-area: previous-project;
    background-color: rgb(29, 34, 33);
  }
  .next-project {
    grid-area: next-project;
    background-color: rgb(29, 34, 33);
  }

  .slider {
    grid-area: slider;
    // background-color: red;

    display: flex;
    align-items: center;
    justify-content: center;

    &-main-line {
      height: 100%;
      width: 3px;

      background-color: #1b2c1e;

      .slide {
        height: 20%;
        width: 3px;

        position: relative;

        background-color: $primary-color;

        transition: 0.3s cubic-bezier(0.62, 0.05, 0.01, 0.99);

        // transform: translateY(100%);
      }
    }
  }
}
</style>
