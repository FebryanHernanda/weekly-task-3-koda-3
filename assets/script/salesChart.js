const sales = document.querySelector(".salesChart #salesChart");

/* Data Value */
const salesValue = [
  {
    name: "All Movies",
    value: [3, 7, 12, 9, 5, 8, 4, 11, 6, 10, 13, 7, 2],
  },
  {
    name: "How to Train Your Dragon",
    value: [6, 8, 2, 4, 8, 12, 4, 3, 2, 5, 2, 10],
  },
  {
    name: "Man with No Past",
    value: [4, 8, 12, 4, 3, 2, 5, 2, 10, 3, 2, 5, 2],
  },
];

/* Chart */
const salesChart = new Chart(sales, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
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

  if (moviesNameValue === "") {
    alert("Pilih kategori terlebih dahulu!");
    return;
  }

  const filterMovie = salesValue.filter(
    (data) => data.name === moviesNameValue
  );

  const { datasets } = salesChart.data;
  const { plugins } = salesChart.options;

  datasets[0].data = filterMovie[0].value;
  plugins.title.text = moviesNameValue;
  salesChart.update();
});
