<template>
  <div class="landingContainer">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.landingContainer {
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

  @include lg {
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

  @include md {
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
  }

  @include xs {
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
  }
}
</style>
