<template>
  <div class="work-container" id="projects">
    <h1 class="t"><TextRevealAnimation text="Work"></TextRevealAnimation></h1>

    <Project
      :number="i + 1"
      :isFirst="i === 0"
      v-for="(project, i) in allProjects"
      :title="project.title"
      :context="project.context"
      :date="project.date"
      :slug="project.slug"
    />
  </div>
</template>

<script setup>
const { data: allProjects } = await useAsyncData('all-projects', () => queryContent('/project').sort({ id: 1 }).find());
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables/_variables.scss';

.work-container {
  margin-top: 150px;
  .t {
    position: relative;

    left: calc(100% / 12);

    margin-bottom: 50px;

    // font-size: 6rem;
    font-size: min(6rem, 15vw);
    color: $primary-color;
    text-transform: uppercase;

    // overflow: hidden;

    // span {
    //   transform: translateY(80%);

    //   display: block;

    //   transition-duration: 1.5s;
    //   transition-timing-function: cubic-bezier(0.62, 0.05, 0.01, 0.99);
    //   transition-property: transform;
    // }

    // &.is-inview {
    //   span {
    //     transform: translateY(0);
    //   }
    // }
  }
}

@media only screen and (max-width: 800px) {
  .work-container {
    margin-top: 25px;
  }
}
</style>
