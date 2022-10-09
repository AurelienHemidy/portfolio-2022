<template>
  <div data-scroll-container>
    <Header />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- <GridDebugger /> -->

    <Preloader />

    <Footer />
  </div>
</template>

<script setup>
const { $locomotiveScroll } = useNuxtApp();

onMounted(() => {
  const scroll = new $locomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
});
</script>
