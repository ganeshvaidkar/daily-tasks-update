<template>
  <div class="Weather">
    <el-card>
      <table>
        <tr>
          <!-- <thead> -->
          <th colspan="2">wind10m</th>
          <th>timepoint</th>
          <th>cloudcover</th>
          <th>seeing</th>
          <th>transparency</th>
          <th>lifted_index</th>
          <th>rh2m</th>
          <!-- </thead> -->
        </tr>
        <tr v-for="(data,index) in weatherList" v-bind:key="index">
          <!-- <tbody> -->
          <td>{{data.wind10m.direction}}</td>
          <td>{{data.wind10m.speed}}</td>
          <td>{{data.timepoint}}</td>
          <td>{{data.cloudcover}}</td>
          <td>{{data.seeing}}</td>
          <td>{{data.transparency}}</td>
          <td>{{data.lifted_index}}</td>
          <td>{{data.rh2m}}</td>
          <!-- </tbody> -->
        </tr>
      </table>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Weather",
  data() {
    return {
      weatherList: []
    };
  },
  created() {
    this.weatherData();
  },
  methods: {
    weatherData() {
      // console.log(this.weatherList);
      axios
        .get(
          "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json"
        )
        .then(response => {
          console.log(response.data.dataseries);
          this.weatherList = response.data.dataseries;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #4caf50;
  color: white;
}
.Weather {
  margin: auto;
}
.el-card {
}
.scrollmenu {
  display: flex;
  overflow: auto;
}
.el-sub-card {
  width: 15%;
  margin: 10px;
}
</style>
