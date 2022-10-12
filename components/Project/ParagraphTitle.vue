<template>
  <h5 class="paragraphTitle" v-html="props.content" />
</template>

<script setup>
const props = defineProps({
  content: String,
});
</script>

<style lang="scss" scoped>
.paragraphTitle {
  font-size: 2rem;
  text-transform: uppercase;

  margin-bottom: 20px;

  @include xl {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  @include md {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
}
</style>
