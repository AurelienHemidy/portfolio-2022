<template>
  <p class="paragraph" v-html="props.content" />
</template>

<script setup>
const props = defineProps({
  content: String,
});
</script>

<style lang="scss" scoped>
.paragraph {
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 0.9rem;
  margin-bottom: 30px;

  @include xl {
    font-size: 0.85rem;
    margin-bottom: 15px;
  }

  @include md {
    margin-bottom: 30px;
  }

  *.page-enter-from &,
  *.page-leave-to & {
    transform: translateY(100%);
    opacity: 0;
  }

  *.page-leave-active &,
  *.page-enter-active & {
    transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
  }
}
</style>
