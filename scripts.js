const chart = JSC.chart("chartDiv", {
  debug: true,
  type: "venn",
  palette: ["white"],
  title: {
    position: "center",
    label: {
      text: "Вариант II",
      style_fontSize: "20px",
    },
  },

  defaultAnnotation: {
    width: 350,
    label: { style_fontSize: 18, align: "center" },
  },
  annotations: [
    {
      label_text: "Диаграмма Венна",
      position: "inside 0,0",
    },
  ],
  defaultSeries: {
    mouseTracking_enabled: false,
    shape_padding: 0.2,
  },
  defaultPoint: {
    opacity: 1,
    outline: { color: "black", width: 2 },
  },
  series: [
    {
      name: "Venn Diagram",
      points: [
        { name: "A", y: 5 },
        { name: "B", y: 5 },
        { name: "C", y: 5 },
        {
          label_text: "C \n 7",
          x: "",
          sets: ["C"],
          y: 5,
          hatch: {
            style: "horizontal",
            color: "purple",
          },
        },
        {
          label_text: "B \n 5",
          x: "",
          sets: ["B"],
          y: 5,
          hatch: {
            style: "horizontal",
            color: "purple",
          },
        },
        {
          label_text: "A \n 6",
          x: "",
          sets: ["A"],
          y: 5,
          hatch: {
            style: "horizontal",
            color: "purple",
          },
        },
        {
          label_text: "8",
          x: "",
          sets: ["A", "B"],
          y: 1,
        },
        {
          label_text: "4",
          x: "",
          sets: ["A", "C"],
          y: 1,
        },
        {
          label_text: "2",
          x: "",
          sets: ["B", "C"],
          y: 1,
        },
        {
          label_text: "2",
          x: "",
          sets: ["A", "B", "C"],
          y: 1,
        },
      ],
    },
  ],
  toolbar_visible: false,
});
