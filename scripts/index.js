$(function () {
  var map;
  $("#accessTab").on("click", function () {
    if (map) {
      return;
    }
    var latLng = new google.maps.LatLng(35.68831890739527, 139.73538600250097);
    map = new google.maps.Map($("#google-map").get(0), {
      zoom: 17,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true
    });
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: 'メソン・セルバンテス'
    });
  });

  $('.mdl-layout__tab').click(function() {
    $('main.mdl-layout__content').scrollTop(0);
  });

  $("#google-button").on("click", function () {
    if (isAndroid()) {
      location.href = "https://maps.google.com/maps?daddr=35.68831890739527,139.73538600250097";
    } else {
      location.href = "comgooglemaps://?daddr=35.68831890739527,139.73538600250097";
    }
  });

  if (isAndroidBrowser()) {
    var link = '<a href="https://docs.google.com/forms/d/e/1FAIpQLSdfpI61dIR8Zcc3JqxDxYuV_1pX9o64t21HZ_LPGHCSXO4MDg/viewform?usp=sf_link" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">出欠のご回答はこちら</a>';
    $("#form-content").html(link);
  }
});

var isAndroid = function () {
  var ua = window.navigator.userAgent;
  return /Android/.test(ua);
};

var isAndroidBrowser = function () {
  var ua = window.navigator.userAgent;
  return (/Android/.test(ua) && /Linux; U;/.test(ua) && !/Chrome/.test(ua));
};
