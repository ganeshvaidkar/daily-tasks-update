<template>
  <div class="GraphExercise">
    <div ref="barGraph" style="width: 100%; height: 250px; overflow: hidden;"></div>
  </div>
</template>
<script>
import { GraphData } from "../../Mixins/GraphExercise.js";
var echarts = require("echarts");
export default {
  name: "GraphExercise",
  mixins: [GraphData],
  data() {
    return {
      barGraphInstance: "",
      isGraphDataAvailable: true
    };
  },
  mounted() {
    this.initBaseGraph();
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
      let baseGraphContainer = this.$refs["barGraph"];
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
