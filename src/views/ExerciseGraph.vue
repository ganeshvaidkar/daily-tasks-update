<template>
  <div class="ExerciseGraph">
    <div>
      <GraphExercise />

      <BirthGraphExercise />fgwedfge
    </div>
  </div>
</template>
<script>
import GraphExercise from "../components/Bargraphs/GraphExercise.vue";
import BirthGraphExercise from "../components/Bargraphs/BirthGraphExercise";
export default {
  name: "ExerciseGraph",
  components: { GraphExercise, BirthGraphExercise }
};
</script>
