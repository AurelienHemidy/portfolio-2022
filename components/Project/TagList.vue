<template>
  <ul class="tagList">
    <li class="tagList__item" v-for="label in tagList">
      <span>{{ label }}</span>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  tagList: Array,
});
</script>

<style lang="scss" scoped>
.tagList {
  display: flex;
  flex-wrap: wrap;

  list-style-type: none;

  &__item {
    padding: 5px 15px;
    margin: 0 15px 15px 0;

    border: 1px solid $primary-color;

    font-family: 'Open Sans';
    font-weight: 300;

    @include xl {
      padding: 2.5px 12.5px;
      margin: 0 7.5px 7.5px 0;
    }
  }

  @include md {
    margin-bottom: 20px;
  }
}
</style>
