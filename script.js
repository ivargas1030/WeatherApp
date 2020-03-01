$(document).ready(function() {
  $("#search-button").on("click", function() {
    var searchValue = $("#search-value").val();
    $("#submit-value").val("");

    searchWeather(submitValue);
  });

  function searchWeather(submitValue) {
    // var city = "London";
    //API key

    var APIKey = "0289f29709713810c4707b907c06cb71";

    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      submitValue +
      ",us&appid=" +
      APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          // Log the queryURL
          console.log(queryURL);

          // Log the resulting object
          console.log(response);

          // Transfer content to HTML
          $(".city").html("<h1>" + response + " Weather Details</h1>");
          $(".wind").text("Wind Speed: " + response.wind.speed);
          $(".humidity").text("Humidity: " + response.main.humidity);
          $(".temperature").text("Temperature (F) " + response.main.temp);

          // Log the data in the console as well
          console.log("Wind Speed: " + response.wind.speed);
          console.log("Humidity: " + response.main.humidity);
          console.log("Temperature (F): " + response.main.temp);
        }
      });
  }
});
