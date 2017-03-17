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
  
  //funkcja zmieniająca gracza
  
  function playerChange (playerNum) {
    player = playerNum;
    button.text('Gracz ' + playerNum);
  };
      
  //guzik zmiany gracza, w razie pomyłki aby można było naprawić błąd
    
  button.on('click',function(e){
    
    e.preventDefault();
    if (player == 0 || player == 2 && gameMode == 2) {
      playerChange(1);
    } else if (player == 1) {
      playerChange(2);
    } else if (gameMode == 3 && player == 2 || gameMode == 4 && player == 2) {
      playerChange(3);
    } else if (gameMode == 3 && player == 3) {
      playerChange(1);
    } else if (gameMode == 4 && player == 3) {
      playerChange(4);
    } else if (player == 4) {
      playerChange(1);
    }
  });  
    
  //Funkcja dodająca i usuwająca klasy
  
  function changeClasses (ClassAdd, remove1, remove2, remove3, remove4) {
    thisField.addClass(ClassAdd);
    thisField.removeClass(remove1);
    thisField.removeClass(remove2);
    thisField.removeClass(remove3);
    thisField.removeClass(remove4);
  }
  
  //mechanika podświetlania
  
   field.on('mouseover', function() {
     thisField = $(this);
        if(player == 2){
          
          if (thisField.hasClass('p2') == false) {
            changeClasses('p2Chose', 'p1Chose', 'p3Chose', 'p4Chose');
          } else {
            changeClasses('', 'p1Chose', 'p2Chose', 'p3Chose', 'p4Chose');
          }
          
        } else if (player == 1){
          
          if (thisField.hasClass('p1') == false) {
            changeClasses('p1Chose', 'p2Chose', 'p3Chose', 'p4Chose');
          } else {
            changeClasses('', 'p1Chose', 'p2Chose', 'p3Chose', 'p4Chose');
          }
        
        } else if (player == 3){
          
          if (thisField.hasClass('p3') == false) {
            changeClasses('p3Chose', 'p1Chose', 'p2Chose', 'p4Chose');
          } else {
            changeClasses('', 'p1Chose', 'p2Chose', 'p3Chose', 'p4Chose');
          }
          
        } else if (player == 4){
          
          if (thisField.hasClass('p4') == false) {
            changeClasses('p4Chose', 'p1Chose', 'p2Chose', 'p3Chose');
          } else {
            changeClasses('', 'p1Chose', 'p2Chose', 'p3Chose', 'p4Chose');
          }
          
        }
   });
  
  //Mechanika pytań po klinięciu i zmian koloru (w przypadku pomyłki użytkownika)
  var random = null;
  var chosenQuestion = null;
  
  field.on('click', function(){
    if (player != 0 && thisField.hasClass('p1') == false && thisField.hasClass('p2') == false && thisField.hasClass('p3') == false && thisField.hasClass('p4') == false ) {
      
      random = Math.floor(Math.random() * $('.questionContent').length);
      chosenQuestion = $('.questionContent').hide().eq(random).show();
      
      $('.question').css('display', "block");
      $('.questionText').css('display', "block");
      
    } else if (player == 1 && thisField.hasClass('p2') || player == 1 && thisField.hasClass('p3') || player == 1 && thisField.hasClass('p4')){
      
      changeClasses ('p1', 'p2', 'p3', 'p4', 'empty');
      
    } else if (player == 2 && thisField.hasClass('p1') || player == 2 && thisField.hasClass('p3') || player == 2 && thisField.hasClass('p4')){
      
      changeClasses ('p2', 'p1', 'p3', 'p4', 'empty');
      
    } else if (player == 3 && thisField.hasClass('p1') || player == 3 && thisField.hasClass('p2') || player == 3 && thisField.hasClass('p4')){
      
      changeClasses ('p3', 'p1', 'p2', 'p4', 'empty');
      
    } else if (player == 4 && thisField.hasClass('p1') || player == 4 && thisField.hasClass('p2') || player == 4 && thisField.hasClass('p3')){
      
      changeClasses ('p4', 'p1', 'p2', 'p3', 'empty');
      
    }
  });
  
  // po pomyślnym wykonaniu zadania
  
  $('.yes').on('click', function(a){
    
    if (chosenQuestion != null) {
      chosenQuestion.removeClass('questionContent');
      chosenQuestion.text('');
    }
  
    if (player == 1) {
      changeClasses ('p1', 'empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(2);
      gameEnd();
      
    } else if (player == 2 && gameMode == 2) {
      changeClasses ('p2', 'empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(1);
      gameEnd();
      
    } else if (player == 2 && gameMode == 3 || player == 2 && gameMode == 4 ) {
      changeClasses ('p2', 'empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(3);
      gameEnd();
      
    } else if (player == 3 && gameMode == 3) {
      changeClasses ('p3', 'empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(1);
      gameEnd();
      
    } else if (player == 3 && gameMode == 4) {
      changeClasses ('p3', 'empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(4);
      gameEnd();
      
    } else if (player == 4) {
      changeClasses ('p4', 'empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(1);
      gameEnd();
    }
    
  });
  
  // po niewykonaniu zadania

  $('.no').on('click', function(b){
    
    if(player == 1 && gameMode == 2) {
      changeClasses ('p2', 'p1', 'empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(2);
      
    } else if (player == 2 && gameMode == 2) {
      changeClasses ('p1', 'p2', 'empty');
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(1);
      
    } else if (player == 1) {
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(2);
      
    } else if (player == 2) {
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(3);
      
    } else if (player == 3 && gameMode == 3) {
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(1);
      
    } else if (player == 3 && gameMode == 4) {
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(4);
      
    } else if (player == 4) {
      $('.question').css('display', "none");
      $('.questionText').css('display', "none");
      playerChange(1);
    }
  });
  
  
  //Alert końca gry
  
  function gameEnd (){
    var winner = null;
    
    function fieldWinner (add, remove1, remove2, remove3) {
      field.removeClass(remove1);
      field.removeClass(remove2);
      field.removeClass(remove3);
      field.addClass(add);
    }
    
    if (field.hasClass('empty') == false) {
      
      if ( $('.p1').length > $('.p2').length && $('.p1').length > $('.p3').length && $('.p1').length > $('.p4').length ) {
        
        winner = "Gracz 1 wygrywa!";
        fieldWinner('p1', 'p2', 'p3', 'p4');
        playerChange(1);
        
      } else if ( $('.p2').length > $('.p1').length && $('.p2').length > $('.p3').length && $('.p2').length > $('.p4').length ) {
        
        winner = "Gracz 2 wygrywa!";
        fieldWinner('p2', 'p1', 'p3', 'p4');
        playerChange(2);
        
      } else if ( $('.p3').length > $('.p2').length && $('.p3').length > $('.p1').length && $('.p3').length > $('.p4').length ) {
        
        winner = "Gracz 3 wygrywa!";
        fieldWinner('p3', 'p2', 'p1', 'p4');
        playerChange(3);
        
      } else if ( $('.p4').length > $('.p2').length && $('.p4').length > $('.p3').length && $('.p4').length > $('.p1').length ) {
        
        winner = "Gracz 4 wygrywa!";
        fieldWinner('p4', 'p2', 'p3', 'p1');
        playerChange(4);
        
      } else {
        winner = "Remis!";
        
      }
      alert(winner);
    }
  }
  
});

//dodać przycisk powrotu do wyboru ilości graczy
//dodać responsywność (breakpointy)
//dodać funkcję, co po zapełnieniu całego pola wyświetla alert z wygranym graczem (można to jakoś zrobić przez "if $('.p3.).length > $('.p2').length ")
//dodać licznik wypitego alko i ilość punktów
  