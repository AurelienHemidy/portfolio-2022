<template>
  <div data-scroll-container>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- <GridDebugger /> -->

    <Preloader />
  </div>
</template>

<script setup>
import MainStore from './stores/globalState';

const { $locomotiveScroll } = useNuxtApp();
let scroll;

onMounted(() => {
  scroll = new $locomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.8,
  });

  MainStore.state.locomotiveScroll = scroll;

  const resizeObserver = new ResizeObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (scroll) {
        scroll.update();
      }
    });
  });

  resizeObserver.observe(document.querySelector('[data-scroll-container]'));
});

onUnmounted(() => {
  scroll.destroy();
});

useHead({
  title: 'Aurélien Hémidy | Web Developer',
  meta: [
    {
      name: 'description',
      content:
        "Hi ! I'm a front-end web developer freshly graduated from Gobelins, l'Ecole de l'Image with a Master Degree in Innovative Interaction's Design and Management.",
    },
    {
      name: 'og:title',
      content: 'Aurélien Hémidy | Web Developer',
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:description',
      content:
        "Hi ! I'm a front-end web developer freshly graduated from Gobelins, l'Ecole de l'Image with a Master Degree in Innovative Interaction's Design and Management.",
    },
    {
      name: 'og:site_name',
      property: 'og:site_name',
      content: 'Aurélien Hémidy | Web Developer',
    },
    {
      name: 'og:url',
      content: 'aurelien.hemidy.fr',
    },
    {
      name: 'og:image',
      content: '/favicon.ico',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: 'Aurélien Hémidy',
    },
    {
      name: 'twitter:title',
      content: 'Aurélien Hémidy | Web Developer',
    },
    {
      name: 'twitter:description',
      content:
        "Hi ! I'm a front-end web developer freshly graduated from Gobelins, l'Ecole de l'Image with a Master Degree in Innovative Interaction's Design and Management.",
    },
    {
      name: 'twitter:image',
      content: 'favicon/favicon.ico',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'favicon/favicon.ico',
    },
    {
      rel: 'apple-touche-icon',
      href: 'favicon/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Oswald|Fira+Sans',
    },
  ],
});
</script>
