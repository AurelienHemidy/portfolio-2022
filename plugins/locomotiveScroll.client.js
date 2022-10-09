import LocomotiveScroll from 'locomotive-scroll';

export default defineNuxtPlugin((NuxtApp) => {
  const locomotiveScroll = LocomotiveScroll;
  return {
    provide: {
      locomotiveScroll,
    },
  };
});
