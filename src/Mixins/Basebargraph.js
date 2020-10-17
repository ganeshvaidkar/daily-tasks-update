export var NewGraphData = {
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
      graphColors: ["#6f59ece6"],
      graphSeries: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
        {
          data: [10, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "line",
        },
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
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
          // name: ""
          // min: 0,
          // max: 250,
          // interval: 50,
          // axisLabel: {
          //     formatter: '{value} ml'
          // }
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          scale: true,
          min: 0,
          max: "",
          axisLabel: {
            // interval: 0,
            // rotate: 90,
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
