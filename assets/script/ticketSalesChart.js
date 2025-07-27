const ticket = document.querySelector(".ticketSalesChart #ticketChart");

/* Data Value */
const ticketData = [
  {
    name: "All Movies",
    location: "Jakarta",
    value: [3, 7, 12, 9, 5, 8, 4, 11, 6, 10, 13, 7, 2],
  },
  {
    name: "Action",
    location: "Bandung",
    value: [6, 8, 2, 4, 8, 12, 4, 3, 2, 5, 2, 10],
  },
  {
    name: "Adventure",
    location: "Bogor",
    value: [4, 8, 12, 4, 3, 2, 5, 2, 10, 3, 2, 5, 2],
  },
];

/* Chart */
const ticketChart = new Chart(ticket, {
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
        data: ticketData[0].value,
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
        text: `${ticketData[0].name}, ${ticketData[0].location}`,
        align: "start",
      },
      legend: {
        display: false,
      },
    },
  },
});

/* filter Ticket Sales Chart */

const ticketSalesForm = document.querySelector("#ticketSalesForm");

ticketSalesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const category = document.querySelector("#category-name").value;
  const location = document.querySelector("#location").value;

  if (category === "" && location === "") {
    alert("Pilih kategori terlebih dahulu!");
    return;
  }

  let filteredData = ticketData;

  if (category !== "") {
    filteredData = filteredData.filter((data) => data.name === category);
  }

  if (location !== "") {
    filteredData = filteredData.filter((data) => data.location === location);
  }

  if (filteredData.length === 0) {
    alert("Data tidak ditemukan!");
    return;
  }

  const { datasets } = ticketChart.data;
  const { plugins } = ticketChart.options;

  datasets[0].data = filteredData[0].value;

  const titleParts = [];
  if (category) titleParts.push(filteredData[0].name);
  if (location) titleParts.push(filteredData[0].location);
  plugins.title.text = titleParts.join(", ");
  ticketChart.update();
});
