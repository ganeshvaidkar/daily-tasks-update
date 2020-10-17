<template>
  <div class="Popup">
    <div>
      <!-- <el-button type="text" @click="dialogVisible = true">Click</el-button> -->

      <el-dialog
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
        title="Edit User"
      >
        <el-row>
          <el-col :span="12">
            <div class="box">
              <label for="Name" class="label">Name:</label>
              <br />
              <el-input v-model="search_name" class="popup-box"></el-input>
            </div>
            <div class="box">
              <label for="department" class="label">department:</label>
              <br />
              <el-select
                clearable
                placeholder="Select"
                v-model="select_department"
                class="popup-box"
              >
                <el-option
                  v-for="department in departments"
                  :key="department"
                  :label="department"
                  :value="department"
                ></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="box">
              <label for="experience" class="label">experience:</label>
              <br />
              <el-select clearable placeholder="Select" v-model="select_exercise" class="popup-box">
                <el-option
                  v-for="experience in experiences"
                  :key="experience"
                  :label="experience"
                  :value="experience"
                ></el-option>
              </el-select>
            </div>
            <div class="box">
              <label for="city" class="label">City:</label>
              <br />
              <el-input v-model="search_city" class="popup-box"></el-input>
            </div>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false" v-on:click="upadateUser">Update</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- <div> -->
    <!-- <el-card></el-card> -->
    <!-- </div> -->
    <div>
      <el-card>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Experience</th>
              <th>City</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(person,index) in employeeList" v-bind:key="index">
              <td>{{person.name}}</td>
              <td>{{person.department}}</td>
              <td>{{person.experience}}</td>
              <td>{{person.city}}</td>
              <td>
                <i class="el-icon-edit" v-on:click="dataEdit(person,index)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "Popup",
  data() {
    return {
      newEmployeeList: [
        { name: "Ganesh", department: "civil", experience: 2, city: "Shegaon" },
        { name: "Nikhil", department: "IT", experience: 3, city: "Jalgaon" },
        { name: "Akash", department: "IT", experience: 5, city: "Pune" },
        { name: "Rajat", department: "Pharma", experience: 4, city: "Pune" }
      ],
      employeeList: "",
      departments: ["civil", "IT", "Pharma"],
      experiences: [2, 3, 5, 4],
      dialogVisible: false,
      search_name: "",
      search_city: "",
      select_department: "",
      select_exercise: "",
      index: null
    };
  },
  created() {
    this.employeeList = this.newEmployeeList;
    console.log(this.newEmployeeList);
  },
  methods: {
    dataEdit(person, index) {
      this.dialogVisible = true;
      this.search_name = person.name;
      this.search_city = person.city;
      this.select_department = person.department;
      this.select_exercise = person.experience;
      this.index = index;
    },
    handleClose(done) {
      this.dialogVisible = false;
    },
    upadateUser() {
      let obj = {
        name: this.search_name,
        department: this.select_department,
        experience: this.select_exercise,
        city: this.search_city
      };
      this.newEmployeeList.splice(this.index, 1, obj);
    }
  }
};
</script>
,<style  scoped>
.box {
  /* text-align: center; */
}
.popup-box {
  width: 80%;
  margin: 10px;
  /* margin: auto; */
}
.label {
  margin-left: 20px;
}
.table {
  border-collapse: collapse;
  width: 80%;
  margin: auto;
}
th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #4caf50;
  color: white;
}
</style>
