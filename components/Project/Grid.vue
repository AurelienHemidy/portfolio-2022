<template>
  <div class="projectContainer">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.projectContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.7fr 1.3fr 1fr 0.5fr 1.1fr 1.1fr 0.5fr 1.2fr 1.1fr 0.5fr 1.5fr 1fr 1.8fr 0.7fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . . . . previous-project previous-project previous-project previous-project previous-project previous-project .'
    '. top-button . . . . . . title title title .'
    '. . . . . . . . title title title .'
    '. . . . . . . . . . . .'
    '. projects projects projects . image image image image image image .'
    '. projects projects projects . image image image image image image .'
    '. projects projects projects . image image image image image image slider'
    '. projects projects projects . image image image image image image slider'
    '. projects projects projects . image image image image image image slider'
    '. projects projects projects . image image image image image image slider'
    '. projects projects projects . image image image image image image .'
    '. projects projects projects . image image image image image image .'
    '. . . . . slider-image slider-image slider-image slider-image slider-image slider-image .'
    '. rights rights . . next-project next-project next-project next-project next-project next-project .';

  height: 100vh;

  overflow: hidden;

  @include xl {
    grid-template-rows: 0.7fr 1.3fr 1fr 0.5fr 1.1fr 1.1fr 0.5fr 1.2fr 1.1fr 0.5fr 1.5fr 1.4fr 1.4fr 0.7fr;
    grid-template-areas:
      '. . . . . previous-project previous-project previous-project previous-project previous-project previous-project .'
      '. top-button . . . . . . title title title .'
      '. . . . . . . . title title title .'
      '. . . . . . . . . . . .'
      '. projects projects projects . . . . . . . .'
      '. projects projects projects . image image image image image image slider'
      '. projects projects projects . image image image image image image slider'
      '. projects projects projects . image image image image image image slider'
      '. projects projects projects . image image image image image image .'
      '. projects projects projects . image image image image image image .'
      '. projects projects projects . image image image image image image .'
      '. projects projects projects . slider-image slider-image slider-image slider-image slider-image slider-image .'
      '. projects projects projects . . . . . . . .'
      '. rights rights . . next-project next-project next-project next-project next-project next-project .';
  }

  @include lg {
    grid-template-rows: 0.7fr 1.3fr 1fr 0.5fr 1.1fr 1.1fr 0.5fr 1.2fr 1.1fr 0.5fr 1.5fr 1.4fr 1.4fr 0.7fr;
    grid-template-areas:
      '. . . . . previous-project previous-project previous-project previous-project previous-project previous-project .'
      '. top-button . . . . . title title title . .'
      '. . . . . . . title title title . .'
      '. . . . . . . . . . . .'
      '. projects projects projects . . . . . . . .'
      '. projects projects projects . image image image image image image slider'
      '. projects projects projects . image image image image image image slider'
      '. projects projects projects . image image image image image image slider'
      '. projects projects projects . image image image image image image .'
      '. projects projects projects . image image image image image image .'
      '. projects projects projects . image image image image image image .'
      '. projects projects projects . slider-image slider-image slider-image slider-image slider-image slider-image .'
      '. projects projects projects . . . . . . . .'
      '. rights rights . . next-project next-project next-project next-project next-project next-project .';
  }

  @include md {
    display: flex;
    flex-direction: column;

    margin: 20px calc(100% / 12);
  }
}
</style>
