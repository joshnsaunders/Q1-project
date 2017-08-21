import {
  schoolData,
  icons,
  deft
} from './data.js';

var keys = Object.keys(schoolData)
var zoomIcons = [null, "hiya!", "hiya!again"]
var sideBarKey = deft

$('#schoolCard').html("<div class=" + sideBarKey["cssName"] + ">" + sideBarKey["link"] + sideBarKey["name"] + "</a>" + '</div>' +

  '<div class="' + sideBarKey["cssIndicator"] + '">' + "<span id='titleDescriptor'>" + "DPS Assigned Grade" + "</span></div>" +

  '<div id="addressGrade"><span id="gradesKeyCard">' + sideBarKey["grades"] + "</span>" +

  "<span id='address'>" + sideBarKey["address"] + "</span>" +

  "<span id='keyPercentage'>" + "DPS<br>Score" + "</span></div>" +

  "<div id='phoneOperatorCard'><span id='phoneCard'>" + sideBarKey["phone"] + "</span>" +

  "<span id='operatorCard'>" + sideBarKey["operator"] + "</span></div>" +

  "<div id='parentSatisfactionCard'>Parent Satisfaction Grade & Percentage</div>" +

  "<div id='equityCard'>" + "Equity Grade & Percentage" + "</div>" +

  "<div id='enrollmentCard'>" + sideBarKey["enrollment"] + "</div>" +

  "<div id='lunchColorCard'><span id='frlCard'>Free or Reduced Lunch</span>" +
  "<span id='socCard'>Students of Color</span></div>" +

  "<div id='ellSpedCard'><span id='ellCard'>English Language Learners</span>" +

  "<span id='spedCard'>Special Education</span></div>" +

  "<div id='dataDate'>Data is from the DPS school performance framework for the 15-16 school year.</div>")



function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {
      lat:39.740318,
      lng:-104.920328,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  for (var i = 0; i < keys.length; i++) {
    keys[i] = new MarkerWithLabel({
      position: schoolData[keys[i]]["position"],
      icon: icons["dpsDefaultTiny"],
      draggable: false,
      raiseOnDrag: false,
      map: map,
      labelContent: "school",
      labelAnchor: new google.maps.Point(7.5, 18),
      labelClass: "tiny material-icons",
      labelStyle: {
        opacity: 0.75
      },
      color: schoolData[keys[i]]["icon"],
      infoBox: new google.maps.InfoWindow({
        content: '<div><strong>' + schoolData[keys[i]]["name"] + '</strong></div><div>' + schoolData[keys[i]]["phone"] + '</div>',
      }),
      name: schoolData[keys[i]]["name"],
      overallPercentage: schoolData[keys[i]]["percentage"],
      overallDescriptor: schoolData[keys[i]]["indicator"],
      grades: schoolData[keys[i]]["grades"],
      address: schoolData[keys[i]]["address"],
      link: schoolData[keys[i]]["link"],
      phone: schoolData[keys[i]]["phone"],
      operator: schoolData[keys[i]]["operator"],
      parentSatisfactionPercentage: schoolData[keys[i]]["parentSatisfactionPercentage"],
      parentSatisfactionIndicator: schoolData[keys[i]]["parentSatisfactionIndicator"],
      equityPercentage: schoolData[keys[i]]["equityPercentage"],
      equityIndicator: schoolData[keys[i]]["equityIndicator"],
      enrollment: schoolData[keys[i]]["enrollment"],
      frl: schoolData[keys[i]]["frl"],
      soc: schoolData[keys[i]]["soc"],
      ell: schoolData[keys[i]]["ell"],
      sped: schoolData[keys[i]]["sped"],
      cssIndicator: schoolData[keys[i]]["cssIndicator"],
      cssName: schoolData[keys[i]]["cssName"],
      smallIcon:icons["dpsDefaultSmall"],
    });
  }

  for (var i = 0; i < keys.length; i++) {
    google.maps.event.addListener(keys[i], 'mouseover', function() {
      this.setIcon(this["color"])
    });
    google.maps.event.addListener(keys[i], 'mouseover', function() {
      this["infoBox"].open(map, this)
    });
    google.maps.event.addListener(keys[i], 'mouseout', function() {
      this["infoBox"].close(map, this)
    });
    google.maps.event.addListener(keys[i], 'mouseout', function() {
      this.setIcon(icons["dpsDefault"]);
    });
    google.maps.event.addListener(keys[i], 'click', function() {

      $('#schoolCard').html(
        "<div class=" + this["cssName"] + ">" + this["link"] + this["name"] + "</a>" + '</div>' +

        '<div class="' + this["cssIndicator"] + '"id="nameCard">' + "<span id='titleDescriptor'>" + this["overallDescriptor"] + "</span></div>" +

        '<div id="addressGrade"><span id="gradesCard">' + this["grades"] + "</span>" +
        "<span id='addressCards'>" + this["address"] + "</span>" +
        "<span id='titlePercentage'>" + this["overallPercentage"] + "</span></div>" +

        "<div id='phoneOperatorCard'><span id='phoneCard'>" + this["phone"] + "</span>" +
        "<span id='operatorCard'>" + this["operator"] + "</span></div>" +

        "<div id='parentSatisfactionCard'>" + "Parent Satisfaction - " + this["parentSatisfactionPercentage"] + this["parentSatisfactionIndicator"] + "</div>" +

        "<div id='equityCard'>" + "Equity - " + this["equityPercentage"] + this["equityIndicator"] + "</div>" +

        "<div id='enrollmentCard'>" + "Enrollment - " + this["enrollment"] + "</div>" +

        "<div id='lunchColorCard'><span id='frlCard'>" + "Free or Reduced Lunch - " + this["frl"] + "</span>" +
        "<span id='socCard'>" + "Students of Color - " + this["soc"] + "</span></div>" +

        "<div id='ellSpedCard'><span id='ellCard'>" + "English Language Learners - " + this["ell"] + "</span>" +
        "<span id='spedCard'>" + "Special Education Students - " + this["sped"] + "</span></div>" +

        "<div id='dataDate'>Data is from the DPS school performance framework for the 15-16 school year.</div>");

      $('.exAll, #sbTitle, #scale').hide()
      $('#schoolCard').show()
    });
  }

  $('body').click(function(){
    var zoomLevel = map.getZoom();
    console.log(zoomLevel);
    // for (var i=0;i<)



    for (var i=0;i<keys.length;i++){
      if(zoomLevel>=13){
        keys[i].setIcon(icons["dpsDefault"]);
        keys[i]["labelClass"] = "material-icons";
        keys[i]["labelAnchor"] = new google.maps.Point(12, 30);
      } else if(zoomLevel===12){
        keys[i].setIcon(icons["dpsDefaultTiny"]);
        keys[i]["labelClass"] = "tiny material-icons";
        keys[i]["labelAnchor"] = new google.maps.Point(7.5, 18);
      } else if(zoomLevel<=11){
        keys[i].setIcon(icons["dpsDefaultWickedTiny"]);
        keys[i]["labelClass"] = "wickedTiny material-icons";
        keys[i]["labelAnchor"] = new google.maps.Point(4.2,9);
      }
    }
  });

  $('.checkbox').click(function() {
    searchLoop();
    return
  })

  $('#textInput').keydown(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      searchLoop();
      return;
    }
  });

  function searchLoop() {
    var elemArray = [];
    var elemStop = [];

    $('.check').each(function() {
      if ($(this).prop("checked")) {
        elemArray.push($(this).val())
      } else if ($('#formType input:checkbox:checked').length === 0) {
        elemStop.push("jLoopFalse")
      }
    })
    var elemUniq = [...new Set(elemArray)]
    var elemStopUniq = [...new Set(elemStop)]

    var gradesArray = [];
    var gradesStop = [];

    $('.school').each(function() {
      if ($(this).prop("checked")) {
        gradesArray.push($(this).val())
      } else if ($('#formSchool input:checkbox:checked').length === 0) {
        gradesStop.push("kLoopFalse")
      }
    })

    var gradesUniq = [...new Set(gradesArray)]
    var gradesStopUniq = [...new Set(gradesStop)]

    var bFalse = [];
    var bArray = [];
    if ($('#textInput').val().length > 0) {
      bArray.push($('#textInput').val())
    } else if ($('#textInput').text().length === 0) {
      bFalse.push("boxFalse")
    }
    buttonLogic(elemStopUniq, gradesStopUniq, bFalse, elemUniq, gradesUniq, bArray)
    //6 paramters, the stop paramets ,the checked parameters, and the data array for looping over the object.
    return
  }

  function buttonLogic(a, b, c, d, e, f) {
    var schools = Object.keys(schoolData)

    if (a[0] === "jLoopFalse" && b[0] === "kLoopFalse" && c[0] === "boxFalse") {
      for (var i = 0; i < schools.length; i++) {
        keys[i].setVisible(true)
      }
    } else if (a[0] === "jLoopFalse" && b[0] === "kLoopFalse") {
      var textSearch = f[0].toLowerCase();
      for (var i = 0; i < schools.length; i++) {
        if ((schoolData[schools[i]]["search"]).some(x => textSearch === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else if (b[0] === "kLoopFalse" && c[0] === "boxFalse") {
      for (var i = 0; i < schools.length; i++) {
        if (d.some(x => schoolData[schools[i]]["color"] === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else if (a[0] === "jLoopFalse" && c[0] === "boxFalse") {
      for (var i = 0; i < schools.length; i++) {
        if (e.some(x => schoolData[schools[i]]["elem"] === x)) {
          keys[i].setVisible(true)
        } else if (e.some(x => schoolData[schools[i]]["middle"] === x)) {
          keys[i].setVisible(true)
        } else if (e.some(x => schoolData[schools[i]]["high"] === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else if (a[0] === "jLoopFalse") {
      var textSearch = f[0].toLowerCase();
      for (var i = 0; i < schools.length; i++) {
        if ((schoolData[schools[i]]["search"]).some(x => textSearch === x) && e.some(x => schoolData[schools[i]]["elem"] === x)) {
          keys[i].setVisible(true);
        } else if ((schoolData[schools[i]]["search"]).some(x => textSearch === x) && e.some(x => schoolData[schools[i]]["middle"] === x)) {
          keys[i].setVisible(true);
        } else if ((schoolData[schools[i]]["search"]).some(x => textSearch === x) && e.some(x => schoolData[schools[i]]["high"] === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else if (b[0] === "kLoopFalse") {
      var textSearch = f[0].toLowerCase();
      for (var i = 0; i < schools.length; i++) {
        if ((schoolData[schools[i]]["search"]).some(x => textSearch === x) && (d.some(x => schoolData[schools[i]]["color"] === x))) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else if (c[0] === "boxFalse") {
      for (var i = 0; i < schools.length; i++) {
        if (e.some(x => schoolData[schools[i]]["elem"] === x) && d.some(x => schoolData[schools[i]]["color"] === x)) {
          keys[i].setVisible(true)
        } else if (e.some(x => schoolData[schools[i]]["middle"] === x) && d.some(x => schoolData[schools[i]]["color"] === x)) {
          keys[i].setVisible(true)
        } else if (e.some(x => schoolData[schools[i]]["high"] === x) && d.some(x => schoolData[schools[i]]["color"] === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    } else {
      for (var i = 0; i < schools.length; i++) {
        var textSearch = f[0].toLowerCase();
        if ((schoolData[schools[i]]["search"]).some(x => textSearch === x) && (d.some(x => schoolData[schools[i]]["color"] === x)) && e.some(x => schoolData[schools[i]]["elem"] === x)) {
          keys[i].setVisible(true)
        } else if ((schoolData[schools[i]]["search"]).some(x => textSearch === x) && (d.some(x => schoolData[schools[i]]["color"] === x)) && e.some(x => schoolData[schools[i]]["middle"] === x)) {
          keys[i].setVisible(true)
        } else if ((schoolData[schools[i]]["search"]).some(x => textSearch === x) && (d.some(x => schoolData[schools[i]]["color"] === x)) && e.some(x => schoolData[schools[i]]["high"] === x)) {
          keys[i].setVisible(true)
        } else {
          keys[i].setVisible(false)
        }
      }
    }
  }
}

window.initMap = initMap;
