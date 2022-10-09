<template>
  <div class="work-container">
    <h1 class="t"><TextRevealAnimation text="Work"></TextRevealAnimation></h1>

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

    // overflow: hidden;

    // span {
    //   transform: translateY(80%);

    //   display: block;

    //   transition-duration: 1.5s;
    //   transition-timing-function: cubic-bezier(0.62, 0.05, 0.01, 0.99);
    //   transition-property: transform;
    // }

    // &.is-inview {
    //   span {
    //     transform: translateY(0);
    //   }
    // }
  }
}

@media only screen and (max-width: 800px) {
  .work-container {
    margin-top: 25px;
  }
}
</style>
