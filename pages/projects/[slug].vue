<template>
  <div :style="`--theme-color: ${currentProject.themeColor}`" @wheel="handleWheel">
    <ProjectGrid>
      <ProjectTopLeftButton />

      <ProjectTitle :title="currentProject.title" :context="currentProject.context" :date="currentProject.date" />

      <ProjectCarouselMainImage :images="currentProject.images" :link="currentProject.link" />
      <ProjectCarouselSlider :images="currentProject.images" />

      <div class="projects">
        <ProjectParagraphTitle content="the project" />
        <ProjectParagraph :content="currentProject.description" />

        <ProjectParagraphTitle content="Context" />
        <ProjectParagraph :content="currentProject.why" />

        <ProjectParagraphTitle content="tech stack" />
        <ProjectTagList :tagList="currentProject.techStack" />

        <NuxtLink :to="currentProject.link" target="blank"
          ><h4 class="projects__visit-text">
            <span class="textRevealAnimation">Visit the site</span>
          </h4></NuxtLink
        >
      </div>

      <div class="nextPreviousProject">
        <NuxtLink :to="previousProjectLink" class="link">
          <p class="nextPreviousProject__text"><span class="textRevealAnimation">previous project</span></p>
        </NuxtLink>
        <NuxtLink :to="nextProjectLink" class="link">
          <p class="nextPreviousProject__text"><span class="textRevealAnimation">next project</span></p>
        </NuxtLink>
      </div>

      <ProjectCarouselSideSlider :length="currentProject.images.length" />

      <ProjectRights />

      <!-- <BackgroundLines isProject /> -->
    </ProjectGrid>
  </div>
</template>

<script lang="ts" setup>
import { TransitionProps } from 'vue';
import MainStore from '~~/stores/globalState';

import ProjectInterface from '~~/types/ProjectType';

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    duration: 1200,
    onLeave: () => (MainStore.state.sliderImageID = 0),
    // onEnter: () => console.log(`enter project`),
  },
  middleware(to, from) {
    if (to.name === 'projects-slug' && from.name === 'projects-slug')
      (from.meta.pageTransition as TransitionProps).name = 'between-projects';
  },
});

const route = useRoute();
const router = useRouter();

// CURRENT PROJECT DATA

const { data: currentProject } = await useAsyncData(route.params.slug as string, () =>
  queryContent<ProjectInterface>('/project', route.params.slug as string).findOne()
);

// ALL PROJECTS DATA

const { data: allProjects } = await useAsyncData('all-projects', () =>
  queryContent<ProjectInterface>('/project').sort({ id: 1 }).find()
);

// PREVIOUS AND NEXT PROJECTS'S INDEX

const previousIndex: number =
  currentProject.value.id == 0
    ? allProjects.value.length - 1
    : (currentProject.value.id - 1) % allProjects.value.length;

const nextIndex: number = (currentProject.value.id + 1) % allProjects.value.length;

// PREVIOUS AND NEXT PROJECTS'S DATA

const previousProject: ProjectInterface = allProjects.value[previousIndex];
const nextProject: ProjectInterface = allProjects.value[nextIndex];

// PREVIOUS AND NEXT PROJECTS'S LINKS

const previousProjectLink: string = `/projects/${previousProject.slug}`;
const nextProjectLink: string = `/projects/${nextProject.slug}`;

// HANDLING SCROLL EVENT TO SWITCH BETWEEN PROJECTS

const scrollDirection: Record<number, string> = {
  1: previousProjectLink,
  '-1': nextProjectLink,
};

const handleWheel = (event: WheelEvent) => {
  router.push(scrollDirection[Math.sign(event.deltaY)]);
};

// SEO

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
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'favicon/favicon.ico',
    },
    {
      rel: 'apple-touche-icon',
      href: 'favicon/favicon.ico',
    },
  ],
});
</script>

<style lang="scss" scoped>
.projects {
  grid-area: projects;

  &__visit-text {
    margin-top: 3vh;
    margin-bottom: 3vh;

    display: inline-block;

    text-transform: uppercase;
    color: transparent;
    letter-spacing: 1px;
    font-size: 3rem;

    -webkit-text-stroke: 1px var(--theme-color);

    cursor: pointer;

    position: relative;

    overflow: hidden;

    transition: 1s all cubic-bezier(0.62, 0.05, 0.01, 0.99);

    // animation-timing-function: ease;
    // animation-duration: 0.5s;
    // animation-fill-mode: both;

    @include hover {
      letter-spacing: 2px;
    }

    @include md {
      font-size: 2rem;
    }

    &::after {
      content: '';

      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 1px;

      background-color: var(--theme-color);

      transform-origin: left;
      *.page-enter-from &,
      *.page-leave-to &,
      *.between-projects-enter-from &,
      *.between-projects-leave-to & {
        transform: scaleX(0);
      }

      *.page-leave-active &,
      *.page-enter-active &,
      *.between-projects-enter-active & {
        transition: 0.5s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
      }
      *.between-projects-leave-active & {
        transition: 0.5s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
      }
    }
  }
}

.nextPreviousProject {
  // background-color: rgba(48, 48, 48, 0.281);

  grid-area: next-project;

  display: flex;
  justify-content: space-between;

  padding: 0 12.5px;

  @include md {
    margin: 20px 0;
    padding: 0;
  }

  &__text {
    font-size: 0.8rem;
    font-weight: 900;
    color: var(--theme-color);
    text-transform: uppercase;

    position: relative;

    overflow: hidden;

    &::after {
      content: '';

      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 1px;

      background-color: var(--theme-color);

      transform-origin: left;
      *.page-enter-from &,
      *.page-leave-to &,
      *.between-projects-enter-from &,
      *.between-projects-leave-to & {
        transform: scaleX(0);
      }

      *.page-leave-active &,
      *.page-enter-active &,
      *.between-projects-enter-active & {
        transition: 0.5s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
      }
      *.between-projects-leave-active & {
        transition: 0.5s all cubic-bezier(0.62, 0.05, 0.01, 0.99);
      }
    }
  }
}
</style>
