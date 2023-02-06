<template>
  <div>
    <Landing />
    <ProjectList />
    <Contact />
    <div class="whitespace"></div>
  </div>
</template>

<script lang="ts" setup>
import { TransitionProps } from 'vue';

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    appear: true,
    duration: 1200,
  },
  middleware(to, from) {
    (from.meta.pageTransition as TransitionProps).name = 'page';
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';
.whitespace {
  width: 100%;
  height: calc(100vw / 12);

  background-color: transparent;
}
</style>
