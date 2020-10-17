<template>
  <div class="Exercise2">
    <h2 style="text-align:center;">Apply Conditional Filter On Employee List</h2>
    <el-card class="el-card">
      <table class="table">
        <thead class="table-data">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class="table-data">
          <tr v-for="(candidate,index) in candidateList" v-bind:key="index">
            <td>{{candidate.name}}</td>
            <td>{{candidate.email}}</td>
            <td>{{candidate.gender}}</td>
            <td>{{candidate.status}}</td>
          </tr>
        </tbody>
      </table>
    </el-card>
    <el-card class="el-card">
      <table class="table">
        <thead class="table-data">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class="table-data">
          <tr v-for="(candidate,index) in FemaleCandidate" v-bind:key="index">
            <td>{{candidate.name}}</td>
            <td>{{candidate.email}}</td>
            <td>{{candidate.gender}}</td>
            <td>{{candidate.status}}</td>
          </tr>
        </tbody>
      </table>
    </el-card>
    <el-card class="el-card">
      <table class="table">
        <thead class="table-data">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class="table-data">
          <tr v-for="(candidate,index) in inactiveCandidate" v-bind:key="index">
            <td>{{candidate.name}}</td>
            <td>{{candidate.email}}</td>
            <td>{{candidate.gender}}</td>
            <td>{{candidate.status | uppercase}}</td>
          </tr>
        </tbody>
      </table>
    </el-card>
    <el-card class="el-card">
      <table class="table">
        <thead class="table-data">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class="table-data">
          <tr v-for="(candidate,index) in combineList" v-bind:key="index">
            <td>{{candidate.name}}</td>
            <td>{{candidate.email}}</td>
            <td>{{candidate.gender}}</td>
            <td>{{candidate.status | uppercase}}</td>
          </tr>
        </tbody>
      </table>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Exercise2",
  data() {
    return {
      candidateList: [],
      maleCandidate: [],
      FemaleCandidate: [],
      inactiveCandidate: [],
      combineList: [],
      letterFilter: "a"
    };
  },
  created() {
    this.employeeData();
  },
  computed: {
    nameFilter() {
      if (this.letterFilter) {
        return this.combineList.filter(x => {
          return x.name.startWith(this.letterFilter);
          console.log(this.x.name);
        });
      }
    }
  },
  methods: {
    employeeData() {
      axios
        .get("https://gorest.co.in/public-api/users")
        .then(response => {
          console.log(response.data);
          this.maleCandidate = response.data.data;
          this.candidateList = this.maleCandidate.filter(x => {
            if (x.gender == "Male" && x.status == "Active") {
              return x;
            }
          });
          this.FemaleCandidate = this.maleCandidate.filter(x => {
            if (x.gender == "Female" && x.status == "Active") {
              return x;
            }
          });
          this.inactiveCandidate = this.maleCandidate.filter(x => {
            if (x.status == "Inactive") {
              return x;
            }
          });
          console.log("malelist", this.candidateList);
          console.log("femalelist", this.FemaleCandidate);
          console.log("statuslist", this.inactiveCandidate);
          // console.log("sortlist", this.sortArray());
          this.candidateList = this.sortArray(this.candidateList);
          this.FemaleCandidate = this.sortArray(this.FemaleCandidate);
          this.inactiveCandidate = this.sortArray(this.inactiveCandidate);
          console.log(
            "genderarray",
            this.candidateList.concat(this.FemaleCandidate)
          );
          this.combineList = this.candidateList.concat(this.FemaleCandidate);
          this.combineList = this.sortArray(this.combineList);

          // this.sortArray();
        })
        .catch(error => {
          console.log(error);
        });
    },
    sortArray(array) {
      return array.sort((a, b) => (a.name < b.name ? -1 : 1));
    }
    // uppercase(index) {
    //   return index.toUpperCase();
    // }
  },

  filters: {
    uppercase: function(data) {
      return data.toUpperCase();
    }
  }
};
</script>
<style scoped>
.el-card {
  margin: 20px;
}
table,
td,
th {
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 15px;
}
</style>
