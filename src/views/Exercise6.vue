<template>
  <div class="Exercise6">
    <h2>Shopping Category</h2>
    <el-button type="primary" icon="el-icon-sort" @click="dialogVisibleSort = true">Sort</el-button>
    <el-dialog title="SORT BY" :visible.sync="dialogVisibleSort" width="50%">
      <div>
        <el-radio-group v-model="radio">
          <el-radio :label="true" @change="sortLowest">Price...Low to high</el-radio>
          <el-radio :label="false" @change="sortHighest">Price...High to Low</el-radio>
        </el-radio-group>
      </div>
    </el-dialog>
    <el-button type="primary" icon="el-icon-filter" @click="dialogVisibleFilter = true">Filter</el-button>
    <!-- <el-dialog title="SORT BY" :visible.sync="dialogVisibleFilter" width="50%">
      <div>
        <el-radio-group v-model="radio">
          <el-radio :label="true">MEN</el-radio>
        </el-radio-group>
        <div>
          <el-dropdown>
            <el-button type="primary">
              Category
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Clothing</el-dropdown-item>
              <el-dropdown-item>Jewelery</el-dropdown-item>
              <el-dropdown-item>Electonics</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-dialog>-->
    <el-dialog title="SORT BY" :visible.sync="dialogVisibleFilter" width="50%">
      <el-radio-group v-model="radio">
        <el-radio :label="false">WOMEN</el-radio>
        <el-radio :label="true">MEN</el-radio>
      </el-radio-group>
      <div>
        <el-dropdown @command="filterCategory">
          <el-button type="primary">
            Category
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-if="radio" command="Men Clothing">Men Clothing</el-dropdown-item>
            <el-dropdown-item v-if="!radio" command="Women Clothing">Women Clothing</el-dropdown-item>
            <el-dropdown-item command="Jewelery">Jewelery</el-dropdown-item>
            <el-dropdown-item command="Electonics">Electonics</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-dialog>
    <table>
      <thead>
        <tr>
          <th v-for="(key,index) in columns" v-bind:key="index">{{key}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product,index) in productList" v-bind:key="index">
          <td>{{product.id}}</td>
          <td>{{product.title}}</td>
          <td>{{product.price}}</td>
          <td>{{product.description}}</td>
          <td>{{product.category}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Exercise6",
  data() {
    return {
      dialogVisibleFilter: false,
      dialogVisibleSort: false,
      columns: ["Id", "Title", "Price", "Description", "Category"],
      productList: [],
      radio: null,
      Products: []
    };
  },
  methods: {
    productData() {
      axios
        .get("https://fakestoreapi.com/products")
        .then(response => {
          console.log(response.data);
          this.productList = response.data;
          this.Products = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    sortLowest() {
      this.productList.sort((a, b) => (a.price > b.price ? 1 : -1));
      //   console.log(this.productList);
      this.dialogVisibleSort = false;
    },
    sortHighest() {
      this.productList.sort((a, b) => (a.price < b.price ? 1 : -1));
      //   console.log(this.productList);
      this.dialogVisibleSort = false;
    },
    filterCategory(command) {
      //   this.productList = response.data;
      console.log(command);
      if (command == "Men Clothing") {
        this.productList = this.Products.filter(
          x => x.category == "men clothing"
        );
        this.dialogVisibleFilter = false;
      }
      if (command == "Women Clothing") {
        this.productList = this.Products.filter(
          x => x.category == "women clothing"
        );
        this.dialogVisibleFilter = false;
      }
      if (command == "Jewelery") {
        this.productList = this.Products.filter(x => x.category == "jewelery");
        this.dialogVisibleFilter = false;
      }
      if (command == "Electonics") {
        this.productList = this.Products.filter(
          x => x.category == "electronics"
        );
        this.dialogVisibleFilter = false;
      }
    }
  },
  created() {
    this.productData();
  }
};
</script>
