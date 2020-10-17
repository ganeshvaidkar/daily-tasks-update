<template>
  <div class="Practice">
    <button @click="tryFunction">click here</button>
  </div>
</template>
<script>
export default {
  name: "Practice",
  methods: {
    setData() {
      setTimeout(() => {
        alert("hi ganesh");
      }, 5000);
    },
    async tryFunction() {
      try {
        await this.setData();
        alert("hi Nikhil");
        // mikn;
        // alert("hi ganesh");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
