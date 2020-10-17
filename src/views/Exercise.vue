<template>
  <div class="Exercise">
    <div>
      <BarGraphData />
    </div>
    <el-card shadow="hover">
      <div>
        <el-select v-model="select_id" @change="dropdownData">
          <el-option
            v-for="data in dropdownList"
            :key="data.id"
            :label="data.employee_name"
            :value="data.id"
          ></el-option>
        </el-select>
      </div>
      <div>
        <table class="card-table">
          <thead>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Image</th>
          </thead>
          <tbody>
            <tr v-for="(data, index) in tableList" v-bind:key="index">
              <td>{{ data.employee_name }}</td>
              <td>{{ data.employee_salary }}</td>
              <td>{{ data.employee_age }}</td>
              <td>{{ data.profile_image }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
import BarGraphData from "../components/Bargraphs/BarGraphData.vue";
export default {
  name: "Exercise",
  components: { BarGraphData },
  data() {
    return {
      tableList: [],
      dropdownList: [],
      select_id: ""
    };
  },
  created() {
    this.dataTable();
    this.dropdownData();
  },
  methods: {
    dataTable() {
      axios
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => {
          console.log(response.data);
          this.tableList = response.data.data;
          this.dropdownList = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    dropdownData() {
      axios
        .get(
          "http://dummy.restapiexample.com/api/v1/employee/" + this.select_id
        )
        .then(response => {
          console.log(response.data);
          this.tableList = [];
          this.tableList.push(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.card-table {
  border-collapse: collapse;
  width: 100%;
}
table,
td,
th {
  border: 1px solid #ddd;
  text-align: left;
}

th,
td {
  padding: 15px;
}
</style>
