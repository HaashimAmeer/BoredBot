fetch("https://www.boredapi.com/api/activity")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("activity").innerHTML = `<h1>${data.activity}</h1>`;
    console.log(data.activity);
  });
