<template>
  <GridLanding>
    <BackgroundLines />

    <BottomLineLanding />

    <DateLanding />

    <BottomLeftButton />

    <MainTitle />

    <ImageLanding />

    <ProjectsTitleLanding />

    <ViewTextLanding />
  </GridLanding>
</template>

<script setup>
import gsap from 'gsap';

const rightLine = ref(null);
const rightLineText = ref(null);
// const buttonBottomLeft = ref(null);
const projectTextLeft = ref(null);
const image = ref(null);

const tlRightLine = gsap.timeline({ paused: true });
const tlButtonBottomLeft = gsap.timeline({ paused: true });

// onMounted(() => {
//   tlRightLine
//     .to(rightLine.value, {
//       scaleX: 1.5,
//       opacity: 1,
//       duration: 0.3,
//       ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//     })
//     .to(projectTextLeft.value, {
//       letterSpacing: '5px',
//       duration: 0.4,
//       ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//     })
//     .to(
//       rightLine.value,
//       {
//         scaleX: 1,
//         x: '50%',
//         duration: 0.3,
//         ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//       },
//       '<'
//     )
//     .to(
//       rightLineText.value,
//       {
//         x: '0%',
//         opacity: 1,
//         duration: 0.3,
//         ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//       },
//       '<'
//     );

//   // tlButtonBottomLeft
//   //   .to(buttonBottomLeft.value, {
//   //     y: '100%',
//   //     opacity: 0,
//   //     duration: 0.2,
//   //     ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//   //   })
//   //   .to(buttonBottomLeft.value, {
//   //     y: '-100%',
//   //     duration: 0,
//   //   })
//   //   .to(buttonBottomLeft.value, {
//   //     y: '0',
//   //     opacity: 1,
//   //     duration: 0.2,
//   //     ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//   //   });

//   gsap.to(image.value, {
//     '--scaleX': 0,
//     duration: 0.8,
//     ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//   });
// });

const onMouseEnterImage = (e) => {
  tlRightLine.play();
};

const onMouseLeaveImage = (e) => {
  tlRightLine.reverse();
};

// const onMouseEnterButton = (e) => {
//   tlButtonBottomLeft.restart();
// };
</script>
