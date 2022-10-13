<template>
  <div class="contactContainer">
    <h1 class="contactContainer__title"><TextRevealAnimation text="Contact"></TextRevealAnimation></h1>

    <h4 class="contactContainer__email"><TextRevealAnimation text="aurelien@hemidy.fr"></TextRevealAnimation></h4>

    <h6 class="contactContainer__social"><TextRevealAnimation text="Social"></TextRevealAnimation></h6>

    <ul class="contactContainer__socialList">
      <li class="contactContainer__socialList--item">
        <TextRevealAnimation text="Instagram" :offset="20"></TextRevealAnimation>
      </li>
      <li class="contactContainer__socialList--item">
        <TextRevealAnimation text="Linkedin" :offset="20"></TextRevealAnimation>
      </li>
      <li class="contactContainer__socialList--item">
        <TextRevealAnimation text="Github" :offset="20"></TextRevealAnimation>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.contactContainer {
  margin-top: 150px;
  margin-left: calc(100% / 12);
  //   margin-bottom: calc(100vw / 12);

  @include md {
    margin-top: 75px;
  }

  &__title {
    position: relative;

    margin-bottom: 50px;

    font-size: min(6rem, 15vw);
    color: $primary-color;
    text-transform: uppercase;
  }

  &__email {
    font-size: min(2rem, 5vw);

    margin-bottom: 50px;
  }

  &__social {
    font-size: min(2rem, 12vw);
    color: $primary-color;

    margin-bottom: 20px;
  }

  &__socialList {
    list-style: none;

    &--item {
      font-size: 1rem;
      color: $secondary-color;
      font-family: 'Open Sans';

      margin-bottom: 10px;
    }
  }
}
</style>
