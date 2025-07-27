const ticket = document.querySelector(".ticketSalesChart #ticketChart");

/* Data Value */
const ticketData = [
  {
    name: "Action",
    location: "Jakarta",
    value: [2, 5, 1, 9],
  },
  {
    name: "Action",
    location: "Bandung",
    value: [6, 8, 2, 4],
  },
  {
    name: "Action",
    location: "Bogor",
    value: [4, 8, 12, 4],
  },
  {
    name: "Adventure",
    location: "Jakarta",
    value: [2, 5, 1, 9],
  },
  {
    name: "Adventure",
    location: "Bandung",
    value: [6, 8, 2, 4],
  },
  {
    name: "Adventure",
    location: "Bogor",
    value: [4, 8, 12, 4],
  },
];

/* Chart */
const ticketChart = new Chart(ticket, {
  type: "line",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
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

  const filteredData = ticketData.find(
    (data) => data.name === category && data.location === location
  );

  if (!filteredData) {
    alert("Data tidak ditemukan!");
    return;
  }

  const { datasets } = ticketChart.data;
  const { plugins } = ticketChart.options;

  datasets[0].data = filteredData.value;

  const titleParts = [];
  if (category) titleParts.push(filteredData.name);
  if (location) titleParts.push(filteredData.location);
  plugins.title.text = titleParts.join(", ");
  ticketChart.update();
});
