document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "5cd4d64da772e31df91eb1233dd08525"; 

  const searchButton = document.getElementById("search-button");
  const cityInput = document.getElementById("city-input");

  function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const location = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        document.getElementById("location").textContent = `Météo à ${location}`;
        document.getElementById(
          "temperature"
        ).textContent = `Température : ${temperature}°C`;
        document.getElementById(
          "description"
        ).textContent = `Description : ${description}`;
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données météorologiques:",
          error
        );
        document.getElementById("location").textContent =
          "Impossible de récupérer les données météorologiques";
      });
  }

  searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
      fetchWeather(city);
      cityInput.value = "";
    } else {
      alert("Veuillez saisir le nom de la ville.");
    }
  });

  
  fetchWeather("Paris");
});
