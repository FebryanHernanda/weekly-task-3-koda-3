const sales = document.querySelector(".salesChart #salesChart");

/* Data Value */
const salesValue = [
  {
    name: "How to Train Your Dragon",
    value: [200, 400, 150, 502],
    time: "yearsly",
  },
  {
    name: "How to Train Your Dragon",
    value: [6, 8, 2, 4],
    time: "monthly",
  },
  {
    name: "How to Train Your Dragon",
    value: [4, 8, 12, 4, 3, 2, 5],
    time: "weekly",
  },
  {
    name: "Man with No Past",
    value: [200, 400, 150, 502],
    time: "yearsly",
  },
  {
    name: "Man with No Past",
    value: [6, 8, 2, 4],
    time: "monthly",
  },
  {
    name: "Man with No Past",
    value: [4, 8, 12, 4, 3, 2, 5],
    time: "weekly",
  },
];

/* Chart */
const salesChart = new Chart(sales, {
  type: "line",
  data: {
    labels: ["2021", "2022", "2023", "2024"],
    datasets: [
      {
        data: salesValue[0].value,
        fill: true,
        borderWidth: 1,
        backgroundColor: "#1D4ED887",
        tension: 0.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "All Movies",
        align: "start",
      },
      legend: {
        display: false,
      },
    },
  },
});

/* filter Movies Chart */
const formSalesChart = document.querySelector("#salesChartForm");

formSalesChart.addEventListener("submit", (e) => {
  e.preventDefault();

  const moviesNameValue = document.querySelector("#movies-name").value;
  const moviesTimeValue = document.querySelector("#time").value;
  if (moviesNameValue === "" && moviesTimeValue === "") {
    alert("Pilih kategori terlebih dahulu!");
    return;
  }

  const filteredData = salesValue.find(
    (data) => data.name === moviesNameValue && data.time === moviesTimeValue
  );

  if (!filteredData) {
    alert("Data tidak ditemukan!");
    return;
  }

  let labelData = [];
  switch (filteredData.time) {
    case "yearsly":
      labelData = ["2020", "2021", "2024", "2025"];
      break;
    case "monthly":
      labelData = ["Jan", "Feb", "Mar", "Apr"];
      break;
    case "weekly":
      labelData = ["Week 1", "Week 2", "Week 3", "Week 4"];
      break;
  }

  let { datasets } = salesChart.data;
  const { plugins } = salesChart.options;

  datasets[0].data = filteredData.value;
  salesChart.data.labels = labelData;
  plugins.title.text = moviesNameValue;
  salesChart.update();
});
