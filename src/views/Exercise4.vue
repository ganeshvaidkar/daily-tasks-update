<template>
  <div class="Exercise4">
    <h1>Movie Review</h1>
    <div>
      <label for>Search movie</label>
      <input type="text" v-model="filterText" />
    </div>
    <div>
      <h3>
        Movie ratings
        <button @click="sortLowest">Least Rating</button>
        <button @click="sortHighest">most Rating</button>
      </h3>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(key,index) in columns" v-bind:key="index">{{key}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry,index) in filterFilms" v-bind:key="index">
          <td>{{entry.title}}</td>
          <td>{{entry.rating}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Exercise4",
  data() {
    return {
      columns: ["title", "rating"],
      ratingInfo: [
        { title: "drishyam", rating: 90 },
        { title: "raid", rating: 80 },
        { title: "singham", rating: 85 },
        { title: "special26", rating: 75 },
        { title: "badshaho", rating: 70 }
      ],
      filterText: ""
    };
  },
  methods: {
    sortLowest() {
      this.ratingInfo.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    },
    sortHighest() {
      this.ratingInfo.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    }
  },
  computed: {
    filterFilms() {
      let filter = new RegExp(this.filterText, "i");
      return this.ratingInfo.filter(x => x.title.match(filter));
    }
  }
};
</script>
