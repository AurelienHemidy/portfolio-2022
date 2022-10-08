<template>
  <div class="container">
    <div class="bottom-line"></div>

    <div class="date">
      <h5 class="t">2022</h5>
    </div>

    <div class="bottom-button">
      <button class="button" @mouseenter="onMouseEnterButton" @mouseleave="onMouseLeaveButton">
        <img src="~/assets/background/arrow-icon.svg" alt="arrow icon" ref="buttonBottomLeft" />
      </button>
    </div>

    <div class="name-dev">
      <h1 class="t">Aurélien</h1>
      <h1 class="t1">Hémidy</h1>
    </div>

    <div class="image">
      <img
        src="~/assets/background/image-of-me.png"
        alt="arrow icon"
        @mouseenter="onMouseEnterImage"
        @mouseleave="onMouseLeaveImage"
      />
    </div>

    <div class="projects">
      <p class="t" ref="projectTextLeft">PROJECTS</p>
    </div>

    <div class="view">
      <div class="line" ref="rightLine"></div>
      <p class="t" ref="rightLineText">View</p>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';

const rightLine = ref(null);
const rightLineText = ref(null);
const buttonBottomLeft = ref(null);
const projectTextLeft = ref(null);

const tlRightLine = gsap.timeline({ paused: true });
const tlButtonBottomLeft = gsap.timeline({ paused: true });

onMounted(() => {
  tlRightLine
    .to(rightLine.value, {
      scaleX: 1.5,
      opacity: 1,
      duration: 0.3,
      ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
    })
    .to(projectTextLeft.value, {
      letterSpacing: '5px',
      duration: 0.4,
      ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
    })
    .to(
      rightLine.value,
      {
        scaleX: 1,
        x: '50%',
        duration: 0.3,
        ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
      },
      '<'
    )
    .to(
      rightLineText.value,
      {
        x: '0%',
        opacity: 1,
        duration: 0.3,
        ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
      },
      '<'
    );

  tlButtonBottomLeft
    .to(buttonBottomLeft.value, {
      y: '100%',
      opacity: 0,
      duration: 0.2,
      ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
    })
    .to(buttonBottomLeft.value, {
      y: '-100%',
      duration: 0,
    })
    .to(buttonBottomLeft.value, {
      y: '0',
      opacity: 1,
      duration: 0.2,
      ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
    });
});

const onMouseEnterImage = (e) => {
  gsap.to(e.target, { scale: 1, duration: 0.3, ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)' });

  tlRightLine.play();
};

const onMouseLeaveImage = (e) => {
  gsap.to(e.target, { scale: 1.05, duration: 0.3, ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)' });

  tlRightLine.reverse();
};

const onMouseEnterButton = (e) => {
  tlButtonBottomLeft.play();
};

const onMouseLeaveButton = (e) => {
  tlButtonBottomLeft.reverse();
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . . . . . . . . . . .'
    '. . . . . . . . . . . .'
    '. . . . . . image image image . . .'
    '. name-dev name-dev name-dev name-dev name-dev image image image . . .'
    '. name-dev name-dev name-dev name-dev name-dev image image image projects . .'
    '. name-dev name-dev name-dev name-dev name-dev image image image projects view .'
    '. . . . . . image image image projects . .'
    '. . . . . . image image image . . .'
    '. . . . . . image image image . . .'
    '. bottom-button . . . . . . . . date .'
    '. . . . . . . . . . . .'
    '. bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line .';

  height: 100vh;
}
.bottom-line {
  grid-area: bottom-line;

  background-color: $primary-color;

  position: relative;
  top: 0;

  width: 100%;
  height: 1px;

  opacity: 0.5;
}
.date {
  grid-area: date;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  .t {
    font-size: 2rem;
    font-weight: 700;
  }
}
.bottom-button {
  grid-area: bottom-button;

  display: flex;
  align-items: flex-end;

  .button {
    width: 60px;
    height: 60px;

    border-radius: 100%;
    border: none;

    background-color: $primary-color;

    cursor: pointer;
  }
}
.name-dev {
  grid-area: name-dev;

  font-family: 'Butler';
  font-size: min(4rem, 4vw);

  z-index: 9998;

  .t1 {
    position: relative;
    &::after {
      content: 'FRONT-END DEVELOPER';

      font-family: 'Oswald';
      color: $primary-color;

      position: absolute;
      // right: 0;
      bottom: min(25px, 1.8vw);

      font-size: min(1rem, 1.3vw);
    }
  }
}
.image {
  grid-area: image;
  // background-color: blue;
  overflow: hidden;

  margin-left: 25px;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    transform: scale(1.05);

    object-fit: cover;
  }
}
.projects {
  grid-area: projects;
  // background-color: rgb(0, 204, 255);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  // position: relative;

  .t {
    color: $primary-color;
    font-weight: 500;
    font-size: 2rem;
    // letter-spacing: 10px;
    position: absolute;

    transform: rotate(90deg) translateY(-50%);
  }
}
.view {
  grid-area: view;
  // background-color: rgb(255, 94, 0);
  display: flex;
  align-items: center;
  margin-left: 15px;

  .line {
    width: 50px;
    height: 1px;

    opacity: 0;

    background-color: $primary-color;

    margin-right: 15px;

    transform: translateX(-50%);
    transform-origin: left;
  }

  .t {
    color: $primary-color;

    transform: translateX(20%);

    opacity: 0;
  }
}

@media only screen and (max-width: 1000px) {
  .container {
    grid-template-areas:
      '. . . . . . . . . . . .'
      '. . . . . . . . . . . .'
      '. . . . . . image image image . . .'
      '. name-dev name-dev name-dev name-dev name-dev image image image projects . .'
      '. name-dev name-dev name-dev name-dev name-dev image image image projects view .'
      '. name-dev name-dev name-dev name-dev name-dev image image image projects . .'
      '. . . . . . image image image . . .'
      '. . . . . . . . . . . .'
      '. . . . . . . . . . . .'
      '. bottom-button . . . . . . . . date .'
      '. . . . . . . . . . . .'
      '. bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line .';
  }
}

@media only screen and (max-width: 800px) {
  .container {
    grid-template-areas:
      '. . . . . . . . . . . .'
      '. name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev .'
      '. name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev .'
      '. . . . . . . . . . . .'
      '. . . image image image image image image . . .'
      '. . . image image image image image image projects . .'
      '. . . image image image image image image projects . .'
      '. . . image image image image image image projects . .'
      '. . . image image image image image image . . .'
      '. bottom-button . . . . . . . . date .'
      '. . . . . . . . . . . .'
      '. bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line .';
    .name-dev {
      font-size: min(3rem, 5vw);
      .t1 {
        &::after {
          font-size: 0.7rem;
        }
      }
    }

    .bottom-button {
      button {
        width: 30px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 40%;
        }
      }
    }
    .view {
      display: none;
    }
  }
}

@media only screen and (max-width: 400px) {
  .container {
    grid-template-areas:
      '. . . . . . . . . . . .'
      '. name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev .'
      '. name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev name-dev .'
      '. . . . . . . . . . . .'
      '. . image image image image image image image image . .'
      '. . image image image image image image image image projects .'
      '. . image image image image image image image image projects .'
      '. . image image image image image image image image projects .'
      '. . image image image image image image image image . .'
      '. bottom-button . . . . . . . . date .'
      '. . . . . . . . . . . .'
      '. bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line bottom-line .';

    .image {
      margin-left: 0px;
    }
    .name-dev {
      font-size: 1.8rem;
      .t1 {
        &::after {
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>
