var button = document.querySelector("#button");
button.addEventListener("click", fetchHandler);

function fetchHandler(event) {
    event.preventDefault();
    var address = document.getElementById("address-search").value;
    // console.log(address);
    fetch('https://geocode.maps.co/search?q={' + address + '}',)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       // console.log(data);
        var latitude = data[0].lat;
        var longitude = data[0].lon;
        savetostorage(data);
       //  console.log("Latitude: ", latitude);
        // console.log("Longitude: ", longitude);
    })
};

//create user object from submission
function savetostorage(data){
    localStorage.setItem("listing", JSON.stringify(data));
}

var listing = {
    button: button.value.trim(),
};
console.log(listing[0]);
//set new submission to local storage
localStorage.setItem("listing", JSON.stringify(listing));


