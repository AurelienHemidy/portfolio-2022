<template>
  <p class="paragraph">
    <span class="textRevealAnimation">{{ content }}</span>
  </p>
</template>

<script setup>
const props = defineProps({
  content: String,
});
</script>

<style lang="scss" scoped>
.paragraph {
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 0.85rem;
  margin-bottom: 2vh;

  overflow: hidden;

  @include xl {
    font-size: 0.85rem;
    margin-bottom: 15px;
  }

  @include md {
    margin-bottom: 30px;
  }
}
</style>
