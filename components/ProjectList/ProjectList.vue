<template>
  <div class="projectList" id="projects">
    <h1 class="projectList__title" data-scroll data-scroll-speed="0.5">
      <TextRevealAnimation text="Work"></TextRevealAnimation>
    </h1>

    <ProjectItem
      :index="i + 1"
      :isFirst="i === 0"
      v-for="(project, i) in allProjects"
      :delay="i"
      :title="project.title"
      :context="project.context"
      :date="project.date"
      :slug="project.slug"
      :placeholder="project.placeholder"
    />
  </div>
</template>

<script lang="ts" setup>
import ProjectInterface from '~~/types/ProjectType';

const { data: allProjects } = await useAsyncData('all-projects', () =>
  queryContent<ProjectInterface>('/project').sort({ id: 1 }).find()
);
</script>

<style lang="scss" scoped>
.projectList {
  margin-top: 150px;

  @include md {
    margin-top: 25px;
  }

  &__title {
    position: relative;

    left: calc(100% / 12);

    margin-bottom: 50px;

    font-size: min(6rem, 15vw);
    color: $primary-color;
    text-transform: uppercase;
  }
}
</style>
