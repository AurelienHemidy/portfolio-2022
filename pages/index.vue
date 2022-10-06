<template>
  <div class="app landing">
    <!-- <GridDebugger /> -->
    <div class="l-t1">
      <p class="t1">Forge your</p>
      <p class="t2">projects</p>
      <p class="t3">with</p>
      <p class="t4">me</p>
    </div>
    <div class="right-t">
      <div class="l-t2">
        <h5 class="t1">BUILDING</h5>
        <p class="t2">Telling stories threw web experiences is the ultimate goal for me.</p>
        <p class="t2">Building together something greater than us.</p>
      </div>

      <div class="l-t3">
        <h5 class="t1">ARTISANAT</h5>
        <p class="t2">Créer, construire, parfaire</p>
        <p class="t2">L’artisanat que je cultive</p>
        <p class="t2">Héritier d’un savoir-faire</p>
        <p class="t2">Pour des histoires qui vivent</p>
      </div>
    </div>
  </div>

  <!-- <img class="svg-background" src="~/assets/background/background.svg" alt="background svg" /> -->

  <Projects />
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';

.landing {
  // height: 80vh;
  margin-top: 100px;
}
.l-t1 {
  color: $secondary-color;

  font-size: 4.5rem;
  font-weight: 900;

  grid-column-start: 2;
  grid-column-end: 6;

  .t1,
  .t3 {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: -10px;
      bottom: -10px;

      width: 390px;
      height: 40%;

      background-color: $primary-color;
      z-index: -1;
    }
  }

  .t3 {
    &::after {
      bottom: 0;
      width: 190px;
    }
  }
}

.right-t {
  margin-top: 40px;

  grid-column-start: 9;
  grid-column-end: 12;

  margin-left: 25px;

  .l-t2 {
    grid-column-start: 9;
    grid-column-end: 12;
    grid-row-start: 2;
    grid-row-end: 3;

    word-break: keep-all;

    color: white;

    width: 100%;

    margin-bottom: 50px;

    .t1 {
      font-size: 1.2rem;
      font-weight: 700;

      margin-bottom: 20px;
    }

    .t2 {
      font-family: 'Open Sans';
      font-weight: 300;

      margin-bottom: 10px;
    }
  }

  .l-t3 {
    grid-column-start: 9;
    grid-column-end: 12;
    grid-row-start: 3;
    grid-row-end: 4;

    width: 100%;

    color: white;

    opacity: 1;

    .t1 {
      font-size: 1.2rem;
      margin-bottom: 20px;
      font-weight: 700;
    }

    .t2 {
      font-family: 'Open Sans';
      font-weight: 300;
      margin-bottom: 12px;
    }

    // background-color: rgb(0, 255, 0);
  }
}

.svg-background {
  position: absolute;
  left: 10%;
  top: 0;

  // transform: translateX(-50%);
  user-select: none;

  min-width: 100%;
  height: 120vh;

  z-index: -2;

  opacity: 0.6;
}

@media only screen and (max-width: 1200px) {
  .l-t1 {
    font-size: 3rem;

    .t1,
    .t3 {
      &::after {
        bottom: -5px;
        width: 280px;
      }
    }

    .t3 {
      &::after {
        bottom: 0;
        width: 140px;
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  .l-t1 {
    font-size: 2.5rem;

    grid-column-start: 2;
    grid-column-end: 11;

    margin-bottom: 100px;

    .t1,
    .t3 {
      &::after {
        bottom: -5px;
        width: 235px;
      }
    }

    .t3 {
      &::after {
        bottom: 0;
        width: 115px;
      }
    }
  }

  .right-t {
    grid-column-start: 2;
    grid-column-end: 12;
    grid-row-start: 2;
    grid-row-end: 3;

    margin-left: 0;

    .l-t3 {
      text-align: center;
    }
  }

  .svg-background {
    position: absolute;
    left: 0;
    top: 0;

    // transform: translateX(-50%);
    user-select: none;

    // background-color: red;
    min-width: 100%;
    max-width: 100%;

    // max-width: 70%;
    height: 90%;
  }
}
</style>
