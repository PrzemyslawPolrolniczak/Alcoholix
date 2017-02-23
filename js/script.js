$(function(){
  //Tu jest kod do menu
  var tr1 = $('.triangle1');
  var tr2 = $('.triangle2');
  var tr3 = $('.triangle3');
  var tr4 = $('.triangle4');
  var name = $('.name');
  
  $('div.hidden').fadeIn(3000).removeClass('hidden');
  
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
  var href = $('a');
  var body = $('.game');
  var board = $('.board');
  var player2 = $('.player2');
  var player = 0;
  
  nameGame.animate({'font-size': '50px', 'opacity': 1}, 3000);
  board.fadeIn(1000);
  player2.fadeIn(1000);
  
  
  //guzik zmiany gracza
  button.on('click',function(e){
    
    e.preventDefault();
    if (player == 0 || player == 2) {
      player = 1;
      button.text('Gracz 1');
      console.log('Player 1');
    } else if (player == 1) {
      player = 2;
      button.text('Gracz 2');
      console.log('Player 2');
    }
   
  });
    
    
    /*
    if (button.hasClass('player1')) {
      button.removeClass('player1');
      button.addClass('player2');
      button.text('Gracz 2');
    } else if (button.hasClass('player2')) {
      button.removeClass('player2');
      button.addClass('player1');
      button.text('Gracz 1');
    } else {
      button.addClass('player1');
    }
  }); */

  //mechanika gry dla gracza 1
  
   field.on('mouseover', function() {
        console.log('hoverplayer2');
     
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
  
    
  
  /*
        //wyświetlenie diva z zadaniem
      field.on('click', function(){
        var this1 = $(this);
        $('.question').css('display', "block");
        $('.questionText').css('display', "block");
          
          //w przypadku wykonania zadania
        $('.yes').on('click', function(a){
          console.log('1');
          this1.removeClass('p2');
          this1.addClass('p1');
          $('.question').css('display', "none");
          $('.questionText').css('display', "none");      
        });
          
          //w przypadku niewykonania zadania
        $('.no').on('click', function(b){
          console.log('2');
          this1.removeClass('p1');
          this1.addClass('p2');
          $('.question').css('display', "none");
          $('.questionText').css('display', "none"); 
        });
      });
    
        
        //zaznaczenie diva
        $(this).on('click', function(){
          $(this).addClass('p2');
          $(this).removeClass('p1');
        });
      });
  
    };
 
  */
  
  
  
  
  
});


/*
if (button.hasClass('player1')) {
      field.hover(function() {
        if ($(this).hasClass('p1') == false) {
          $(this).addClass('p1Chose');
          $(this).removeClass('p2Chose');
        } else {
          $(this).removeClass('p1Chose');
          $(this).removeClass('p2Chose');
        }
        $(this).on('click', function(){
          $(this).addClass('p1');
          $(this).removeClass('p2');
        });
      });
    } else if (button.hasClass('player2')) {
      field.hover(function() {
        if ($(this).hasClass('p2') == false) {
          $(this).addClass('p2Chose');
          $(this).removeClass('p1Chose');
        } else {
          $(this).removeClass('p1Chose');
          $(this).removeClass('p2Chose');
        }
        $(this).on('click', function(){
          $(this).addClass('p2');
          $(this).removeClass('p1');
        });
      });
    };
  });
  */
  