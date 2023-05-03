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
      latitude = data[0].lat;
      longitude = data[0].lon;
      console.log("Latitude: ", latitude);
      console.log("Longitude: ", longitude);

    fetch("https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/Snapshot?latitude={"+latitude+"}&longitude={"+longitude+"}&radius=2", {
      Accept:application/json,
      APIKey:b4030edd35f70d5e390f969f2e5c0f6f,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('response:', data);
        var name = data[0].name;
        var website = data[0].website_url;
        console.log("Name: ", name);
        console.log("Website: ", website);
      });
    });
}
