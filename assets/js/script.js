var button = document.querySelector("#button");
button.addEventListener("click", fetchHandler);
var latitude;
var longitude;
var street;
var bathrooms;
var bedrooms;
var size;
var lot;
var proptype;

function fetchHandler(event) {
  event.preventDefault();

  var address = document.getElementById("address-search").value;
  console.log('address-input:', address);
  fetch("https://geocode.maps.co/search?q={" + address + "}")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('geocode-response: ', data);
      latitude = data[0].lat;
      longitude = data[0].lon;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

    fetch("https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/snapshot?latitude="+latitude+"&longitude="+longitude+"&radius=2", {
      headers: {'Accept': 'application/json', 'APIKey': 'b4030edd35f70d5e390f969f2e5c0f6f'}
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('attom-response:', data);
        
        
        console.log('address: ', street);
        data.property.forEach(element => {
          street = element.address.oneLine
          bathrooms = element.building.rooms.bathstotal
          bedrooms = element.building.rooms.beds
          size = element.building.size.universalsize
          lot = element.lot.lotSize1
          proptype = element.summary.propclass
          generatePropertyCard();
        });
      });
    });
}
var listings = [];

//Show results on click
$(document).ready(function () {
  $("button").click(function () {
    // show results on click
    $(".result").removeClass("hidden");

    // function init() {
    // var storedListings = JSON.parse(localStorage.getItem("listing"));
    // if (storedListings != null) {
    //   listings = storedListings;
    // }}

    // function storeListings() {
    //   localStorage.setItem("listing", JSON.stringify(listings));
    // }

    var listing = (document.getElementById("address-search").value);
    localStorage.setItem("listing", listing);

    // init();
    // storeListings();
    
  });
});  

// create & add elements using jquery
function generatePropertyCard() {
  var resultCardBlock = "<div class='result-card'></div>";  
  $(".result").append(resultCardBlock);  
  var resultCardContent = "<div class='grid-x grid-margin-x result-card-content'></div>";
  $(".result-card").append(resultCardContent);  
  var leftBlock = "<div class='medium-2 small-6 cell left-block'></div>"
  $(".result-card-content").append(leftBlock);  
  //var thumbnail = "<div class='thumbnail'></div>";
  //$(".left-block").append(thumbnail);
  //create house image  
  var resultCarImage = "<img class='result-card-image' src='https://placehold.it/200' alt='placeholder image'></img>";
  $(".thumbnail").append(resultCarImage);  
  var resultCardTitle = "<div class='result-card-title medium-10 small-6 cel'></div>";
  $(".result-card-content").append(resultCardTitle);  
  var houseCard = "<a href='house-card.html' class='title-link'>";
  $(".result-card-title").append(houseCard);  
  //create house title  
  //var title = "<h4>Barnes & Noble, 555, 5th Avenue, Midtown East, Manhattan, New York County, New York, 10017, United States</h4>";
   $(".title-link").append("<h4>" + street + "</h4>");
  //create house description  
  //var text = "<p>" + bathrooms + "</p>"+"<p>" + rooms + "</p>"
  $(".result-card-title").append("<p>Bathrooms: " + bathrooms + "</p>", "<p>Bedrooms: " + bedrooms + "</p>","<p>Square Footage: " + size + "</p>","<p>Lot Size (acres): " + lot + "</p>","<p>Property Type: " + proptype + "</p>",);  
  var footer = "<footer class='text-center'><a href='https://github.com/neilmkflyingk/house-hunters'><i class='fi-social-github'>HOUSE HUNTERS</i></a></footer>";
  $(".result").append(footer); 

}


