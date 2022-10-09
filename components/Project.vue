<template>
  <div class="container">
    <div class="number"><h3 class="t">\ 01</h3></div>
    <div class="name-context">
      <h5 class="t">Forgotten Skies</h5>
      <p class="t2">Gobelins, l'Ecole de l'Image</p>
    </div>
    <div class="date">
      <p class="t">2022</p>
    </div>
    <div class="image">
      <img src="~/assets/background/forgotten-skies-image.png" alt="forgotten skies img" />
    </div>
    <div class="arrow">
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L15.0711 8.34315C15.4616 7.95262 15.4616 7.31946 15.0711 6.92893C14.6805 6.53841 14.0474 6.53841 13.6569 6.92893L8 12.5858L2.34315 6.92893C1.95262 6.53841 1.31946 6.53841 0.928932 6.92893C0.538408 7.31946 0.538408 7.95262 0.928933 8.34315L7.29289 14.7071ZM7 4.37114e-08L7 14L9 14L9 -4.37114e-08L7 4.37114e-08Z"
          fill="#1F1D1A"
        />
      </svg>
    </div>

    <div class="lines">
      <div class="line top-line"></div>
      <div class="line bottom-line"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '. . number . name-context name-context date . image . arrow .';

  position: relative;

  //   height: 150px;
  padding: 25px 0;

  //   margin-bottom: 20px;

  .number {
    grid-area: 1 / 3 / 2 / 4;
    // background-color: red;

    .t {
      font-family: 'Butler';
      color: $primary-color;
      font-size: 2.5rem;
      font-weight: 900;
    }
  }
  .name-context {
    grid-area: 1 / 5 / 2 / 7;
    // background-color: blue;

    .t {
      font-size: 2rem;

      margin-bottom: 20px;
    }

    .t2 {
      font-family: 'Open Sans';
      font-size: 1rem;
    }
  }
  .date {
    grid-area: 1 / 7 / 2 / 8;
    // background-color: green;
    display: flex;
    justify-content: flex-end;

    .t {
      font-family: 'Open Sans';
      font-size: 1rem;
      line-height: 3rem;
    }
  }
  .image {
    grid-area: 1 / 9 / 2 / 10;
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
    grid-area: 1 / 11 / 2 / 12;
    // background-color: pink;

    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    svg {
      //   transform: rotate(45deg);
      transition: 0.3s ease-in-out;
      path {
        fill: $primary-color;
      }
    }
  }

  .lines {
    .line {
      position: absolute;

      left: calc(100% / 12 * 2);
      right: calc(100% / 12 * 1);

      height: 1px;

      background-color: $primary-color;
    }

    .top-line {
      top: 0;
    }
    .bottom-line {
      bottom: 0;
    }
  }
}
</style>
