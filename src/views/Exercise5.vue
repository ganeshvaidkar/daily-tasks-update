<template>
  <div class="Exercise5">
    <h1>Object For Loop</h1>
    {{newArray}}
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </table>
    <h2 v-on:click="writePoem()">{{poem}}</h2>
  </div>
</template>
<script>
export default {
  name: "Exercise5",
  data() {
    return {
      obj: {
        "2020-10-15 07:00:00": 0,
        "2020-10-15 07:30:00": 0,
        "2020-10-15 08:00:00": 0,
        "2020-10-15 08:30:00": 0,
        "2020-10-15 09:00:00": 0,
        "2020-10-15 09:30:00": 0,
        "2020-10-15 10:00:00": 0,
        "2020-10-15 10:30:00": 0,
        "2020-10-15 11:00:00": 0,
        "2020-10-15 11:30:00": 0,
        "2020-10-15 12:00:00": 0,
        "2020-10-15 12:30:00": 0,
        "2020-10-15 13:00:00": 0,
        "2020-10-15 13:30:00": 0,
        "2020-10-15 14:00:00": 0,
        "2020-10-15 14:30:00": 0,
        "2020-10-15 15:00:00": 0,
        "2020-10-15 15:30:00": 0,
        "2020-10-15 16:00:00": 0,
        "2020-10-15 16:30:00": 0,
        "2020-10-15 17:00:00": 0,
        "2020-10-15 17:30:00": 0,
        "2020-10-15 18:00:00": 0,
        "2020-10-15 18:30:00": 0,
        "2020-10-15 19:00:00": 0,
        "2020-10-15 19:30:00": 0,
        "2020-10-15 20:00:00": 0,
        "2020-10-15 20:30:00": 0,
        "2value2020-10-16 00:00:00": 0,
        "2020-10-16 00:30:00": 0,
        "2020-10-16 01:00:00": 0,
        "2020-10-16 01:30:00": 0,
        "2020-10-16 02:00:00": 0,
        "2020-10-16 02:30:00": 0
      },
      newArray: [],
      poem: "ganesha"
    };
  },
  created() {
    this.createObj();
  },
  methods: {
    createObj() {
      for (let key in this.obj) {
        // console.log(key);
        // console.log(this.obj[key]);
        this.newArray.push({
          date: key,
          value: this.obj[key]
        });
      }
    },
    writePoem() {
      for (var i = 0; i <= this.poem.length; i++) {
        for (var j = i + 1; j <= this.poem.length; j++) {
          if (this.poem[j] === this.poem[i]) {
            alert(`alphabet is repeated ${this.poem[i]}`);
            return true;
          }
        }
      }
      alert("alphabet not repeated");
      return false;
    }
  }
};
</script>
