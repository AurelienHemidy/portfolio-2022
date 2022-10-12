<template>
  <GridLanding>
    <MainTitle />

    <ImageLanding :onHover="() => (showlandingAnimation = !showlandingAnimation)" />

    <ProjectsTitleLanding :isAnimating="showlandingAnimation" />

    <ViewTextLanding :isAnimating="showlandingAnimation" />

    <DateLanding />

    <BottomLeftButton />

    <BottomLineLanding />

    <BackgroundLines />
  </GridLanding>
</template>

<script setup>
import gsap from 'gsap';

const rightLine = ref(null);
const rightLineText = ref(null);
const projectTextLeft = ref(null);
const image = ref(null);

const showlandingAnimation = ref(false);

// const

onMounted(() => {
  // gsap.to(image.value, {
  //   '--scaleX': 0,
  //   duration: 0.8,
  //   ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
  // });
});

const onMouseEnterImage = (e) => {
  tlRightLine.play();
};

const onMouseLeaveImage = (e) => {
  tlRightLine.reverse();
};
</script>
