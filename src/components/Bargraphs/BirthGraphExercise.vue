<template>
  <div class="Birthgraph">
    <div ref="birthgraph" style="width: 100%; height: 250px; overflow: hidden;"></div>
  </div>
</template>
<script>
import { birthGraphData } from "../../Mixins/birthGraph.js";
var echarts = require("echarts");
export default {
  name: "Birthgraph",
  mixins: [birthGraphData],
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
      this.barGraphInstance.setOption(this.birthData);
      this.barGraphInstance.hideLoading();
    },
    initBaseGraph() {
      let baseGraphContainer = this.$refs["birthgraph"];
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
