<template>
  <div class="Employee">
    <div class="input-card">
      <el-card shadow="hover">
        <div>
          <label for="name">Name :</label>
          <el-input
            v-model="searchInput"
            v-on:change="searchName()"
            placeholder="selectname"
          ></el-input>
        </div>
      </el-card>
    </div>

    <div class="table-card">
      <el-card shadow="hover">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Occupation</th>
              <th>Current City</th>
              <th>sallary</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(person, index) in employeeList" v-bind:key="index">
              <td>{{ person.name }}</td>
              <td>{{ person.age }}</td>
              <td>{{ person.occupation }}</td>
              <td>{{ person.city }}</td>
              <td>{{ person.sallary }}</td>
            </tr>
          </tbody>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "Employee",
  data() {
    return {
      newEmployeeList: [
        {
          name: "Ganesh",
          age: 26,
          occupation: "student",
          city: "pune",
          sallary: 10000,
        },
        {
          name: "Akash",
          age: 27,
          occupation: "employee",
          city: "pune",
          sallary: 91000,
        },
        {
          name: "Nikhil",
          age: 26,
          occupation: "employee",
          city: "jalgaon",
          sallary: 22000,
        },
        {
          name: "Nivas",
          age: 28,
          occupation: "worker",
          city: "hyderabad",
          sallary: 35000,
        },
        {
          name: "Rajat",
          age: 27,
          occupation: "worker",
          city: "pune",
          sallary: 30000,
        },
      ],
      employeeList: [],
      searchInput: "",
    };
  },
  created() {
    this.employeeList = this.newEmployeeList;
    console.log(typeof this.searchName);
  },
  methods: {
    // getEmployeedata() {
    //   console.log(this.newEmployeeList);
    // },
    searchName() {
      this.employeeList = this.newEmployeeList.filter(
        (x) => x.name.toLowerCase() == this.searchInput.toLowerCase()
      );
      console.log("ganesh", this.employeeList);
    },
  },
};
</script>
<style scoped>
.input-card {
  width: 30%;
  margin: auto;
}
.table-card {
  width: 70%;
  margin: auto;
  margin-top: 40px;
}
.table {
  width: 90%;
  margin: auto;
}
</style>
