<template>
  <div>
    <h1>C BON</h1>
    <h1>C BON</h1>
    <h1>C BON</h1>
    <h1>C BON</h1>
    <h1>C BON</h1>
    <h1>C BON</h1>
    <h1>C BON</h1>
    <h1>C BON</h1>
    <h1>C BON</h1>
  </div>
</template>

<script setup>
import Experience from '~~/webgl/Experience';

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    appear: true,
    duration: 1200,
  },
});

// onMounted(() => {
//   console.log(document);
//   const webgl = new Experience(document.querySelector('canvas.webgl'));
// });
</script>
