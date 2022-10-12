<template>
  <div class="rights">
    <p class="rights__name">© Aurélien Hémidy</p>
    <div class="rights__separator"></div>
    <p class="rights__text">All rights reserved</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.rights {
  grid-area: rights;
  // background-color: green;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  padding-bottom: 10px;

  @include md {
    margin-top: 20px;
  }

  &__name,
  &__text {
    font-size: 0.8rem;
    font-family: 'Open Sans';
    color: $primary-color;
    white-space: nowrap;

    @include md {
      font-size: 0.6rem;
    }
  }

  &__separator {
    width: 15px;
    height: 1px;
    margin: 7.5px 10px;

    background-color: $primary-color;
  }
}
</style>
