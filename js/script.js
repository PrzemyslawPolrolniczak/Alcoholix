$(function(){
  //Tu jest kod do menu
  var tr1 = $('.triangle1');
  var tr2 = $('.triangle2');
  var tr3 = $('.triangle3');
  var tr4 = $('.triangle4');
  var name = $('.name');
  var gameMode = 0;
  
  //Animacja napisu
  $('div.hidden').fadeIn(3000).removeClass('hidden');
  
  //Animacje elementów menu
  
  tr1.one("mouseover", function(){
    tr1.addClass("rectangle");
    tr1.removeClass("triangle1");
    tr1.css("left", "-180px");
    tr1.animate({'opacity': 0}, 50, function () { tr1.css("width", "360px"),
    tr1.text('1 Gracz');}).animate({'opacity': 1}, 1000);
    gameMode = 1;
    console.log(gameMode);
  });
  
  tr2.one("mouseover",function(){
    tr2.addClass("rectangle altBackground");
    tr2.removeClass("triangle2");
    tr2.css("left", "187px");
    tr2.animate({'opacity': 0}, 50, function () { tr2.css("width", "360px"),
    tr2.text('2 Graczy');}).animate({'opacity': 1}, 1000);
    gameMode = 2;
    console.log(gameMode);
  });
  
  tr3.one("mouseover",function(){
    tr3.addClass("rectangle altBackground");
    tr3.removeClass("triangle3");
    tr3.css("left", "-180px");
    tr3.css("top", "187px");
    tr3.animate({'opacity': 0}, 50, function () { tr3.css('width', "360px"),
    tr3.text('3 Graczy');}).animate({'opacity': 1}, 1000);
    gameMode = 3;
    console.log(gameMode);
  });
  
  tr4.one("mouseover",function(){
    tr4.addClass("rectangle");
    tr4.removeClass("triangle4");
    tr4.css("left", "187px");
    tr4.css("top", "187px");
    tr4.text('');
    tr4.animate({'opacity': 0}, 50, function () { tr4.css('width', "360px"),
    tr4.text('4 Graczy');}).animate({'opacity': 1}, 1000);
    gameMode = 4;
    console.log(gameMode);
  });
  
  //Tu jest kod do gry
  
  var nameGame = $('.nameGame');
  var field = $('.col-1');
  var button = $('.changePlayer');
  var href = $('a');
  var board = $('.board');
  var player2 = $('.player2');
  var player = 0;
  var thisField = null;
  
  //Pojawianie się elementów na stronie
  nameGame.animate({'font-size': '50px', 'opacity': 1}, 3000);
  board.fadeIn(1000);
  player2.fadeIn(1000);
  
  
  //guzik zmiany gracza
  button.on('click',function(e){
    
    e.preventDefault();
    if (player == 0 || player == 2) {
      player = 1;
      button.text('Gracz 1');
    } else if (player == 1) {
      player = 2;
      button.text('Gracz 2');
    }
  });  
    
  //mechanika podświetlania
  
   field.on('mouseover', function() {
        console.log('hoverplayer2');
        console.log(gameMode);
     
        if(player == 2){
          if ($(this).hasClass('p2') == false) {
            $(this).addClass('p2Chose');
            $(this).removeClass('p1Chose');
          } else {
            $(this).removeClass('p1Chose');
            $(this).removeClass('p2Chose');
          }
        }
        
        if (player == 1){
            if ($(this).hasClass('p1') == false) {
              $(this).addClass('p1Chose');
              $(this).removeClass('p2Chose');
            } else {
              $(this).removeClass('p1Chose');
              $(this).removeClass('p2Chose');
            }
        }
   });
  
  //Mechanika pytań po klinięciu i zmian koloru.
  var random = null;
  var chosenQuestion = null;
  
  field.on('click', function(){
    thisField = $(this);
    if (player != 0 && thisField.hasClass('p1') == false && thisField.hasClass('p2') == false ) {
      
      random = Math.floor(Math.random() * $('.questionContent').length);
      chosenQuestion = $('.questionContent').hide().eq(random).show();
      
      $('.question').css('display', "block");
      $('.questionText').css('display', "block");
    } else if (player == 1 && thisField.hasClass('p2')){
      thisField.removeClass('p2');
      thisField.addClass('p1');
    } else if (player == 2 && thisField.hasClass('p1')){
      thisField.removeClass('p1');
      thisField.addClass('p2');
    }
  });
  
  // po pomyślnym wykonaniu zadania
  
  $('.yes').on('click', function(a){
    console.log('asda');
    
    if (chosenQuestion != null) {
      chosenQuestion.removeClass('questionContent');
      chosenQuestion.text('');
    }
  
    if(player == 1) {
      thisField.removeClass('p2');
      thisField.addClass('p1');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 2;
      button.text('Gracz 2');
      
    } else if(player == 2) {
      thisField.removeClass('p1');
      thisField.addClass('p2');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 1;
      button.text('Gracz 1');
    }
    
  });
  
  // po niewykonaniu zadania

  $('.no').on('click', function(b){
    if(player == 1) {
      thisField.removeClass('p1');
      thisField.addClass('p2');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 2;
      button.text('Gracz 2');
    } else if (player == 2) {
      thisField.removeClass('p2');
      thisField.addClass('p1');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      player = 1;
      button.text('Gracz 1');
    }
  });

});

//dodać game mode:1 / 2 / 3 / 4, i w zależności od game mode ifem ma dziać się któraś gra (czyli ilość graczy).
//dodać grę w tylko 1 dokumencie HTML, przez dodanie do wszystkich rzeczy z menu klase ".MENU" i danie jej hidden po kliknięciu w game-mode, a grze dać klase ".GAME" i show.
  