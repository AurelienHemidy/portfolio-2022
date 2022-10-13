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

  *.page-enter-from &,
  *.page-leave-to & {
    transform: translateY(100%);
    opacity: 0;
  }

  *.page-enter-active &,
  *.page-leave-active & {
    transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
  }

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
