var map;
var myLatlng = new google.maps.LatLng(45.4214 , -75.6919);


//window load 
$(window).load(function(){
  getLocation();
  //getAllFishImages();
  

});


// function downloadURI(uri, name) {
//         var link = document.createElement("a");
//         link.download = name+"_img.png";
//         link.href = uri;
//         link.click();
//       }


function getGeoLocation(){
  getLocation();
  ajaxCallFishImage();
}


function getLocation()
{


  function geo_success(position) {
    alert(position.coords.latitude +" , "+ position.coords.longitude);
  }

  function geo_error() {
    alert("Sorry, geolocation is a mandatory part of the app. Please change your preferences and reload the page.");
   
  }

  var geo_options = {
    enableHighAccuracy: true, 
    maximumAge        : 30000, 
    timeout           : 27000
  };

  var wpid = navigator.geolocation.watchPosition(myLocation, geo_error, geo_options);




  // if (navigator.geolocation)
  // {


  //   navigator.geolocation.getCurrentPosition(myLocation, handle_error);
    
  // }
  // else{
  //   alert("Opps! It seems Geolocation is not supported by your browser. So we've placed you in Antarctica for the time being.");
  //   //default it to Antarctica
  //   myLatlng = new google.maps.LatLng(-82.840061, -135.263670);
  //   plotMap(myLatlng);
  // }
}

function handle_error(err) {
  console.log("err: " + err);

  if (err.code == 1) {
    // user said no!
    alert("user said no to geolocation")
  }
}


function myLocation(position)
{
    //myLatlng = new google.maps.LatLng(myLatitude +","+ myLongitude);
    myLatlng = new google.maps.LatLng(position.coords.latitude , position.coords.longitude);
    console.log("myLatlng: " + myLatlng);
    
    var geoWrapper = document.querySelector("#getGeolocation_wrapper");
    var geoLocation_output = document.createElement("li");
    geoLocation_output.innerHTML = "Lat,Long = "+ myLatlng;
    
    geoWrapper.appendChild(geoLocation_output);

    plotMap();

}

function  plotMap(){
  var mapOptions = {
    zoom: 16, //view at 11 to see school and down town section
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.querySelector('#map'), mapOptions);

}




// var fishNames = new Array();
// var jsHack_css ="";


// function getAllFishImages(){

//  var ul = document.querySelector(".test_all_images_wrapper");

//   //alert(data.layers.length);
//   for(var i=0; i<data.layers.length; i++){
    
//     fishNames[i] = data.layers[i].name
//     //fishNames[i] = fishNames[i].replace("_"," ");

//     var li = document.createElement("li");
//     //li.innerHTML = fishNames[i];

//     jsHack_css +=('#'+fishNames[i]+'_img{background-image: "../images/'+fishNames[i]+'_img.png"} \n')

//     //li.innerHTML = '<div class="fish_images" id="'+fishNames[i]+'_img"></div>';

//     ul.appendChild(li);


// $.ajax({
//     url: 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q='+fishNames[i],
//     dataType: "jsonp",
//     success:function(fishImagedata){
//       //console.log(fishImagedata.responseData.results[i].url +" "+fishNames[i]);
//       downloadURI(fishImagedata.responseData.results[i].url, fishNames[i])
//       }
//     });

//   }
//   console.log(jsHack_css);


//   //download all images for fish

//   for(var i=0; i<8; i++){
//     $.ajax({
//     url: 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q='+fishNames[i],
//     dataType: "jsonp",
//     success:function(fishImagedata){
//       //console.log(fishImagedata.responseData.results[i].url +" "+fishNames[i]);
//       //downloadURI(fishImagedata.responseData.results[i].url, fishNames[i])
//       }
//     });
//   }





// }





// function ajaxCallFishImage(){

//  $.ajax({
//         type: "GET",
//         url: 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=pink%20salmon',
//         dataType: "jsonp",
//         success: function (json) {
//             alert(json);
//         },
//         error: function (request, status, error){
//            alert("There's an "+ status +" while making this json ajax call.");
//         }
//     });
// }







  

