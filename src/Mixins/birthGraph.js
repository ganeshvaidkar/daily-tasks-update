export var birthGraphData = {
  computed: {
    birthData() {
      return {
        title: {
          text: "",
          show: true,
          left: "center",
          top: "top",
          padding: [0, 0, 10, 0],
          textStyle: { color: "#484848" },
        },
        color: ["#e5323e", "#003366", "#4cabce", "#006699", "#484848"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        toolbox: {
          shadow: true,
          fature: {
            mark: { show: true },
            saveAsImage: { show: true, title: "Save" },
          },
        },
        legend: this.graphLegend,
        // xAxis: this.graphXaxis,
        // yAxis: this.graphYaxis,
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
      // graphSeries: [
      //   {
      //     data: [1990, 1992, 1994, 1996, 1998, 2000],
      //     type: "bar",
      //   },
      //   {
      //     data: [1990, 1992, 1994, 1996, 1998, 2000],
      //     type: "bar",
      //   },
      //   {
      //     data: [1990, 1992, 1994, 1996, 1998, 2000],
      //     type: "bar",
      //   },
      //   {
      //     data: [1990, 1992, 1994, 1996, 1998, 2000],
      //     type: "bar",
      //   },
      // ],
      graphSeries: [
        {
          type: "pie",
          data: [
            { value: 535, name: "荆州" },
            { value: 510, name: "兖州" },
            { value: 634, name: "益州" },
            { value: 735, name: "西凉" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
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
