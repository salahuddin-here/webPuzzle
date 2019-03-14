
$(document).ready(function () {

    //  globals

    var tileClicked = false;
    var firstTileClicked;
    var secondTileClicked;
    var topPosFir = 0;
    var leftPosFir = 0;
    var topPosSec = 0;
    var leftPosSec = 0;
    var moves = 0;
    var gameEnd = false;
    var selected = 0;
    $('#check').click(function () {

        $('#first').fadeOut(400, function () {
            $('#second').css({'display': 'block'});
        });
    });

    $('#check2').click(function () {
        if (selected > 0) {
            $('#second').fadeOut(400, function () {
                $('#third').css({'display': 'block'});
                switch (selected) {

                    case 1:
                        $('.pieces').css({'background-image': 'url("test.jpg")'});
                        break;
                    case 2:
                        $('.pieces').css({'background-image': 'url("lion.jpg")'});
                        break;
                    case 3  :
                        $('.pieces').css({'background-image': 'url("solveit.jpeg")'});
                        break;
                }
                $('#check3').click(function () {

                    shuffleTiles();

                });

            });
        } else {
            window.alert("Please Select the Image");

        }
    });

    $('#pic1').click(function () {

        selected = 1;

    });

    $('#pic2').click(function () {

        selected = 2;

    });
    $('#pic3').click(function () {

        selected = 3;

    });





//    //  play the game

    $('.pieces').click(function () {
        //  test for the win
        if (
                $('#piece-1').css('left') === '0px' && $('#piece-1').css('top') === '0px' &&
                $('#piece-2').css('left') === '150px' && $('#piece-2').css('top') === '0px' &&
                $('#piece-3').css('left') === '300px' && $('#piece-3').css('top') === '0px' &&
                $('#piece-4').css('left') === '0px' && $('#piece-4').css('top') === '150px' &&
                $('#piece-5').css('left') === '150px' && $('#piece-5').css('top') === '150px' &&
                $('#piece-6').css('left') === '300px' && $('#piece-6').css('top') === '150px' &&
                $('#piece-7').css('left') === '0px' && $('#piece-7').css('top') === '300px' &&
                $('#piece-8').css('left') === '150px' && $('#piece-8').css('top') === '300px' &&
                $('#piece-9').css('left') === '300px' && $('#piece-9').css('top') === '300px' &&
                gameEnd === false
                ) {
            if (moves > 0) {
                $('p').text('You have solved the puzzle in ' + moves + ' moves!!');
                $('#check3').remove();
                gameEnd = true;
            }
            moves = 0;

            tileClicked = true;
        } else {
            if (tileClicked === false & gameEnd === false) {  //  if no tile is clicked(clicking first tile)

                //  set variables
                firstTileClicked = $(this).attr('id');
                topPosFir = parseInt($(this).css('top'));
                leftPosFir = parseInt($(this).css('left'));

                //  highlight tile
                $(this).addClass('glow');
                tileClicked = true;
                gameEnd = false;

            } else if (gameEnd === false) {  //  if you've clicked a tile(clicking second tile)

                //  set variables
                secondTileClicked = $(this).attr('id');
                topPosSec = parseInt($(this).css('top'));
                leftPosSec = parseInt($(this).css('left'));

                //  animations
                $('#' + firstTileClicked).css({'top': topPosSec, 'left': leftPosSec});
                $('#' + secondTileClicked).css({'top': topPosFir, 'left': leftPosFir});

                //  remove the glow and reset the first tile
                $('.pieces').removeClass('glow');
                tileClicked = false;


            }
             //  increment the move counter
        moves++;
        }  


    }
    );  //  end the click function

});

    //  shuffle the tiles

function shuffleTiles() {
    var shuffle = Math.floor((Math.random() * 4) + 1);

    if (shuffle === 1) {

        $('#piece-1').css({top: 300, left: 300});
        $('#piece-2').css({top: 0, left: 300});
        $('#piece-3').css({top: 150, left: 150});
        $('#piece-4').css({top: 0, left: 150});
        $('#piece-5').css({top: 150, left: 0});
        $('#piece-6').css({top: 0, left: 0});
        $('#piece-7').css({top: 150, left: 300});
        $('#piece-8').css({top: 300, left: 150});
        $('#piece-9').css({top: 300, left: 0});
    } else if (shuffle === 2) {

        $('#piece-1').css({top: 150, left: 0});
        $('#piece-2').css({top: 0, left: 0});
        $('#piece-3').css({top: 150, left: 150});
        $('#piece-4').css({top: 0, left: 150});
        $('#piece-5').css({top: 150, left: 300});
        $('#piece-6').css({top: 0, left: 300});
        $('#piece-7').css({top: 300, left: 300});
        $('#piece-8').css({top: 300, left: 150});
        $('#piece-9').css({top: 300, left: 0});
    } else if (shuffle === 3) {

        $('#piece-1').css({top: 0, left: 300});
        $('#piece-2').css({top: 0, left: 0});
        $('#piece-3').css({top: 150, left: 150});
        $('#piece-4').css({top: 150, left: 300});
        $('#piece-5').css({top: 0, left: 150});
        $('#piece-6').css({top: 150, left: 0});
        $('#piece-7').css({top: 300, left: 0});
        $('#piece-8').css({top: 300, left: 300});
        $('#piece-9').css({top: 300, left: 150});
    } else if (shuffle === 4) {

        $('#piece-1').css({top: 0, left: 300});
        $('#piece-2').css({top: 150, left: 300});
        $('#piece-3').css({top: 0, left: 150});
        $('#piece-4').css({top: 150, left: 150});
        $('#piece-5').css({top: 0, left: 0});
        $('#piece-6').css({top: 150, left: 0});
        $('#piece-7').css({top: 300, left: 0});
        $('#piece-8').css({top: 300, left: 300});
        $('#piece-9').css({top: 300, left: 150});
    }

}


(function () {
    var counter = 1;


    setInterval(function () {
        $('.disp-' + counter).fadeOut(600, function () {
//            $('.disp-2').css({display: block});
//            $('.disp-3').css({display: block});



            counter = counter++ % 3 + 1;



            $('.disp-' + counter).fadeIn(600);
        });
    }, 2000);


})();




