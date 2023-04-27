
var button = document.querySelector("#button");
var address = JSON.stringify(document.querySelector("#address").textContent);
console.log(address);
button.addEventListener("click", fetchHandler)

function fetchHandler() {

    fetch('https://geocode.maps.co/search?q={' + address + '}',)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var latitude = data[0].lat;
        var longitude = data[0].lon;
        console.log("Latitude: ", latitude);
        console.log("Longitude: ", longitude);
    });
}
  
