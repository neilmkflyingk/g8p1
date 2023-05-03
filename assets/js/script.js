var button = document.querySelector("#button");
button.addEventListener("click", fetchHandler);
var latitude;
var longitude;

function fetchHandler(event) {
  event.preventDefault();

  var address = document.getElementById("address-search").value;
  console.log(address);
  fetch("https://geocode.maps.co/search?q={" + address + "}")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var latitude = data[0].lat;
      var longitude = data[0].lon;
      console.log("Latitude: ", latitude);
      console.log("Longitude: ", longitude);

    fetch("https://api.openbrewerydb.org/v1/breweries?by_dist=" + latitude + "," + longitude + "&per_page=3",)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var name = data[0].name;
        var website = data[0].website_url;
        console.log("Name: ", name);
        console.log("Website: ", website);
      });
    });
}
