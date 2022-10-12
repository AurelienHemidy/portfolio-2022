<template>
  <LandingGrid>
    <LandingMainTitle />

    <LandingImage :onHover="() => (showlandingAnimation = !showlandingAnimation)" />

    <LandingProjectsTitle :isAnimating="showlandingAnimation" />

    <LandingViewText :isAnimating="showlandingAnimation" />

    <LandingDate />

    <LandingBottomLeftButton />

    <LandingBottomLine />

    <BackgroundLines />
  </LandingGrid>
</template>

<script setup>
const showlandingAnimation = ref(false);
</script>
