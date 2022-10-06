<template>
  <div class="project-list app">
    <div class="project-left">
      <h4 class="n">\ 01</h4>
      <h5 class="name">Forgotten Skies</h5>
      <p class="where">Gobelins, l'Ecole de l'Image</p>
      <p class="date">2022</p>
      <img class="project-image" src="~/assets/background/image-projects.jpg" alt="" />
    </div>

    <div class="project-right">
      <h4 class="n">\ 02</h4>
      <h5 class="name">Regards d'artisans</h5>
      <p class="where">Gobelins, l'Ecole de l'Image</p>
      <p class="date">2021</p>
      <img class="project-image" src="~/assets/background/image-projects.jpg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';
.project-list {
  margin-top: 100px;

  grid-column-start: 4;
  grid-column-end: 10;
  //   grid-row-start: 2;

  .project-left {
    grid-column-start: 1;
    grid-column-end: 7;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    padding-right: 25px;

    .n {
      color: $primary-color;
      font-weight: 900;
      font-size: 2.5rem;

      margin-bottom: 10px;
    }

    .name {
      color: $secondary-color;
      font-weight: 900;
      font-size: 1.5rem;

      margin-bottom: 10px;
    }

    .where,
    .date {
      color: $secondary-color;

      font-family: 'Open Sans';
      font-size: 0.8rem;
      font-weight: 400;

      margin-bottom: 10px;
    }

    .project-image {
      width: 100%;
      height: 300px;

      margin-top: 20px;
      object-fit: cover;
    }
  }

  .project-right {
    grid-column-start: 7;
    grid-column-end: 13;

    grid-row-start: 2;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    // transform: translateY(-150px);

    padding-left: 25px;

    .n {
      color: $primary-color;
      font-weight: 900;
      font-size: 2.5rem;

      margin-bottom: 10px;
    }

    .name {
      color: $secondary-color;
      font-weight: 900;
      font-size: 1.5rem;

      margin-bottom: 10px;
    }

    .where,
    .date {
      color: $secondary-color;

      font-family: 'Open Sans';
      font-size: 0.8rem;
      font-weight: 400;

      margin-bottom: 10px;
    }

    .project-image {
      width: 100%;
      height: 300px;

      margin-top: 20px;
      object-fit: cover;
    }
  }
}
</style>
