let myChart = null

const crearGrafica = async () => {
const ctx = document.getElementById('myChart');

const fruitRequest = document.getElementById("fruitName").value;

const fruit = fruitRequest.toLowerCase()
console.log(fruit)
const endpointApi = `https://www.fruityvice.com/api/fruit/${fruit}`; 
console.log(endpointApi)

const api = await fetch(endpointApi)

const newData = api.json()
console.log(newData)

if (myChart) {
    myChart.destroy()
}

myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Hola"],
    datasets: [
        {
      label: '# of Votes',
      data: [1],
      borderWidth: 1
    }
   ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
}

