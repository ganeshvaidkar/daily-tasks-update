<template>
  <div class="Exercise3">
    <h1 style="text-align:center;">Condition Exercise</h1>
    {{number}}
  </div>
</template>
<script>
export default {
  name: "Exercise3",
  data() {
    return {
      number: [],
      newNumber: []
    };
  },
  created() {
    this.getDigit();
  },
  methods: {
    getDigit() {
      for (let i = 0; i < 100; i++) {
        // console.log("number", this.number.push("i"));
        this.number.push(i);
        if (i <= 50 && i == 8) {
          this.newNumber.push(i);
          console.log("digit", i);
        }
      }
    }
  }
};
</script>
