<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- <GridDebugger /> -->

    <Preloader />
  </div>
</template>

<script setup>
useHead({
  title: 'Aurélien Hémidy | Web Developer',
  meta: [
    {
      name: 'charset',
      content: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#1F1D1A',
    },
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
