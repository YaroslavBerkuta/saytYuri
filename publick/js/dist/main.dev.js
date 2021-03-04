"use strict";

var hellopreloader = document.getElementById("hellopreloader_preload");

function fadeOutnojquery(el) {
  el.style.opacity = 1;
  var interhellopreloader = setInterval(function () {
    el.style.opacity = el.style.opacity - 0.05;

    if (el.style.opacity <= 0.05) {
      clearInterval(interhellopreloader);
      hellopreloader.style.display = "none";
    }
  }, 16);
}

window.onload = function () {
  setTimeout(function () {
    fadeOutnojquery(hellopreloader);
  }, 1000);
};

$(function () {
  // плавное перемещение страницы к нужному блоку
  $("nav li a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({
      scrollTop: destination
    }, 1500);
  });
});
$(document).ready(function () {
  $("#showHideContent").click(function () {
    if ($("#content1").is(":hidden")) {
      $("#content1").show("slow");
    } else {
      $("#content1").hide("slow");
    }

    return false;
  });
});
$(document).ready(function () {
  $("#showHideContent").click(function () {
    if ($("#content2").is(":hidden")) {
      $("#content2").show("slow");
    } else {
      $("#content2").hide("slow");
    }

    return false;
  });
});