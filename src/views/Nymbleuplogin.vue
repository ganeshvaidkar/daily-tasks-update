<template>
  <div class="Nymbleup">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" class="el-menu-item1">NymbleUp</el-menu-item>
      <el-button type="warning" class="el-menu-login-btn" v-on:click="getLogin"
        >LOGIN</el-button
      >
      <el-button type="warning" class="el-menu-sighup-btn">SIGNUP</el-button>
    </el-menu>

    <div class="dialog">
      <el-dialog
        title="LOGIN"
        :visible.sync="dialogFormVisible"
        class="title-login"
      >
        <!-- <el-row> -->
        <!-- <el-col :span="12"> -->
        <h3>
          <b class="title">Already have an account?</b>
        </h3>
        <p class="sub-title">
          Sign into your account with registered your email id.
        </p>
        <!-- </el-col> -->
        <!-- <el-col :span="12"></el-col> -->
        <!-- </el-row> -->
        <input
          class="input"
          placeholder="username"
          type="text"
          v-model="username"
        />
        <input
          class="input"
          placeholder="password"
          type="password"
          v-model="password"
        />
        <span class="forgotlink">
          <a>Forgot Your Password?</a>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="warning"
            @click="dialogFormVisible = false"
            v-on:click="getLogin"
            >LogIn</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Nymbleup",
  data() {
    return {
      dialogFormVisible: false,
      username: "",
      password: "",
    };
  },
  methods: {
    getLogin() {
      this.dialogFormVisible = true;
      console.log(this.username, this.password);
      axios
        .post("https://reqres.in/api/login/", {
          email: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.dialog {
  /* padding: 20px; */
}

.el-menu-demo {
  height: 60px;
}
.el-menu-item1 {
  color: rgb(235, 156, 53);
  font-size: 20px;
  font-weight: 800;
}
.el-menu-sighup-btn {
  /* text-align: right; */
  float: right;
  margin: 10px 20px 10px 0;
  font-weight: 900;
}
.el-menu-login-btn {
  /* text-align: right; */
  float: right;
  margin: 10px 20px 10px 0;
  font-weight: 800;
}
.input {
  margin: 20px 0 20px 0;
  width: 100%;
  /* text-align: left; */
  padding: 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #dddddd;
  height: 40px;
  font-size: 20px;
  outline: none;
}
.forgotlink {
  margin-top: 20px;
}
.title-login {
  color: rgb(235, 156, 53);
}
</style>
<style>
.el-dialog {
  margin-top: 0 !important;
}
.el-dialog__title {
  color: rgb(235, 156, 53);
  font-weight: 800;
  border-bottom: 2px solid rgb(235, 156, 53);
  padding: 13px;
}
.el-dialog__body {
  border-top: 1px solid #dddddd;
}
.title {
  margin: 0 0 20px 0;
  color: black;
}
.sub-title {
  color: #777777;
  /* margin-top: 40px; */
}
.el-dialog__header {
  /* padding: 0; */
  margin-left: 20px;
}
</style>
