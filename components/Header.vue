<template>
  <nav class="nav">
    <h3 class="title">Aurélien Hémidy</h3>
    <h4 class="subtitle">Web Developer</h4>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';
.nav {
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  padding: 20px calc(100 / 12 * 1%);
  .title {
    color: $secondary-color;

    font-size: 1.5rem;
    font-weight: 900;

    margin-bottom: 7.5px;
  }

  .subtitle {
    color: $primary-color;

    font-size: 1.1rem;
    font-weight: 900;
  }
}

@media only screen and (min-width: 1000px) {
  .nav {
    .title {
      font-size: 2.5rem;

      margin-bottom: 15px;
    }

    .subtitle {
      font-size: 1.5rem;
    }
  }
}
</style>
