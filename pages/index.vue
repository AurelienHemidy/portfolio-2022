<template>
  <div data-scroll-container>
    <Landing />
    <Projects />
    <Contact />
    <div class="whitespace"></div>
  </div>
</template>

<script setup>
const { $locomotiveScroll } = useNuxtApp();

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    appear: true,
    duration: 500,
    onLeave: () => console.log('leave'),
    onAfterEnter: () => console.log('enter'),
  },
});

onMounted(() => {
  // const scroll = new $locomotiveScroll({
  //   el: document.querySelector('[data-scroll-container]'),
  //   smooth: true,
  //   multiplier: 0.8,
  // });
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
