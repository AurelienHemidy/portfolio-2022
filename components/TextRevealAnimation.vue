<template>
  <div data-scroll :data-scroll-offset="props.offset || 70" class="text-reveal">
    <span>{{ props.text }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  offset: Number,
});
</script>

<style lang="scss">
.text-reveal {
  overflow: hidden;
  span {
    transform: translateY(80%);

    display: block;

    transition-duration: 1.5s;
    transition-timing-function: cubic-bezier(0.62, 0.05, 0.01, 0.99);
    transition-property: transform;
  }
  &.is-inview {
    span {
      transform: translateY(0);
    }
  }
}
</style>
