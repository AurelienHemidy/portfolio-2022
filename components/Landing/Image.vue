<template>
  <div class="imageLanding image">
    <picture ref="image" id="image" @mouseenter="onHover" @mouseleave="onHover">
      <img src="~/assets/background/image-of-me.png" alt="arrow icon" />
    </picture>
  </div>
</template>

<script setup>
import gsap from 'gsap';

const tlRightLine = gsap.timeline({ paused: true });

const props = defineProps({
  onHover: Function,
});

// const propertiesToAnimate = {
//   '--letter-spacing-projects': '5px',
//   '--anim-landing-page-line-in': 'line-anim-in 0.6s forwards',
//   '--anim-landing-page-text-out': 'text-anim-in 0.6s forwards',
// };

// const onMouseEnterImage = () =>
//   Object.entries(propertiesToAnimate).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
// const onMouseLeaveImage = () =>
//   Object.entries(propertiesToAnimate).forEach(([key, value]) => document.documentElement.style.setProperty(key, '1px'));

// tlRightLine
//   .to(rightLine.value, {
//     scaleX: 1.5,
//     opacity: 1,
//     duration: 0.3,
//     ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//   })
//   .to(projectTextLeft.value, {
//     letterSpacing: '5px',
//     duration: 0.4,
//     ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//   })
//   .to(
//     rightLine.value,
//     {
//       scaleX: 1,
//       x: '50%',
//       duration: 0.3,
//       ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//     },
//     '<'
//   )
//   .to(
//     rightLineText.value,
//     {
//       x: '0%',
//       opacity: 1,
//       duration: 0.3,
//       ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
//     },
//     '<'
//   );
</script>

<style lang="scss" scoped>
.imageLanding {
  grid-area: image;

  overflow: hidden;

  margin-left: 25px;

  cursor: pointer;
  position: relative;

  picture {
    width: 100%;
    height: 100%;

    transform: scale(1.05);

    object-fit: cover;

    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.62, 0.05, 0.01, 0.99);

    @include hover {
      transform: scale(0.9);
    }
  }

  @include xs {
    margin-left: 0px !important;
  }
}
</style>
