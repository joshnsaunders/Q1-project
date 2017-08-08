
//$.each
//---- Inititiating the Map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 39.748897, lng: -104.954746}
  });

  $(document).ready(function(){
//----- Default colors for the school grades
  var dpsDefault = {
    path: mapIcons.shapes.SQUARE_PIN,
    fillColor: '#76787c',
    fillOpacity: 0.6,
    strokeColor: '',
    strokeWeight: 0.3,
    value:"default"
  }
  var dpsBlue = {
    path: mapIcons.shapes.SQUARE_PIN,
    fillColor:'#1a57f2',
    fillOpacity:0.9,
    strokeColor:'',
    strokeWeight:0.5,
    value:"blue"
  }
  var dpsRed = {
    path: mapIcons.shapes.SQUARE_PIN,
    fillColor:'#ea3317',
    fillOpacity:0.9,
    strokeColor:'',
    strokeWeight:0.5,
  }
  var dpsYellow = {
    path:mapIcons.shapes.SQUARE_PIN,
    fillColor:'#f7f70c',
    fillOpacity:0.9,
    strokeColor:'',
    strokeWeight:0.5,
  }
  var dpsOrange = {
    path:mapIcons.shapes.SQUARE_PIN,
    fillColor:'#ea8f07',
    fillOpacity:0.9,
    strokeColor:'',
    strokeWeight:0.5,
  }
  var dpsGreen = {
    path:mapIcons.shapes.SQUARE_PIN,
    fillColor:'#31bf11',
    fillOpacity:0.9,
    strokeColor:'',
    strokeWeight:0.5,
  }
//-------------------Array of all school names for searching purpposes
//-----------------Below are the datalist options for the organization that runs the school
var schoolOperators = ["Denver Science and Technology", "UPrep", "Strive", "Venture Prep", "DPS", "GALS"]
// var sOperators = [Denver Science and Technology, UPrep, Strive, Venture Prep, DPS, GALS]
var schoolOptions = [];
for (var i=0;i<schoolOperators.length;i++){
  schoolOptions.push("<option value='" + schoolOperators[i] + "'>")
}
$('#dataOperator').html(schoolOptions)

$('#colorReset').click(function(event){
  event.preventDefault();
  $('#cc')[0].reset();
  })


//----------- New google maps markers for each school and their hover event handlers
//----------------------------Elementary Schools-----------------------
//-----------Uprep Steele St.

var steele = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.768974, -104.949259),
	icon: dpsDefault,
	map_icon_label: '<span class="blueHat map-icon map-icon-university"></span>',
  type:"elem",
  ece:"N",
  access:"yellow",
  color: "blue",
  operator:"uprep",
  info:"UPrep Steele St.",
  phone:"  (453-895-9846)"
 });

var steelewindow = new google.maps.InfoWindow({
  content:'<div>' + steele["info"] + steele["phone"] + '</div>'
})
google.maps.event.addListener(steele, 'mouseover', function() {
  this.setIcon(dpsBlue);
  steelewindow.open(map, steele)
});
google.maps.event.addListener(steele, 'mouseout', function() {
  this.setIcon(dpsDefault);
  steelewindow.close(map, steele)
});


//-----------Uprep Arapahoe St.
var arapahoe = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.755995, -104.985700),
	icon: dpsDefault,
	map_icon_label: '<span class="blueHat map-icon map-icon-university"></span>',
  type:"elem",
  ece:"N",
  access:"yellow",
  color:"blue",
  operator:"uprep"
});
google.maps.event.addListener(arapahoe, 'mouseover', function() {
  this.setIcon(dpsBlue);
});
google.maps.event.addListener(arapahoe, 'mouseout', function() {
  this.setIcon(dpsDefault);
});
//------------Smith Elementary
var smith = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.767092, -104.918310),
	icon: dpsDefault,
	map_icon_label: '<span class="redHat map-icon map-icon-university"></span>',
  type:"elem",
  ece:"U",
  access:"U",
  color:"red",
  operator:"dps"
});
google.maps.event.addListener(smith, 'mouseover', function() {
  this.setIcon(dpsRed);
});
google.maps.event.addListener(smith, 'mouseout', function() {
  this.setIcon(dpsDefault);
});
//------------Wyatt Elementary
var wyatt = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.767397, -104.967769),
	icon: dpsDefault,
	map_icon_label: '<span class="yellowHat map-icon map-icon-university"></span>',
  type:"elem",
  ece:"U",
  access:"U",
  color:"yellow",
  operator:"dps"
});
google.maps.event.addListener(wyatt, 'mouseover', function() {
  this.setIcon(dpsYellow);
});
google.maps.event.addListener(wyatt, 'mouseout', function() {
  this.setIcon(dpsDefault);
});
///------------------Swansea Elementary
var swansea = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.781041, -104.956406),
	icon: dpsDefault,
	map_icon_label: '<span class="orangeHat map-icon map-icon-university"></span>',
  type:"elem",
  ece:"U",
  access:"U",
  color:"orange",
  operator:"dps"
});
google.maps.event.addListener(swansea, 'mouseover', function() {
  this.setIcon(dpsOrange);
});
google.maps.event.addListener(swansea, 'mouseout', function() {
  this.setIcon(dpsDefault);
});
//---------------Park Hill Elementary school
var parkhill = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.745228, -104.929281),
	icon: dpsDefault,
	map_icon_label: '<span class=" greenHat map-icon map-icon-university"></span>',
  type:"elem",
  ece:"U",
  access:"U",
  color:"green",
  operator:"dps"
});
google.maps.event.addListener(parkhill, 'mouseover', function() {
  this.setIcon(dpsGreen);
});
google.maps.event.addListener(parkhill, 'mouseout', function() {
  this.setIcon(dpsDefault);
})
//------------------------Middle Schools------------------------\\
//----------Henry World
var henryworld = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.660704, -105.058570),
	icon: dpsDefault,
	map_icon_label: '<span class="redHat map-icon map-icon-university"></span>',
  type:"middle",
  ece:"U",
  access:"U",
  color: "red",
  operator:"dps"
});
google.maps.event.addListener(henryworld, 'mouseover', function() {
  this.setIcon(dpsRed);
});
google.maps.event.addListener(henryworld, 'mouseout', function() {
  this.setIcon(dpsDefault);
})
//----------DCIS at Fairmount
var dcisfairmount = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.720226, -104.994580),
	icon: dpsDefault,
	map_icon_label: '<span class="orangeHat map-icon map-icon-university"></span>',
  type:"middle",
  ece:"U",
  access:"U",
  color:"orange",
  operator: "dps"
});
google.maps.event.addListener(dcisfairmount, 'mouseover', function() {
  this.setIcon(dpsOrange);
});
google.maps.event.addListener(dcisfairmount, 'mouseout', function() {
  this.setIcon(dpsDefault);
})
//-----------Skinner Middle School
var skinner = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.772298, -105.032232),
	icon: dpsDefault,
	map_icon_label: '<span class="yellowHat map-icon map-icon-university"></span>',
  type:"middle",
  ece:"U",
  access:"U",
  color:"yellow",
  operator: "dps"
});
google.maps.event.addListener(skinner, 'mouseover', function() {
  this.setIcon(dpsYellow);
});
google.maps.event.addListener(skinner, 'mouseout', function() {
  this.setIcon(dpsDefault);
})
//--------------Strive Prep Sunnyside
var strivesunnyside = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.782392, -105.007162),
	icon: dpsDefault,
	map_icon_label: '<span class="greenHat map-icon map-icon-university"></span>',
  type:"middle",
  ece:"U",
  access:"U",
  color:"green",
  operator: "strive"
});
google.maps.event.addListener(strivesunnyside, 'mouseover', function() {
  this.setIcon(dpsGreen);
});
google.maps.event.addListener(strivesunnyside, 'mouseout', function() {
  this.setIcon(dpsDefault);
})
//------------------DSST Byers
var dsstbyers = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.713683, -104.979855),
	icon: dpsDefault,
	map_icon_label: '<span class="blueHat map-icon map-icon-university"></span>',
  type:"middle",
  ece:"U",
  access:"U",
  color:"blue",
  operator:"denver science and technology"
});
google.maps.event.addListener(dsstbyers, 'mouseover', function() {
  this.setIcon(dpsBlue);
});
google.maps.event.addListener(dsstbyers, 'mouseout', function() {
  this.setIcon(dpsDefault);
})
//------------------High Schools-------------------------

var ventureprep = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.758717, -104.942626),
	icon: dpsDefault,
	map_icon_label: '<span class="redHat map-icon map-icon-university"></span>',
  type:"high",
  ece:"U",
  access:"U",
  color:"red",
  operator:"venture prep"
});
google.maps.event.addListener(ventureprep, 'mouseover', function() {
  this.setIcon(dpsRed);
});
google.maps.event.addListener(ventureprep, 'mouseout', function() {
  this.setIcon(dpsDefault);
})
//----------------Abraham Lincoln High School
var abrahamlincoln = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.676702, -105.026834),
	icon: dpsDefault,
	map_icon_label: '<span class="orangeHat map-icon map-icon-university"></span>',
  type:"high",
  ece:"U",
  access:"U",
  color:"orange",
  operator:"dps"
});
google.maps.event.addListener(abrahamlincoln, 'mouseover', function() {
  this.setIcon(dpsOrange);
});
google.maps.event.addListener(abrahamlincoln, 'mouseout', function() {
  this.setIcon(dpsDefault);
})
//-------------Girls Athletic Leadership High School
var galshigh = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.728621, -104.995628),
	icon: dpsDefault,
	map_icon_label: '<span class="yellowHat map-icon map-icon-university"></span>',
  type:"high",
  ece:"U",
  access:"U",
  color:"yellow",
  operator: "gals"
});
google.maps.event.addListener(galshigh, 'mouseover', function() {
  this.setIcon(dpsYellow);
});
google.maps.event.addListener(galshigh, 'mouseout', function() {
  this.setIcon(dpsDefault);
})
//---------------- Strive Prep Excel
var striveexcel = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.760058, -105.023658),
	icon: dpsDefault,
	map_icon_label: '<span class="greenHat map-icon map-icon-university"></span>',
  type:"high",
  ece:"U",
  access:"U",
  color:"green",
  operator:"strive"
});
google.maps.event.addListener(striveexcel, 'mouseover', function() {
  this.setIcon(dpsGreen);
});
google.maps.event.addListener(striveexcel, 'mouseout', function() {
  this.setIcon(dpsDefault);
})
///--------------- DSST College View
var collegeview = new mapIcons.Marker({
	map: map,
	position: new google.maps.LatLng(39.660438, -105.027316),
	icon: dpsDefault,
	map_icon_label: '<span class="blueHat map-icon map-icon-university"></span>',
  type:"high",
  ece:"U",
  access:"U",
  color:"blue",
  operator:"dps"
});
google.maps.event.addListener(collegeview, 'mouseover', function() {
  this.setIcon(dpsBlue);
});
google.maps.event.addListener(collegeview, 'mouseout', function() {
  this.setIcon(dpsDefault);
})

var names = [steele, arapahoe, smith, wyatt, swansea, parkhill, henryworld, dcisfairmount, skinner, strivesunnyside,
dsstbyers, ventureprep, abrahamlincoln, galshigh, striveexcel, collegeview]

var blueArray = [];

$('#colorAndType, #orgAndColor').click(function(){
if(((blue).prop("checked")==false)&&((green).prop("checked")==false)&&((yellow).prop("checked")==false)&&((orange).prop("checked")==false)&&((yellow).prop("checked")==false)&&((red).prop("checked")==false)){
  $('#opType').attr("value", "one")}
  else $('#opType').attr("value", "both")

  console.log("marmarmar");
});


$('#orgAndColor').addClass('disabled')

$('#orgAndColor').click(function(){
  if ($('.corg').prop("disabled")){
      $('#type')[0].reset();
      $('.corg').attr("disabled",false)
      $('#orgAndColor').removeClass('disabled')
      $('#divType').addClass('disabled')
      $('.cat').attr("disabled", true)

      console.log($('.corg').prop("disabled"))
}})

$('#divType').click(function(){
  if($('.cat').prop("disabled")){
    $('#org')[0].reset();
    $('.corg').attr("disabled", true)
    $('#orgAndColor').addClass('disabled')
    $('#divType').removeClass('disabled')
    $('.cat').attr("disabled", false)
  }})

  $('#schoolReset').click(function(event){
    event.preventDefault();
    $('#type')[0].reset();
  })

$('#orgInfo').hide()

$(".Ex").hide()

$('#cbBlue').click(function(){
    $('#missionStatement').hide()
    $('#blueEx').show();
    $('#greenEx, #yellowEx, #orangeEx, #redEx').hide();
})

$('#cbGreen').click(function(){
  $('#missionStatement').hide();
  $('#greenEx').show();
  $('#blueEx, #yellowEx, #orangeEx, #redEx').hide();
})

$('#cbYellow').click(function(){
  $('#missionStatement').hide();
  $('#yellowEx').show();
  $('#blueEx, #greenEx, #orangeEx, #redEx').hide();
})

$('#cbOrange').click(function(){
  $('#missionStatement').hide();
  $('#orangeEx').show();
  $('#blueEx, #greenEx, #yellowEx, #redEx').hide();
})

$('#cbRed').click(function(){
  $('#missionStatement').hide();
  $('#redEx').show();
  $('#blueEx, #greenEx, #yellowEx, #orangeEx').hide();
})

$('#card, #asideFooter, #blueEx, #greenEx, #yellowEx, #orangeEx, #redEx ').click(function(){
  $('#missionStatement').show();
  $('#blueEx, #greenEx, #yellowEx, #orangeEx, #redEx').hide();
})


var blue = $('#blueCheck')
var green = $('#greenCheck')
var yellow = $('#yellowCheck')
var orange = $('#orangeCheck')
var red = $('#redCheck')

//event.target jquery
$('#cc').click(function(){
  funnel(names)
})
  function funnel(array) {

if(($('#elem').prop("checked")==false)&&($('#middle').prop("checked")==false)&&($('#high').prop("checked")==false)){
//-----All 5 options checked
  if(blue.is(":checked") && green.is(":checked") && yellow.is(":checked") && orange.is(":checked") && red.is(":checked")){
        for (var i=0;i<array.length;i++){
          if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
            array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//--4 options checkd one of which is blue
  else if  (blue.is(":checked") && green.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//----Red is not checked ^^
else if     (blue.is(":checked") && green.is(":checked") && yellow.is(":checked")&& red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//-----Orange is not checked^^^
else if    (blue.is(":checked") && green.is(":checked") && orange.is(":checked")&& red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//-------- Yellow is not checked ^^^^
else if    (blue.is(":checked") && red.is(":checked") && orange.is(":checked")&& yellow.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="red"||array[i].color==="orange"||array[i].color==="yellow"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//---------Green is not checked
else if    (green.is(":checked") && red.is(":checked") && orange.is(":checked")&& yellow.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="red"||array[i].color==="orange"||array[i].color==="yellow"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//------Blue is not checked^^^^^
//---------------^^^^^^Above section is used when 4 boxes are checked
//----------------Below is the section for when 3 off the options are checked

else if    (blue.is(":checked") && green.is(":checked") && yellow.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//---------------Blue, green and yellow are checked^^^^
else if    (blue.is(":checked") && green.is(":checked") && orange.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//---------------Blue green and orange are checked^^^^
else if    (blue.is(":checked") && green.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//--------------Blue, green and red are checked^^^^
else if    (blue.is(":checked") && yellow.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//------------Blue, yellow and red are checked^^^^^
else if    (blue.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//------------Blue, yellow and orange are checked^^^^
else if    (blue.is(":checked") && orange.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="orange"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//----------Blue, Orange and red are checked^^^^^^^

else if    (green.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}

else if    (green.is(":checked") && yellow.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}

else if    (green.is(":checked") && orange.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}

else if    (yellow.is(":checked") && orange.is(":checked") && red.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}

//-----------above code is used for when selecting three schools at a time
//--------Below is the code for selecting two schools at a time

  else if   (blue.is(":checked") && green.is(":checked")){
              for (var i=0;i<array.length;i++){
              if(array[i].color==="blue"||array[i].color==="green"){
              array[i].setVisible(true)
              } else { array[i].setVisible(false)}
              }}
//--------- Blue and Green are checked^^^^^^^^
  else if   (blue.is(":checked") && yellow.is(":checked")){
              for (var i=0;i<array.length;i++){
              if(array[i].color==="blue"||array[i].color==="yellow"){
              array[i].setVisible(true)
              } else { array[i].setVisible(false)}
              }}
//---------Blue and yellow are checked^^^^^^^
  else if   (blue.is(":checked")&& orange.is(":checked")){
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="orange"){
            array[i].setVisible(true)
            } else { array[i].setVisible(false)}
            }}
//----------Blue and orange are checked^^^^^^^^^
else if   (blue.is(":checked")&& red.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="blue"||array[i].color==="red"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//---------Blue and red are checked ^^^^^^^^
else if   (green.is(":checked")&& yellow.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="green"||array[i].color==="yellow"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
        }}
//---------Green and yellow are checked^^^^^^^
else if   (green.is(":checked")&& orange.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="green"||array[i].color==="orange"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//---------Green and orange are checked^^^^^^^
else if   (green.is(":checked")&& red.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="green"||array[i].color==="red"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//--------Green and Red are checked^^^^^^^
else if   (yellow.is(":checked")&& orange.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="yellow"||array[i].color==="orange"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//--------Yellow and Orange are checked^^^^^
else if   (yellow.is(":checked")&& red.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="yellow"||array[i].color==="red"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//-----------Yellow and Red are checked^^^^^^
else if   (orange.is(":checked")&& red.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="orange"||array[i].color==="red"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}
//---------Orange and Red are checked
//---------Above is the code for when two checkboxes are checked
//--------Below is the code for when one checkbox is checked
else if   (blue.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="blue"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}

else if   (green.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="green"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}

else if   (yellow.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="yellow"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}

else if   (orange.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="orange"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}

else if   (red.is(":checked")){
          for (var i=0;i<array.length;i++){
          if(array[i].color==="red"){
          array[i].setVisible(true)
          } else { array[i].setVisible(false)}
          }}

else      {
          for (var i=0;i<array.length;i++){
          array[i].setVisible(true)
          }}
        }
      }
      //----------- End of function for just the color checkboxes,starts at line 452---------------


//-------------------Beginning of just school types, elem, middle or high------------
var elem = $('#elem')
var middle = $('#middle')
var high = $('#high')

$('#type').click(function(){
  if (($('#blueCheck').prop("checked")==false)&&($('#greenCheck').prop("checked")==false)&&($('#yellowCheck').prop("checked")==false)&&($('#orangeCheck').prop("checked")==false)&&($('#redCheck').prop("checked")==false)){
    if (elem.is(':checked')&&(middle.is(':checked'))&&(high.is(':checked'))){
      for (var i=0;i<names.length;i++){
        if(names[i].type==="elem"||names[i].type==="middle"||names[i].type==="high"){
        names[i].setVisible(true)
      }}}

    else if (elem.is(':checked')&&(middle.is(':checked'))) {
      for (var i=0;i<names.length;i++){
        if(names[i].type==="elem"||names[i].type==="middle"){
          names[i].setVisible(true)
        }
        else {names[i].setVisible(false)}
        }}

      else if (elem.is(':checked')&&(high.is(':checked'))) {
        for (var i=0;i<names.length;i++){
          if(names[i].type==="elem"||names[i].type==="high"){
          names[i].setVisible(true)
          }
          else {names[i].setVisible(false)}
          }}

      else if (middle.is(':checked')&&(high.is(':checked'))) {
        for (var i=0;i<names.length;i++){
        if(names[i].type==="middle"||names[i].type==="high"){
        names[i].setVisible(true)
        }
        else {names[i].setVisible(false)}
        }}

      else if (elem.is(':checked')) {
        for (var i=0;i<names.length;i++){
        if(names[i].type==="elem"){
          names[i].setVisible(true)
        }
        else {names[i].setVisible(false)}
        }}

      else if (middle.is(':checked')) {
        for (var i=0;i<names.length;i++){
        if(names[i].type==="middle"){
        names[i].setVisible(true)
        }
        else {names[i].setVisible(false)}
        }}

      else if (high.is(':checked')) {
        for (var i=0;i<names.length;i++){
        if(names[i].type==="high"){
        names[i].setVisible(true)
        }
        else {names[i].setVisible(false)}
        }}
}})
//-----------End of just school type form--------------
//-----------Beginning of school operator form-----------
$('#opType').click(function(event){
  if($('#opType').val()==="both"){
    schoolsAndColors(names, event)
  }
  else
  // if(((blue).prop("checked")==false)&&((green).prop("checked")==false)&&((yellow).prop("checked")==false)&&((orange).prop("checked")==false)&&((yellow).prop("checked")==false)&&((red).prop("checked")==false))
  {
    var value = $('#schoolOpt').val()
    value =value.toLowerCase()
    for (var i=0;i<names.length;i++){
      if (value===names[i].operator){
        names[i].setVisible(true)
      } else {names[i].setVisible(false)}
        }
        event.preventDefault();
      $('#org')[0].reset();
    }})

$('#opReset').click(function(event){
  $('#org')[0].reset();
  event.preventDefault();
})
//---------------------------------End of just operator function------------------
//----------------Beginning of school color and school operator form-----------------------
$('#abutton').click(function(){
  schoolsAndColors (names, event)
})

  function schoolsAndColors (array, event){
    if(blue.prop("checked")||green.prop("checked")||yellow.prop("checked")||orange.prop("checked")||red.prop("checked")){

    var value = $('#schoolOpt').val();
    value = value.toLowerCase();

    if  (blue.is(":checked") && green.is(":checked") && yellow.is(":checked") && orange.is(":checked") && red.is(":checked")){
          var temp =[];
            for (var i=0;i<array.length;i++){
            if(array[i].operator===value){
            temp.push(array[i])}
            else {array[i].setVisible(false)
            }}

            for (var j=0;j<temp.length;j++){
              if(temp[j].color==="blue"||temp[j].color==="green"||temp[j].color==="yellow"||temp[j].color==="orange"||temp[j].color==="red"){
                  temp[j].setVisible(true)}
                  else {temp[j].setVisible(false)}
                  }}
//----------------The above is the filter for when all 5 colors are checked and filtering by organization-------
//-----------Below is the filter for when only four colors are checked ----------
else if  (blue.is(":checked") && green.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
      var temp =[];
        for (var i=0;i<array.length;i++){
        if(array[i].operator===value){
        temp.push(array[i])}
          else {array[i].setVisible(false)}}
          for (var j=0;j<temp.length;j++){
            if(temp[j].color==="blue"||temp[j].color==="green"||temp[j].color==="yellow"||temp[j].color==="orange"){
              temp[j].setVisible(true)}
              else { temp[j].setVisible(false)}
              }}
//---------------Above red is not checked^^^^^^^^
else if  (blue.is(":checked") && green.is(":checked") && yellow.is(":checked") && red.is(":checked")){
      var temp =[];
        for (var i=0;i<array.length;i++){
        if(array[i].operator===value){
        temp.push(array[i])}
          else {array[i].setVisible(false)}}
          for (var j=0;j<temp.length;j++){
            if(temp[j].color==="blue"||temp[j].color==="green"||temp[j].color==="yellow"||temp[j].color==="red"){
              temp[j].setVisible(true)}
              else { temp[j].setVisible(false)}
              }}
//------------Above orange is not checked^^^^^^^
else if  (blue.is(":checked") && green.is(":checked") && orange.is(":checked") && red.is(":checked")){
      var temp =[];
        for (var i=0;i<array.length;i++){
        if(array[i].operator===value){
        temp.push(array[i])}
          else {array[i].setVisible(false)}}
          for (var j=0;j<temp.length;j++){
            if(temp[j].color==="blue"||temp[j].color==="green"||temp[j].color==="orange"||temp[j].color==="red"){
              temp[j].setVisible(true)}
              else { temp[j].setVisible(false)}
              }}
//------------Above yellow is not checked^^^^^^^^^^^^^
else if  (blue.is(":checked") && yellow.is(":checked") && orange.is(":checked") && red.is(":checked")){
      var temp =[];
        for (var i=0;i<array.length;i++){
        if(array[i].operator===value){
        temp.push(array[i])}
          else {array[i].setVisible(false)}}
          for (var j=0;j<temp.length;j++){
            if(temp[j].color==="blue"||temp[j].color==="yellow"||temp[j].color==="orange"||temp[j].color==="red"){
              temp[j].setVisible(true)}
              else { temp[j].setVisible(false)}
              }}
//---------Above green is not checked^^^^^^^^^^^^^
else if  (yellow.is(":checked") && green.is(":checked") && orange.is(":checked") && red.is(":checked")){
      var temp =[];
      for (var i=0;i<array.length;i++){
      if(array[i].operator===value){
      temp.push(array[i])}
      else {array[i].setVisible(false)}}
      for (var j=0;j<temp.length;j++){
      if(temp[j].color==="yellow"||temp[j].color==="green"||temp[j].color==="orange"||temp[j].color==="red"){
      temp[j].setVisible(true)}
      else { temp[j].setVisible(false)}
      }}
//------------Above blue is not checked^^^^^^^^^^^^^
//-----------Above are all of the options for when 4 schools are selected and also searching by operator
//-----------Below is all of the options for 3 schools are selected and the oper
else if  (blue.is(":checked") && green.is(":checked") && yellow.is(":checked")){
      var temp =[];
      for (var i=0;i<array.length;i++){
      if(array[i].operator===value){
      temp.push(array[i])}
      else {array[i].setVisible(false)}}
      for (var j=0;j<temp.length;j++){
      if(temp[j].color==="blue"||temp[j].color==="green"||temp[j].color==="yellow"){
      temp[j].setVisible(true)}
      else { temp[j].setVisible(false)}
      }}

      else if  (blue.is(":checked") && green.is(":checked") && orange.is(":checked")){
            var temp =[];
            for (var i=0;i<array.length;i++){
            if(array[i].operator===value){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}
            for (var j=0;j<temp.length;j++){
            if(temp[j].color==="blue"||temp[j].color==="green"||temp[j].color==="orange"){
            temp[j].setVisible(true)}
            else { temp[j].setVisible(false)}
            }}


    else if  (blue.is(":checked") && green.is(":checked") && red.is(":checked")){
          var temp =[];
          for (var i=0;i<array.length;i++){
          if(array[i].operator===value){
          temp.push(array[i])}
          else {array[i].setVisible(false)}}
          for (var j=0;j<temp.length;j++){
          if(temp[j].color==="blue"||temp[j].color==="green"||temp[j].color==="red"){
          temp[j].setVisible(true)}
          else { temp[j].setVisible(false)}
          }}


          else if  (blue.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
                var temp =[];
                for (var i=0;i<array.length;i++){
                if(array[i].operator===value){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}
                for (var j=0;j<temp.length;j++){
                if(temp[j].color==="blue"||temp[j].color==="yellow"||temp[j].color==="orange"){
                temp[j].setVisible(true)}
                else { temp[j].setVisible(false)}
                }}


          else if  (blue.is(":checked") && yellow.is(":checked") && red.is(":checked")){
                  var temp =[];
                  for (var i=0;i<array.length;i++){
                  if(array[i].operator===value){
                  temp.push(array[i])}
                  else {array[i].setVisible(false)}}
                  for (var j=0;j<temp.length;j++){
                  if(temp[j].color==="blue"||temp[j].color==="yellow"||temp[j].color==="red"){
                  temp[j].setVisible(true)}
                  else { temp[j].setVisible(false)}
                  }}

      else if  (blue.is(":checked") && orange.is(":checked") && red.is(":checked")){
            var temp =[];
            for (var i=0;i<array.length;i++){
            if(array[i].operator===value){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}
            for (var j=0;j<temp.length;j++){
            if(temp[j].color==="blue"||temp[j].color==="orange"||temp[j].color==="red"){
            temp[j].setVisible(true)}
            else { temp[j].setVisible(false)}
            }}

        else if  (green.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
              var temp =[];
              for (var i=0;i<array.length;i++){
              if(array[i].operator===value){
              temp.push(array[i])}
              else {array[i].setVisible(false)}}
              for (var j=0;j<temp.length;j++){
              if(temp[j].color==="green"||temp[j].color==="yellow"||temp[j].color==="orange"){
              temp[j].setVisible(true)}
              else { temp[j].setVisible(false)}
              }}

              else if  (green.is(":checked") && yellow.is(":checked") && red.is(":checked")){
                    var temp =[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].operator===value){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}
                    for (var j=0;j<temp.length;j++){
                    if(temp[j].color==="green"||temp[j].color==="yellow"||temp[j].color==="red"){
                    temp[j].setVisible(true)}
                    else { temp[j].setVisible(false)}
                    }}

            else if  (green.is(":checked") && orange.is(":checked") && red.is(":checked")){
                    var temp =[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].operator===value){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}
                    for (var j=0;j<temp.length;j++){
                    if(temp[j].color==="green"||temp[j].color==="orange"||temp[j].color==="red"){
                    temp[j].setVisible(true)}
                    else { temp[j].setVisible(false)}
                    }}

              else if  (yellow.is(":checked") && orange.is(":checked") && red.is(":checked")){
                  var temp =[];
                  for (var i=0;i<array.length;i++){
                  if(array[i].operator===value){
                  temp.push(array[i])}
                  else {array[i].setVisible(false)}}
                  for (var j=0;j<temp.length;j++){
                  if(temp[j].color==="yellow"||temp[j].color==="orange"||temp[j].color==="red"){
                  temp[j].setVisible(true)}
                  else { temp[j].setVisible(false)}
                  }}
//-------------Above is all of the options for 3 items checked plus organization-----------
//-----------Below are the options when 2 options are checked plus organization-----------
else if  (blue.is(":checked") && green.is(":checked")){
    var temp =[];
    for (var i=0;i<array.length;i++){
    if(array[i].operator===value){
    temp.push(array[i])}
    else {array[i].setVisible(false)}}
    for (var j=0;j<temp.length;j++){
    if(temp[j].color==="blue"||temp[j].color==="green"){
    temp[j].setVisible(true)}
    else { temp[j].setVisible(false)}
    }}

    else if  (blue.is(":checked") && yellow.is(":checked")){
        var temp =[];
        for (var i=0;i<array.length;i++){
        if(array[i].operator===value){
        temp.push(array[i])}
        else {array[i].setVisible(false)}}
        for (var j=0;j<temp.length;j++){
        if(temp[j].color==="blue"||temp[j].color==="yellow"){
        temp[j].setVisible(true)}
        else { temp[j].setVisible(false)}
        }}

        else if  (blue.is(":checked") && orange.is(":checked")){
            var temp =[];
            for (var i=0;i<array.length;i++){
            if(array[i].operator===value){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}
            for (var j=0;j<temp.length;j++){
            if(temp[j].color==="blue"||temp[j].color==="orange"){
            temp[j].setVisible(true)}
            else { temp[j].setVisible(false)}
            }}

            else if  (blue.is(":checked") && red.is(":checked")){
                var temp =[];
                for (var i=0;i<array.length;i++){
                if(array[i].operator===value){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}
                for (var j=0;j<temp.length;j++){
                if(temp[j].color==="blue"||temp[j].color==="red"){
                temp[j].setVisible(true)}
                else { temp[j].setVisible(false)}
                }}


                else if  (green.is(":checked") && yellow.is(":checked")){
                    var temp =[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].operator===value){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}
                    for (var j=0;j<temp.length;j++){
                    if(temp[j].color==="green"||temp[j].color==="yellow"){
                    temp[j].setVisible(true)}
                    else { temp[j].setVisible(false)}
                    }}


                    else if  (green.is(":checked") && orange.is(":checked")){
                        var temp =[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].operator===value){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}
                        for (var j=0;j<temp.length;j++){
                        if(temp[j].color==="green"||temp[j].color==="orange"){
                        temp[j].setVisible(true)}
                        else { temp[j].setVisible(false)}
                        }}


              else if  (green.is(":checked") && red.is(":checked")){
                var temp =[];
                for (var i=0;i<array.length;i++){
                if(array[i].operator===value){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}
                for (var j=0;j<temp.length;j++){
                if(temp[j].color==="green"||temp[j].color==="red"){
                temp[j].setVisible(true)}
                else { temp[j].setVisible(false)}
                }}

                else if  (yellow.is(":checked") && orange.is(":checked")){
                    var temp =[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].operator===value){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}
                    for (var j=0;j<temp.length;j++){
                    if(temp[j].color==="yellow"||temp[j].color==="orange"){
                    temp[j].setVisible(true)}
                    else { temp[j].setVisible(false)}
                    }}


                    else if  (yellow.is(":checked") && red.is(":checked")){
                        var temp =[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].operator===value){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}
                        for (var j=0;j<temp.length;j++){
                        if(temp[j].color==="yellow"||temp[j].color==="red"){
                        temp[j].setVisible(true)}
                        else { temp[j].setVisible(false)}
                        }}

                        else if  (orange.is(":checked") && red.is(":checked")){
                            var temp =[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].operator===value){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}
                            for (var j=0;j<temp.length;j++){
                            if(temp[j].color==="orange"||temp[j].color==="red"){
                            temp[j].setVisible(true)}
                            else { temp[j].setVisible(false)}
                            }}
//---------------Above are the options for selecting two schools and operators---------------
//--------------Below are the options for selecting one color and an operator--------------
else if  (blue.is(":checked")){
    var temp =[];
    for (var i=0;i<array.length;i++){
    if(array[i].operator===value){
    temp.push(array[i])}
    else {array[i].setVisible(false)}}
    for (var j=0;j<temp.length;j++){
    if(temp[j].color==="blue"){
    temp[j].setVisible(true)}
    else { temp[j].setVisible(false)}
    }}
    else if  (green.is(":checked")){
        var temp =[];
        for (var i=0;i<array.length;i++){
        if(array[i].operator===value){
        temp.push(array[i])}
        else {array[i].setVisible(false)}}
        for (var j=0;j<temp.length;j++){
        if(temp[j].color==="green"){
        temp[j].setVisible(true)}
        else { temp[j].setVisible(false)}
        }}
        else if  (yellow.is(":checked")){
            var temp =[];
            for (var i=0;i<array.length;i++){
            if(array[i].operator===value){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}
            for (var j=0;j<temp.length;j++){
            if(temp[j].color==="yellow"){
            temp[j].setVisible(true)}
            else { temp[j].setVisible(false)}
            }}
            else if  (orange.is(":checked")){
                var temp =[];
                for (var i=0;i<array.length;i++){
                if(array[i].operator===value){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}
                for (var j=0;j<temp.length;j++){
                if(temp[j].color==="orange"){
                temp[j].setVisible(true)}
                else { temp[j].setVisible(false)}
                }}
                else if  (red.is(":checked")){
                    var temp =[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].operator===value){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}
                    for (var j=0;j<temp.length;j++){
                    if(temp[j].color==="red"){
                    temp[j].setVisible(true)}
                    else { temp[j].setVisible(false)}
                    }}
  } //initital if statment
  event.preventDefault()
  $('#org')[0].reset();
}//beginning function bracket



$('.typeColor').click(function(){
  colorAndType(names)
})
// ---------------------Color and Type (elem, middle, high) form
function colorAndType (array){
  if($('.corg').prop('disabled')&&(blue.prop("checked")||green.prop("checked")||yellow.prop("checked")||orange.prop("checked")||red.prop("checked"))&&(elem.prop("checked")||middle.prop("checked")||high.prop("checked"))){

      if(blue.is(":checked") && green.is(":checked") && yellow.is(":checked") && orange.is(":checked") && red.is(":checked")){

//---------------------------------------------------------------------------------------------------------\\
      if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
          var temp=[];
          for (var i=0;i<array.length;i++){
          if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
          temp.push(array[i])}
          else {array[i].setVisible(false)}}

          for (var j=0;j<temp.length;j++){
          if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
          temp[j].setVisible(true)
          } else{temp[j].setVisible(false)}}}
                  //  console.log("harharhar")}

        else if(elem.prop("checked")&&middle.prop("checked")){
              var temp=[];
              for (var i=0;i<array.length;i++){
              if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
              temp.push(array[i])}
              else {array[i].setVisible(false)}}

              for (var j=0;j<temp.length;j++){
              if(temp[j].type==="elem"||temp[j].type==="middle"){
              temp[j].setVisible(true)
              } else{temp[j].setVisible(false)}}
              // console.log("harharhar")
            }

          else if(elem.prop("checked")&&high.prop("checked")){
                  var temp=[];
                  for (var i=0;i<array.length;i++){
                  if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                  temp.push(array[i])}
                  else {array[i].setVisible(false)}}

                  for (var j=0;j<temp.length;j++){
                  if(temp[j].type==="elem"||temp[j].type==="high"){
                  temp[j].setVisible(true)
                  } else{temp[j].setVisible(false)}}
                  // console.log("harharhar")
                }

              else if(middle.prop("checked")&&high.prop("checked")){
                      var temp=[];
                      for (var i=0;i<array.length;i++){
                      if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                      temp.push(array[i])}
                      else {array[i].setVisible(false)}}

                      for (var j=0;j<temp.length;j++){
                      if(temp[j].type==="middle"||temp[j].type==="high"){
                      temp[j].setVisible(true)
                      } else{temp[j].setVisible(false)}}
                      // console.log("harharhar")
                    }


                  else if(elem.prop("checked")){
                          var temp=[];
                          for (var i=0;i<array.length;i++){
                          if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                          temp.push(array[i])}
                          else {array[i].setVisible(false)}}

                          for (var j=0;j<temp.length;j++){
                          if(temp[j].type==="elem"){
                          temp[j].setVisible(true)
                          } else{temp[j].setVisible(false)}}
                          // console.log("harharhar")
                        }

                      else if(middle.prop("checked")){
                              var temp=[];
                              for (var i=0;i<array.length;i++){
                              if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                              temp.push(array[i])}
                              else {array[i].setVisible(false)}}

                              for (var j=0;j<temp.length;j++){
                              if(temp[j].type==="middle"){
                              temp[j].setVisible(true)
                              } else{temp[j].setVisible(false)}}
                              // console.log("harharhar")
                            }

                          else if(high.prop("checked")){
                                  var temp=[];
                                  for (var i=0;i<array.length;i++){
                                  if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                                  temp.push(array[i])}
                                  else {array[i].setVisible(false)}}

                                  for (var j=0;j<temp.length;j++){
                                  if(temp[j].type==="high"){
                                  temp[j].setVisible(true)
                                  } else{temp[j].setVisible(false)}}
                                  console.log("harharhar")
                                }
//--------------------------------------------------------------------------------------\\
}
  else if(blue.is(":checked") && green.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
          if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
              var temp=[];
              for (var i=0;i<array.length;i++){
              if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
              temp.push(array[i])}
              else {array[i].setVisible(false)}}

              for (var j=0;j<temp.length;j++){
              if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
              temp[j].setVisible(true)
              } else{temp[j].setVisible(false)}}}
                      //  console.log("harharhar")}

            else if(elem.prop("checked")&&middle.prop("checked")){
                  var temp=[];
                  for (var i=0;i<array.length;i++){
                  if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                  temp.push(array[i])}
                  else {array[i].setVisible(false)}}

                  for (var j=0;j<temp.length;j++){
                  if(temp[j].type==="elem"||temp[j].type==="middle"){
                  temp[j].setVisible(true)
                  } else{temp[j].setVisible(false)}}
                  // console.log("harharhar")
                }

              else if(elem.prop("checked")&&high.prop("checked")){
                      var temp=[];
                      for (var i=0;i<array.length;i++){
                      if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                      temp.push(array[i])}
                      else {array[i].setVisible(false)}}

                      for (var j=0;j<temp.length;j++){
                      if(temp[j].type==="elem"||temp[j].type==="high"){
                      temp[j].setVisible(true)
                      } else{temp[j].setVisible(false)}}
                      // console.log("harharhar")
                    }

                  else if(middle.prop("checked")&&high.prop("checked")){
                          var temp=[];
                          for (var i=0;i<array.length;i++){
                          if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                          temp.push(array[i])}
                          else {array[i].setVisible(false)}}

                          for (var j=0;j<temp.length;j++){
                          if(temp[j].type==="middle"||temp[j].type==="high"){
                          temp[j].setVisible(true)
                          } else{temp[j].setVisible(false)}}
                          // console.log("harharhar")
                        }


                      else if(elem.prop("checked")){
                              var temp=[];
                              for (var i=0;i<array.length;i++){
                              if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                              temp.push(array[i])}
                              else {array[i].setVisible(false)}}

                              for (var j=0;j<temp.length;j++){
                              if(temp[j].type==="elem"){
                              temp[j].setVisible(true)
                              } else{temp[j].setVisible(false)}}
                              // console.log("harharhar")
                            }

                          else if(middle.prop("checked")){
                                  var temp=[];
                                  for (var i=0;i<array.length;i++){
                                  if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                                  temp.push(array[i])}
                                  else {array[i].setVisible(false)}}

                                  for (var j=0;j<temp.length;j++){
                                  if(temp[j].type==="middle"){
                                  temp[j].setVisible(true)
                                  } else{temp[j].setVisible(false)}}
                                  // console.log("harharhar")
                                }

                              else if(high.prop("checked")){
                                      var temp=[];
                                      for (var i=0;i<array.length;i++){
                                      if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                                      temp.push(array[i])}
                                      else {array[i].setVisible(false)}}

                                      for (var j=0;j<temp.length;j++){
                                      if(temp[j].type==="high"){
                                      temp[j].setVisible(true)
                                      } else{temp[j].setVisible(false)}}
                                      console.log("barbarbar")
                                    }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && green.is(":checked") && yellow.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && green.is(":checked") && orange.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && yellow.is(":checked") && orange.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(green.is(":checked") && yellow.is(":checked") && orange.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && green.is(":checked") && yellow.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="yellow"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && green.is(":checked") && orange.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="orange"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && green.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="green"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="orange"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && yellow.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="yellow"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && orange.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="red"||array[i].color==="orange"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="red"||array[i].color==="orange"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="red"||array[i].color==="orange"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="red"||array[i].color==="orange"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="red"||array[i].color==="orange"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="red"||array[i].color==="orange"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="red"||array[i].color==="orange"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(green.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="orange"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(green.is(":checked") && yellow.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="green"||array[i].color==="yellow"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(green.is(":checked") && orange.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="green"||array[i].color==="orange"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(red.is(":checked") && yellow.is(":checked") && orange.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="red"||array[i].color==="yellow"||array[i].color==="orange"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="red"||array[i].color==="yellow"||array[i].color==="orange"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="red"||array[i].color==="yellow"||array[i].color==="orange"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="red"||array[i].color==="yellow"||array[i].color==="orange"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="red"||array[i].color==="yellow"||array[i].color==="orange"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="red"||array[i].color==="yellow"||array[i].color==="orange"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="red"||array[i].color==="yellow"||array[i].color==="orange"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && green.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="green"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="green"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="green"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="green"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="green"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="green"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="green"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && yellow.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="yellow"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="yellow"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="yellow"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="yellow"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="yellow"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="yellow"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="yellow"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && orange.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="orange"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="orange"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="orange"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="orange"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="orange"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="orange"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="orange"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(green.is(":checked") && yellow.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="yellow"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="green"||array[i].color==="yellow"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="green"||array[i].color==="yellow"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="green"||array[i].color==="yellow"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="green"||array[i].color==="yellow"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="green"||array[i].color==="yellow"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="green"||array[i].color==="yellow"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(green.is(":checked") && orange.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="orange"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="green"||array[i].color==="orange"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="green"||array[i].color==="orange"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="green"||array[i].color==="orange"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="green"||array[i].color==="orange"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="green"||array[i].color==="orange"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="green"||array[i].color==="orange"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(green.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="green"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="green"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="green"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="green"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="green"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="green"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(yellow.is(":checked") && orange.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="yellow"||array[i].color==="orange"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="yellow"||array[i].color==="orange"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="yellow"||array[i].color==="orange"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="yellow"||array[i].color==="orange"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="yellow"||array[i].color==="orange"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="yellow"||array[i].color==="orange"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="yellow"||array[i].color==="orange"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(yellow.is(":checked") && red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="yellow"||array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="yellow"||array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="yellow"||array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="yellow"||array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="yellow"||array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="yellow"||array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="yellow"||array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(red.is(":checked") && orange.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="red"||array[i].color==="orange"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="red"||array[i].color==="orange"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="red"||array[i].color==="orange"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="red"||array[i].color==="orange"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="red"||array[i].color==="orange"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="red"||array[i].color==="orange"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="red"||array[i].color==="orange"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(blue.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="blue"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="blue"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="blue"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="blue"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="blue"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="blue"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="blue"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(green.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="green"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="green"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="green"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="green"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="green"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="green"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="green"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(yellow.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="yellow"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="yellow"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="yellow"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="yellow"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="yellow"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="yellow"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="yellow"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(orange.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="orange"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="orange"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="orange"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="orange"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="orange"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="orange"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="orange"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}
else if(red.is(":checked")){
//---------------------------------------------------------------------------------------------------------\\
        if(elem.prop("checked")&&middle.prop("checked")&&high.prop("checked")){
            var temp=[];
            for (var i=0;i<array.length;i++){
            if(array[i].color==="red"){
            temp.push(array[i])}
            else {array[i].setVisible(false)}}

            for (var j=0;j<temp.length;j++){
            if(temp[j].type==="elem"||temp[j].type==="middle"||temp[j].type==="high"){
            temp[j].setVisible(true)
            } else{temp[j].setVisible(false)}}}
                    //  console.log("harharhar")}

          else if(elem.prop("checked")&&middle.prop("checked")){
                var temp=[];
                for (var i=0;i<array.length;i++){
                if(array[i].color==="red"){
                temp.push(array[i])}
                else {array[i].setVisible(false)}}

                for (var j=0;j<temp.length;j++){
                if(temp[j].type==="elem"||temp[j].type==="middle"){
                temp[j].setVisible(true)
                } else{temp[j].setVisible(false)}}
                // console.log("harharhar")
              }

            else if(elem.prop("checked")&&high.prop("checked")){
                    var temp=[];
                    for (var i=0;i<array.length;i++){
                    if(array[i].color==="red"){
                    temp.push(array[i])}
                    else {array[i].setVisible(false)}}

                    for (var j=0;j<temp.length;j++){
                    if(temp[j].type==="elem"||temp[j].type==="high"){
                    temp[j].setVisible(true)
                    } else{temp[j].setVisible(false)}}
                    // console.log("harharhar")
                  }

                else if(middle.prop("checked")&&high.prop("checked")){
                        var temp=[];
                        for (var i=0;i<array.length;i++){
                        if(array[i].color==="red"){
                        temp.push(array[i])}
                        else {array[i].setVisible(false)}}

                        for (var j=0;j<temp.length;j++){
                        if(temp[j].type==="middle"||temp[j].type==="high"){
                        temp[j].setVisible(true)
                        } else{temp[j].setVisible(false)}}
                        // console.log("harharhar")
                      }


                    else if(elem.prop("checked")){
                            var temp=[];
                            for (var i=0;i<array.length;i++){
                            if(array[i].color==="red"){
                            temp.push(array[i])}
                            else {array[i].setVisible(false)}}

                            for (var j=0;j<temp.length;j++){
                            if(temp[j].type==="elem"){
                            temp[j].setVisible(true)
                            } else{temp[j].setVisible(false)}}
                            // console.log("harharhar")
                          }

                        else if(middle.prop("checked")){
                                var temp=[];
                                for (var i=0;i<array.length;i++){
                                if(array[i].color==="red"){
                                temp.push(array[i])}
                                else {array[i].setVisible(false)}}

                                for (var j=0;j<temp.length;j++){
                                if(temp[j].type==="middle"){
                                temp[j].setVisible(true)
                                } else{temp[j].setVisible(false)}}
                                // console.log("harharhar")
                              }

                            else if(high.prop("checked")){
                                    var temp=[];
                                    for (var i=0;i<array.length;i++){
                                    if(array[i].color==="red"){
                                    temp.push(array[i])}
                                    else {array[i].setVisible(false)}}

                                    for (var j=0;j<temp.length;j++){
                                    if(temp[j].type==="high"){
                                    temp[j].setVisible(true)
                                    } else{temp[j].setVisible(false)}}
                                    console.log("barbarbar")
                                  }
//------------------------------------------------------------\\
}

}}//-----ending bracket for the Color and Type function on line 1137


})}
