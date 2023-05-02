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

  var resultCardBlock = "<div class='result-card'></div>";  
  $(".result").append(resultCardBlock);  
  var resultCardContent = "<div class='grid-x grid-margin-x result-card-content'></div>";
  $(".result-card").append(resultCardContent);  
  var leftBlock = "<div class='medium-2 small-6 cell left-block'></div>"
  $(".result-card-content").append(leftBlock);  
  var thumbnail = "<div class='thumbnail'></div>";
  $(".left-block").append(thumbnail);
  //create house image  
  var resultCarImage = "<img class='result-card-image' src='https://placehold.it/200' alt='placeholder image'></img>";
  $(".thumbnail").append(resultCarImage);  
  var resultCardTitle = "<div class='result-card-title medium-10 small-6 cel'></div>";
  $(".result-card-content").append(resultCardTitle);  
  var houseCard = "<a href='house-card.html' class='title-link'>";
  $(".result-card-title").append(houseCard);  
  //create house title  
  var title = "<h4>Barnes & Noble, 555, 5th Avenue, Midtown East, Manhattan, New York County, New York, 10017, United States</h4>";
  $(".title-link").append(title);  
  //create house description  
  var text =  "<p>Charming home located in prime Waverly Park location with top-rated Los Altos schools. Abundantnatural light throughout the home Move right in w/new interior paint. Double pane windows throughout. Expansive formal living room.</p>"
  $(".result-card-title").append(text);  
  var footer = "<footer class='text-center'><a href='https://github.com/neilmkflyingk/house-hunters'><i class='fi-social-github'>HOUSE HUNTERS</i></a></footer>";
  $(".result").append(footer); 



