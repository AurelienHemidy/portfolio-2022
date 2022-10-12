<template>
  <ProjectGrid>
    <ProjectTopLeftButton />

    <ProjectTitle :title="currentProject.title" :context="currentProject.context" :date="currentProject.date" />

    <div class="projects">
      <ProjectParagraphTitle content="the project" />
      <ProjectParagraph :content="currentProject.description" />

      <ProjectParagraphTitle content="why ?" />
      <ProjectParagraph :content="currentProject.why" />

      <ProjectParagraphTitle content="tech stack" />
      <ProjectTagList :tagList="currentProject.techStack" />
    </div>

    <ProjectCarouselMainImage />
    <ProjectCarouselSlider />

    <div class="previous-project"></div>
    <div class="next-project"></div>

    <ProjectCarouselSideSlider />

    <ProjectRights />

    <BackgroundLines isProject />
  </ProjectGrid>
</template>

<script setup>
import gsap from 'gsap';
const slide = ref(null);
const sliderBackground = ref(null);
const picture = ref(null);
const image = ref(null);

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    duration: 500,
    onLeave: () => console.log('leave'),
    onAfterEnter: () => console.log('enter'),
  },
});

const route = useRoute();
const router = useRouter();

// Current Project
const { data: currentProject } = await useAsyncData(route.params.slug, () =>
  queryContent('/project', route.params.slug).findOne()
);

// Next and Previous projects
const { data } = await useAsyncData('previous-next-projects', () =>
  queryContent(`/project`).sort({ id: 1 }).findSurround(`/project/${route.params.slug}`)
);

const tlStartAnimationImage = gsap.timeline({ delay: 1 });
const tlChangeImage = gsap.timeline({ paused: true });

onMounted(() => {
  tlStartAnimationImage
    .to(picture.value, {
      '--scaleX': 1,
      duration: 0.7,
      ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
    })
    .set(picture.value, {
      '--transform-origin': 'right',
    })
    .set(image.value, {
      scaleX: 1,
    })
    .to(picture.value, {
      '--scaleX': 0,
      duration: 0.7,
      ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
    });

  tlChangeImage
    .set(picture.value, {
      '--transform-origin': 'left',
    })
    .to(picture.value, {
      '--scaleX': 1,
      duration: 0.7,
      ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
      onComplete: () => {
        image.value.setAttribute('src', '../../assets/background/image-of-me.png');
      },
    })
    .set(image.value, {
      scaleX: 1,
    })
    .set(picture.value, {
      '--transform-origin': 'right',
    })
    .to(picture.value, {
      '--scaleX': 0,
      duration: 0.7,
      ease: 'cubic-bezier(0.62, 0.05, 0.01, 0.99)',
    });
});

const goToMainPage = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped>
.projects {
  grid-area: projects;
}
</style>
