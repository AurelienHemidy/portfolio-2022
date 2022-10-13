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

    <ProjectCarouselMainImage :images="currentProject.images" />
    <ProjectCarouselSlider :images="currentProject.images" />

    <div class="previous-project"></div>
    <div class="next-project"></div>

    <ProjectCarouselSideSlider />

    <ProjectRights />

    <BackgroundLines isProject />
  </ProjectGrid>
</template>

<script setup>
import MainStore from '~~/stores/globalState';

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    duration: 3000,
    onLeave: () => (MainStore.state.sliderImageID = 0),
    onEnter: () => console.log(`enter project`),
  },
});

const route = useRoute();

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
