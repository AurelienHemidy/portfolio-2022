<template>
  <div class="projectTitle">
    <h1 class="projectTitle__title"><TextRevealAnimation :text="title"></TextRevealAnimation></h1>
    <h5 class="projectTitle__context"><TextRevealAnimation :text="context"></TextRevealAnimation></h5>
    <p class="projectTitle__date"><TextRevealAnimation :text="date.toString()"></TextRevealAnimation></p>
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

    @include md {
      font-size: 1.6rem;
    }
  }

  &__context {
    font-size: 1.2rem;
    color: $primary-color;

    margin-bottom: 10px;
    white-space: nowrap;

    @include md {
      font-size: 1rem;
    }
  }

  &__date {
    font-size: 1.2rem;
    font-weight: 900;
  }

  @include md {
    margin-bottom: 50px;
  }
}
</style>
