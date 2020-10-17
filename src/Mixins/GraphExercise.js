export var GraphData = {
  computed: {
    graphData() {
      return {
        title: {
          text: "",
          show: true,
          left: "center",
          top: "top",
          padding: [0, 0, 10, 0],
          textStyle: {
            color: "#484848",
          },
        },
        color: ["#e5323e", "#003366", "#4cabce", "#006699"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            saveAsImage: { show: true, title: "Save" },
          },
        },
        legend: this.graphLegend,
        xAxis: this.graphXaxis,
        yAxis: this.graphYaxis,
        series: this.graphSeries,
      };
    },
  },
  data() {
    return {
      graphLegend: {
        type: "scroll",
        itemGap: 20,
        top: 20,
        show: true,
        textStyle: {
          color: "#484848",
        },
      },
      graphSeries: [
        {
          data: [60, 80, 100, 120, 140, 160],
          type: "line",
        },
        {
          data: [60, 80, 100, 120, 140, 160],
          type: "line",
        },
        {
          data: [60, 80, 100, 120, 140, 160],
          type: "line",
        },
        {
          data: [60, 80, 100, 120, 140, 160],
          type: "line",
        },
      ],
      graphYaxis: [
        {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          type: "value",
        },
      ],
      graphXaxis: [
        {
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          type: "category",
          // boundaryGap: false,
          data: ["Jan", "Feb", "March", "April", "May", "June", "July"],
          scale: true,
          min: 0,
          max: "",
          AxisLabel: {
            margin: 20,
            formatter: function(d) {
              return d;
            },
          },
        },
      ],
      initOptions: { renderer: "svg" },
      loading: true,
    };
  },
};
