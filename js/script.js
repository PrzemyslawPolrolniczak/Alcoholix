$(function(){
  var tr1 = $('.triangle1');
  var tr2 = $('.triangle2');
  var tr3 = $('.triangle3');
  var tr4 = $('.triangle4');
  
  tr1.hover(function(){
    tr1.addClass("rectangle");
    tr1.removeClass("triangle1");
    tr1.animate({width: "360px"}, 1000);
    tr1.css("left", "-180px");
  });
  
  tr2.hover(function(){
    tr2.addClass("rectangle");
    tr2.removeClass("triangle2");
    tr2.animate({width: "360px"}, 1000);
    tr2.css("background-color", "#00B4CC");
    tr2.css("left", "180px");
  });
  //jak był position absolute to normalnie się rozkładał hmm
  tr3.hover(function(){
    tr3.addClass("rectangle");
    tr3.removeClass("triangle3");
    tr3.animate({width: "360px"}, 1000);
    tr3.css("bottom", "7px");
    tr3.css("background-color", "#00B4CC");
    tr3.css("left", "-180px");
  });
  
  tr4.hover(function(){
    tr4.addClass("rectangle");
    tr4.removeClass("triangle4");
    tr4.animate({width: "360px"}, 1000);
    tr4.css("bottom", "7px");
    tr4.css("left", "180px");
  });
});