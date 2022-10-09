<template>
  <div class="work-container">
    <h1 class="t">Work</h1>

    <Project isFirst :number="1" title="Forgotten Skies" context="Gobelins, l'Ecole de l'Image" date="2022" />
    <Project :number="2" title="Regars d'artisans" context="Gobelins, l'Ecole de l'Image" date="2021" />
    <Project :number="3" title="A.D's Portfolio" context="Freelance" date="2020" />
    <Project :number="4" title="Mécanima" context="Gobelins, l'Ecole de l'Image" date="2020" />
    <Project :number="5" title="Burger Water" context="Gobelins, l'Ecole de l'Image" date="2019" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';

.work-container {
  margin-top: 150px;
  .t {
    position: relative;

    left: calc(100% / 12);

    margin-bottom: 50px;

    // font-size: 6rem;
    font-size: min(6rem, 15vw);
    color: $primary-color;
    text-transform: uppercase;
  }
}

@media only screen and (max-width: 800px) {
  .work-container {
    margin-top: 25px;
  }
}
</style>
