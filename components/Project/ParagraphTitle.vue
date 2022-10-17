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
  font-size: 1.5rem;
  text-transform: uppercase;

  margin-bottom: 3vh;

  overflow: hidden;

  @include xl {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
}
</style>
