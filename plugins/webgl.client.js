import Experience from '~~/webgl/Experience';

export default defineNuxtPlugin((NuxtApp) => {
  const webgl = new Experience(document.querySelector('canvas.webgl'));
  // const webgl = 'blabla';
  return {
    provide: {
      webgl,
    },
  };
});
