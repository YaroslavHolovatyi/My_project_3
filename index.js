const slider = document.querySelector('.carousel__slides')

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const indicatorParents = document.querySelector('.carousel__controls ul');
const video = document.querySelector("video");
var sectionIndex = 0;

function setIndex(){
    document.querySelector('.carousel__controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)';
}

document.querySelectorAll('.carousel__controls li').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    })
})


function goBackward(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();  
    indicatorParents.children[sectionIndex].classList.add('selected');
    video.pause();    
}

function goForward(){
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 2;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();    
    video.play();
}


let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.984392, lng: -118.469374 },
      zoom: 3,
    });
  }

function initMapLA() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.984392, lng: -118.469374 },
    zoom: 15,
  });
  marker = new google.maps.Marker ({
    position:  { lat: 33.984392, lng: -118.469374 },
    map:map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: 'darkblue',
      fillOpacity: 1,
      strokeColor: '#00A',
      strokeOpacity: 1,
      strokeWeight: 1,
      scale: 4
    }
  });
  document.getElementById("city").innerHTML = "Los Angeles";
  document.getElementById("adres").innerHTML = "2005 Stokes Isle Apt. 896, New York 10010";
  document.getElementById("shedule") = "Mon - Sat: 11:00-19:00, Sun:11:00-16:00,";
  document.getElementById("phonNum") = "(0043) 568 456 902" + "<br>" + "(0043) 568 456 902";

}

function initMapNY() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.720689, lng: -74.000678 },
      zoom: 15,
    });
    marker = new google.maps.Marker ({
      position:  { lat: 40.720689, lng: -74.000678 },
      map:map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'darkblue',
        fillOpacity: 1,
        strokeColor: '#00A',
        strokeOpacity: 1,
        strokeWeight: 1,
        scale: 4
      }
    });

    document.getElementById("city").innerHTML = "NewYork";
    document.getElementById("adres").innerHTML = "2065 Stokes Isle Apt. 896, New York 10010";
    document.getElementById("shedule") = "Mon - Fri: 11:00-18:00, Sun:11:00-16:00,";
    document.getElementById("phonNum") = "(0043) 568 456 902" + "<br>" + "(0043) 568 456 902";
  
  }

  function initMapB() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 42.337668, lng: -71.045749 },
      zoom: 15,
    });
    marker = new google.maps.Marker ({
      position:  { lat: 42.337668, lng: -71.045749 },
      map:map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'darkblue',
        fillOpacity: 1,
        strokeColor: '#00A',
        strokeOpacity: 1,
        strokeWeight: 1,
        scale: 4
      }
    });
    document.getElementById("city").innerHTML = "Boston";
    document.getElementById("adres").innerHTML = "2005 Stokes Isle Apt. 896, New York 10010";
    document.getElementById("shedule") = "Mon - Sat: 11:00-19:00, Sun:11:00-16:00,";
    document.getElementById("phonNum") = "(0043) 568 456 902" + "<br>" + "(0043) 568 456 902";
  
  }

  function initMapD() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 42.373220, lng: -82.940741 },
      zoom: 15,
    });
    marker = new google.maps.Marker ({
      position:  { lat: 42.373170, lng: -82.940741 },
      map:map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'darkblue',
        fillOpacity: 1,
        strokeColor: '#00A',
        strokeOpacity: 1,
        strokeWeight: 1,
        scale: 4
      }
    });
    document.getElementById("city").innerHTML = "Detroit";
    document.getElementById("adres").innerHTML = "2005 Stokes Isle Apt. 896, New York 10010";
    document.getElementById("shedule") = "Mon - Sat: 11:00-19:00, Sun:11:00-16:00,";
    document.getElementById("phonNum") = "(0043) 568 456 902" + "<br>" + "(0043) 568 456 902";
  
  }