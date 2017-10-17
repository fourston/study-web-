const $ = require("jquery");
require('./app.css');
$(document).ready(function(){

    $('#add-todo').on('click',async function(){


      //делаем ховер для списка
      $( "li.fade" ).hover(function() {
        $( this ).fadeOut( 100 );
        $( this ).fadeIn( 500 );
        //$( this ).css("text-shadow", "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"); не, ну можно конечно js'ом сделать хавер, только вот один вопрос ЗАЧЕМ ну и по сути тут надо mouseover & mouseleave
      });

      if ($('#title').val().trim() == '') { //проверяем пустой ли инпут
        //меняем цвет, потому что пусто
        $('#title').css('background-color' , 'red');
      }
      else {
        //меняем цвет обратно, вдруг до этого был неправильный ввод
        $('#title').css('background-color' , 'white');
        var title = $('#title').val();
        $('#todos').prepend('<li class = "fade">' + title + '<input type="submit" id="delete-todo" value="delete"/> </li>');
        //очищаем инпут
        $('#title').val('');
      }
    });

    //зачеркиваем и отправляем вниз
    $('#todos').on('click','.fade', function(){
      $(this).css ("text-decoration", "line-through");
      $(this).appendTo('#todos');
    });

});
