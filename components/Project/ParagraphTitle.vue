<template>
  <h5 class="paragraphTitle">
    <TextRevealAnimation :text="content" />
  </h5>
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

  overflow: hidden;

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
