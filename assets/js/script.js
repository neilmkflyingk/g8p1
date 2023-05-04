/*Declare variables*/
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
var listings = [];

/*Function start fetch geocode API &  attomdata API on click search button */
function fetchHandler(event) {
  event.preventDefault();
  var address = document.getElementById("address-search").value;
  console.log("address-input:", address);
  /*Fetch. Get the longitude and latitude from the address entered by the user*/
  fetch("https://geocode.maps.co/search?q={" + address + "}")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("geocode-response: ", data);
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
          $(".card-section").append( "<h4>"+ street + "</h4>");
         //create house description  
    $(".card-section").append("<p>Bathrooms: " + bathrooms + "</p>", "<p>Bedrooms: " + bedrooms + "</p>","<p>Square Footage: " + size + "</p>","<p>Lot Size (acres): " + lot + "</p>","<p>Property Type: " + proptype + "</p>",);  
      });
    });
  });
}

/* Function show results on click or alert if empty*/
$(document).ready(function () {
  $("button").click(function () {
    if (!$("#address-search").val()) {
      alert("Enter Street Address, City and Zip Code!");
    } else {
      $(".result").removeClass("hidden");
    }


    var listing = (document.getElementById("address-search").value);
    localStorage.setItem("listing", listing);
  });
});

// create & add elements using jquery
  var resultCardBlock = "<div class='result-card'></div>";  
  $(".result").append(resultCardBlock);  
  var resultCardContent = "<div class='grid-x grid-margin-x result-card-content'></div>";
  $(".result-card").append(resultCardContent);   
  var resultCardTitle = "<div class='card-section'></div>";
  $(".result-card-content").append(resultCardTitle);  
  //create house title  
  var footer = "<footer class='text-center'><a href='https://github.com/neilmkflyingk/house-hunters'><i class='fi-social-github'>HOUSE HUNTERS</i></a></footer>";
  $(".result").append(footer); 


  $(function() {
    loadData();
  });

  function loadData() {
    var input = document.getElementById("address-search");
    var saveAddress = localStorage.getItem('listing');
    input.value = saveAddress
  }
