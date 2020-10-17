<template>
  <div class="BarGraphData">
    <div ref="barGarph" style="width: 100%; height: 250px; overflow: hidden;"></div>
  </div>
</template>
<script>
import { NewGraphData } from "../../Mixins/Basebargraph.js";
var echarts = require("echarts");
export default {
  name: "BarGraphData",
  mixins: [NewGraphData],
  data() {
    return {
      barGraphInstance: "",
      isGraphDataAvailable: true
    };
  },
  mounted() {
    this.initBaseGraph();
    // this.getEchartGraphDetails();
  },
  methods: {
    getEchartGraphDetails() {
      //   this.graphXaxis[0].data = [

      //   ];
      this.reRenderGraph();
    },
    clearGraph: function() {
      this.barGraphInstance.clear();
    },

    reRenderGraph: function() {
      this.clearGraph();
      this.barGraphInstance.setOption(this.graphData);
      this.barGraphInstance.hideLoading();
    },
    initBaseGraph() {
      let baseGraphContainer = this.$refs["barGarph"];
      this.barGraphInstance = echarts.init(
        baseGraphContainer,
        null,
        this.initOptions
      );
      this.barGraphInstance.showLoading();
      setTimeout(() => {
        this.reRenderGraph();
      }, 5000);
    }
  }
};
</script>
<style>
</style>
