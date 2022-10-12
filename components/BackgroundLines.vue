<template>
  <div>
    <div class="background-line-1" :class="isProject ? 'isProject' : ''"></div>
    <div class="background-line-2" :class="isProject ? 'isProject' : ''"></div>
    <div class="background-line-3" :class="isProject ? 'isProject' : ''"></div>
    <div class="background-line-4" :class="isProject ? 'isProject' : ''"></div>
    <div class="background-line-5" :class="isProject ? 'isProject' : ''"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  isProject: Boolean,
});
</script>

<style lang="scss" scoped>
@for $i from 1 through 5 {
  .background-line-#{$i} {
    height: calc((100 / 12 * 11vh));
    width: 1px;

    background-color: $primary-color;

    opacity: 0.5;

    position: absolute;
    left: calc($i * math.div(100, 6) * 1%);
    top: 0;
    transform: translateX(-50%);

    z-index: -1;
    &.isProject {
      height: 100vh;
    }
  }
}
</style>
