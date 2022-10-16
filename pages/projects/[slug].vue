<template>
  <div :style="`--theme-color: ${currentProject.themeColor}`">
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

      <ProjectCarouselMainImage :images="currentProject.images" :link="currentProject.link" />
      <ProjectCarouselSlider :images="currentProject.images" />

      <div class="previous-project">
        <NuxtLink :to="previousProjectLink"
          ><p>{{ previousProject.title }}</p></NuxtLink
        >
      </div>
      <div class="next-project">
        <NuxtLink :to="nextProjectLink"
          ><p>{{ nextProject.title }}</p></NuxtLink
        >
      </div>

      <ProjectCarouselSideSlider />

      <ProjectRights />

      <BackgroundLines isProject />
    </ProjectGrid>
  </div>
</template>

<script setup>
import MainStore from '~~/stores/globalState';

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    duration: 1200,
    onLeave: () => (MainStore.state.sliderImageID = 0),
    onEnter: () => console.log(`enter project`),
  },
});

const route = useRoute();

// Current Project
const { data: currentProject } = await useAsyncData(route.params.slug, () =>
  queryContent('/project', route.params.slug).findOne()
);

const { data: allProjects } = await useAsyncData('all-projects', () => queryContent('/project').sort({ id: 1 }).find());
const previousIndex =
  currentProject.value.id == 0
    ? allProjects.value.length - 1
    : (currentProject.value.id - 1) % allProjects.value.length;

const nextIndex = (currentProject.value.id + 1) % allProjects.value.length;

const previousProject = allProjects.value[previousIndex];
const nextProject = allProjects.value[nextIndex];

console.log(previousIndex);
console.log(nextIndex);
console.log(`/projects/${previousProject.slug}`);
console.log(`/projects/${nextProject.slug}`);
// console.log(allProjects.value[previousIndex].slug, allProjects.value[4]);

const previousProjectLink = `/projects/${previousProject.slug}`;
const nextProjectLink = `/projects/${nextProject.slug}`;

const titleSEO = ref(`Aurélien Hémidy | ${currentProject.value.title}`);
const descriptionSEO = ref(currentProject.value.description);
const urlSEO = ref(`aurelien.hemidy.fr/projects${currentProject.value.link}`);

useHead({
  title: titleSEO.value,
  meta: [
    {
      name: 'description',
      content: descriptionSEO.value,
    },
    {
      name: 'og:title',
      content: titleSEO.value,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:description',
      content: descriptionSEO.value,
    },
    {
      name: 'og:url',
      content: urlSEO.value,
    },
    {
      name: 'twitter:title',
      content: titleSEO.value,
    },
    {
      name: 'twitter:description',
      content: descriptionSEO.value,
    },
  ],
});
</script>

<style lang="scss" scoped>
.projects {
  grid-area: projects;
}

.next-project {
  grid-area: next-project;
}
.previous-project {
  grid-area: previous-project;
}
</style>
