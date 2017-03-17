$(function(){
  //Tu jest kod do menu
  var tr1 = $('.triangle1');
  var tr2 = $('.triangle2');
  var tr3 = $('.triangle3');
  var tr4 = $('.triangle4');
  var name = $('.name');
  var gameMode = 0;
  
  //Animacja napisu
  var animate = $('div.hidden').fadeIn(3000);
  
  //Animacje elementów menu
  
  tr1.one("mouseover", function(){
    tr1.addClass("rectangle");
    tr1.removeClass("triangle1");
    tr1.css("left", "-180px");
    tr1.animate({'opacity': 0}, 50, function () { tr1.css("width", "360px"),
    tr1.text('1 Gracz');}).animate({'opacity': 1}, 1000);
  });
  
  tr2.one("mouseover",function(){
    tr2.addClass("rectangle altBackground");
    tr2.removeClass("triangle2");
    tr2.css("left", "187px");
    tr2.animate({'opacity': 0}, 50, function () { tr2.css("width", "360px"),
    tr2.text('2 Graczy');}).animate({'opacity': 1}, 1000);
  });
  
  tr3.one("mouseover",function(){
    tr3.addClass("rectangle altBackground");
    tr3.removeClass("triangle3");
    tr3.css("left", "-180px");
    tr3.css("top", "187px");
    tr3.animate({'opacity': 0}, 50, function () { tr3.css('width', "360px"),
    tr3.text('3 Graczy');}).animate({'opacity': 1}, 1000);
  });
  
  tr4.one("mouseover",function(){
    tr4.addClass("rectangle");
    tr4.removeClass("triangle4");
    tr4.css("left", "187px");
    tr4.css("top", "187px");
    tr4.text('');
    tr4.animate({'opacity': 0}, 50, function () { tr4.css('width', "360px"),
    tr4.text('4 Graczy');}).animate({'opacity': 1}, 1000);
  });
  
  //Tu jest kod do gry
  
  var nameGame = $('.nameGame');
  var field = $('.col-1');
  var button = $('.changePlayer');
  var board = $('.board');
  var player = 0;
  var thisField = null;
  var game = $('.game');
  var menu = $('.menu');
  var body = $('body');
  game.hide();
  button.hide();
  
  //Zmiana z menu na grę
  
  function showGame(){
    menu.fadeOut(500);
    game.delay(500).fadeIn(500);
    body.css('background-color', "#C0D860");
    button.delay(500).fadeIn(2000);
    nameGame.animate({'font-size': '50px', 'opacity': 1}, 3000);
    board.delay(500).fadeIn(2000);
  }
  
  //Zmiana ilości graczy
  
  tr2.on('click', function(){
    animate.stop();
    showGame();
    gameMode = 2;
  });
  
  tr3.on('click', function(){
    animate.stop();
    showGame();
    gameMode = 3;
  });
  
  tr4.on('click', function(){
    animate.stop();
    showGame();
    gameMode = 4;
  });
      
  //guzik zmiany gracza, w razie pomyłki aby można było naprawić błąd
  button.on('click',function(e){
    
    e.preventDefault();
    if (player == 0 || player == 2 && gameMode == 2) {
      player = 1;
      button.text('Gracz 1');
    } else if (player == 1) {
      player = 2;
      button.text('Gracz 2');
    } else if (gameMode == 3 && player == 2 || gameMode == 4 && player == 2) {
      player = 3;
      button.text('Gracz 3');
    } else if (gameMode == 3 && player == 3) {
      player = 1;
      button.text('Gracz 1');
    } else if (gameMode == 4 && player == 3) {
      player = 4;
      button.text('Gracz 4');
    } else if (player == 4) {
      player = 1;
      button.text('Gracz 1');
    }
  });  
    
  //mechanika podświetlania
  
   field.on('mouseover', function() {
     
        if(player == 2){
          if ($(this).hasClass('p2') == false) {
            $(this).addClass('p2Chose');
            $(this).removeClass('p1Chose');
            $(this).removeClass('p3Chose');
            $(this).removeClass('p4Chose');
          } else {
            $(this).removeClass('p1Chose');
            $(this).removeClass('p2Chose');
            $(this).removeClass('p3Chose');
            $(this).removeClass('p4Chose');
          }
        } else if (player == 1){
          if ($(this).hasClass('p1') == false) {
            $(this).addClass('p1Chose');
            $(this).removeClass('p2Chose');
            $(this).removeClass('p3Chose');
            $(this).removeClass('p4Chose');
          } else {
            $(this).removeClass('p1Chose');
            $(this).removeClass('p2Chose');
            $(this).removeClass('p3Chose');
            $(this).removeClass('p4Chose');
          }
        } else if (player == 3){
          if ($(this).hasClass('p3') == false) {
            $(this).addClass('p3Chose');
            $(this).removeClass('p1Chose');
            $(this).removeClass('p2Chose');
            $(this).removeClass('p4Chose');
          } else {
            $(this).removeClass('p1Chose');
            $(this).removeClass('p2Chose');
            $(this).removeClass('p3Chose');
            $(this).removeClass('p4Chose');
          }
        } else if (player == 4){
          if ($(this).hasClass('p4') == false) {
            $(this).addClass('p4Chose');
            $(this).removeClass('p1Chose');
            $(this).removeClass('p2Chose');
            $(this).removeClass('p3Chose');
          } else {
            $(this).removeClass('p1Chose');
            $(this).removeClass('p2Chose');
            $(this).removeClass('p3Chose');
            $(this).removeClass('p4Chose');
          }
        }
   });
  
  //Mechanika pytań po klinięciu i zmian koloru.
  var random = null;
  var chosenQuestion = null;
  
  field.on('click', function(){
    thisField = $(this);
    if (player != 0 && thisField.hasClass('p1') == false && thisField.hasClass('p2') == false && thisField.hasClass('p3') == false && thisField.hasClass('p4') == false ) {
      
      random = Math.floor(Math.random() * $('.questionContent').length);
      chosenQuestion = $('.questionContent').hide().eq(random).show();
      
      $('.question').css('display', "block");
      $('.questionText').css('display', "block");
      
    } else if (player == 1 && thisField.hasClass('p2') || player == 1 && thisField.hasClass('p3') || player == 1 && thisField.hasClass('p4')){
      
      thisField.removeClass('p2');
      thisField.removeClass('p3');
      thisField.removeClass('p4');
      thisField.removeClass('empty');
      thisField.addClass('p1');
      
    } else if (player == 2 && thisField.hasClass('p1') || player == 2 && thisField.hasClass('p3') || player == 2 && thisField.hasClass('p4')){
      
      thisField.removeClass('p1');
      thisField.removeClass('p3');
      thisField.removeClass('p4');
      thisField.removeClass('empty');
      thisField.addClass('p2');
      
    } else if (player == 3 && thisField.hasClass('p1') || player == 3 && thisField.hasClass('p2') || player == 3 && thisField.hasClass('p4')){
      
      thisField.removeClass('p1');
      thisField.removeClass('p2');
      thisField.removeClass('p4');
      thisField.removeClass('empty');
      thisField.addClass('p3');
      
    } else if (player == 4 && thisField.hasClass('p1') || player == 4 && thisField.hasClass('p2') || player == 4 && thisField.hasClass('p3')){
      
      thisField.removeClass('p1');
      thisField.removeClass('p2');
      thisField.removeClass('p3');
      thisField.removeClass('empty');
      thisField.addClass('p4');
    }
  });
  
  // po pomyślnym wykonaniu zadania
  
  $('.yes').on('click', function(a){
    
    if (chosenQuestion != null) {
      chosenQuestion.removeClass('questionContent');
      chosenQuestion.text('');
    }
  
    if (player == 1) {
      thisField.addClass('p1');
      thisField.removeClass('empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 2;
      button.text('Gracz 2');
      
    } else if (player == 2 && gameMode == 2) {
      thisField.addClass('p2');
      thisField.removeClass('empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 1;
      button.text('Gracz 1');
      
    } else if (player == 2 && gameMode == 3 || player == 2 && gameMode == 4 ) {
      thisField.addClass('p2');
      thisField.removeClass('empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 3;
      button.text('Gracz 3');
      
    } else if (player == 3 && gameMode == 3) {
      thisField.addClass('p3');
      thisField.removeClass('empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 1;
      button.text('Gracz 1');
      
    } else if (player == 3 && gameMode == 4) {
      thisField.addClass('p3');
      thisField.removeClass('empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 4;
      button.text('Gracz 4');
      
    } else if (player == 4) {
      thisField.addClass('p4');
      thisField.removeClass('empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 1;
      button.text('Gracz 1');
    }
    
  });
  
  // po niewykonaniu zadania

  $('.no').on('click', function(b){
    if(player == 1 && gameMode == 2) {
      thisField.removeClass('p1');
      thisField.removeClass('empty');
      thisField.addClass('p2');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 2;
      button.text('Gracz 2');
      
    } else if (player == 2 && gameMode == 2) {
      thisField.removeClass('p2');
      thisField.removeClass('empty');
      thisField.addClass('p1');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 1;
      button.text('Gracz 1');
      
    } else if (player == 1) {
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 2;
      button.text('Gracz 2');
      
    } else if (player == 2) {
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 3;
      button.text('Gracz 3');
      
    } else if (player == 3 && gameMode == 3) {
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 1;
      button.text('Gracz 1');
      
    } else if (player == 3 && gameMode == 4) {
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 4;
      button.text('Gracz 4');
      
    } else if (player == 4) {
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 1;
      button.text('Gracz 1');
    }
  });

});

//dodać przycisk powrotu do wyboru ilości graczy
//dodać responsywność (breakpointy)
//dodać funkcję, co po zapełnieniu całego pola wyświetla alert z wygranym graczem (można to jakoś zrobić przez "if $('.p3.).length > $('.p2').length ")
//dodać licznik wypitego alko i ilość punktów
  