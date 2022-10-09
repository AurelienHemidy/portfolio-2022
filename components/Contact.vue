<template>
  <div class="contact-container">
    <h1 class="t">Contact</h1>

    <h4 class="email">aurelien@hemidy.fr</h4>

    <h6 class="social">Social</h6>

    <ul class="list">
      <li class="list-item">Instagram</li>
      <li class="list-item">Linkedin</li>
      <li class="list-item">Github</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';

.contact-container {
  margin-top: 150px;
  margin-left: calc(100% / 12);
  margin-bottom: calc(100vw / 12);
  .t {
    position: relative;

    margin-bottom: 50px;

    // font-size: 6rem;
    font-size: min(6rem, 15vw);
    color: $primary-color;
    text-transform: uppercase;
  }

  .email {
    // font-size: 2rem;
    font-size: min(2rem, 5vw);
    margin-bottom: 50px;
  }

  .social {
    font-size: min(2rem, 12vw);
    color: $primary-color;

    margin-bottom: 20px;
  }

  .list {
    list-style: none;
    &-item {
      font-size: 1rem;
      color: $secondary-color;
      margin-bottom: 10px;
      font-family: 'Open Sans';
    }
  }
}

@media only screen and (max-width: 800px) {
  .contact-container {
    margin-top: 75px;
  }
}
</style>
