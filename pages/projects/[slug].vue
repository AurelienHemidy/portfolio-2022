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
    <ProjectCarouselSlider :images="currentProject.images" />

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
</script>

<style lang="scss" scoped>
.projects {
  grid-area: projects;
}
</style>
