<template>
  <div class="projectTitle">
    <h1 class="projectTitle__title">
      <span class="textRevealAnimation">{{ title }}</span>
    </h1>
    <h5 class="projectTitle__context">
      <span class="textRevealAnimation">{{ context }}</span>
    </h5>
    <p class="projectTitle__date">
      <span class="textRevealAnimation">{{ date }}</span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  context: String,
  date: Number,
});
</script>

<style lang="scss" scoped>
.projectTitle {
  grid-area: title;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &__title {
    font-size: 3rem;
    white-space: nowrap;

    overflow: hidden;

    @include md {
      font-size: 1.6rem;
    }
  }

  &__context {
    font-size: 1.2rem;
    color: var(--theme-color);

    margin-bottom: 10px;
    white-space: nowrap;

    overflow: hidden;

    @include md {
      font-size: 1rem;
    }
  }

  &__date {
    font-size: 1.2rem;
    font-weight: 900;

    overflow: hidden;
  }

  @include md {
    margin-bottom: 50px;
  }
}
</style>
