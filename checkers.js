$(document).ready(function () {

    let color;
    let box = 1;
    let player1moves = 0;
    let player2moves = 0;
    let blacksTurn = true;

    for (let i = 1; i <= 8; i++){

    //=======Append 8 vertical rows to the body=======//
    
        $('#game').append('<div class="row-'+i+'" style="display: inline-block; margin-top: -4px"></div>');
        for (let j = 1; j <= 8; j++){
            if (i%2!=0){
                if (j%2!=0){
                    color='black';
                }else{
                    color='red';
                }
            } else {
                if (j%2==0){
                    color='black';
                }else{
                    color='red';
                }
            }
    
    //=======Append 8 boxes to the 8 rows, alternating them black and red=======//
    
            $('.row-'+i).append('<div class="boxes box-'+box+'" style="background-color: '+color+'; width: 50px; height: 50px; padding-top: 3px"></div>');
            box++;
        }
    }
    
    //=======Append 12 black pieces to the left side of the board=======//
    
    var piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8, piece9, piece10, piece11, piece12;
    var blackPiecesArr = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8, piece9, piece10, piece11, piece12];
    var blackElemsClass = 0;
    for (let i = 0; i < blackPiecesArr.length; i++){
        blackPiecesArr[i] = $('<div class="pieces bp blackPiece-'+(i+1)+'" style="background-color:black; border: 2px ridge darkgray; border-radius:50%; width:40px; height:40px; margin: 0px 3px">');
        if(blackElemsClass == 0){
            blackElemsClass++
        } else if(blackElemsClass == 7){
            blackElemsClass = blackElemsClass + 3
        } else if (blackElemsClass == 16){
            blackElemsClass++;
        } else {
            blackElemsClass = blackElemsClass + 2;
        }
        $('.box-'+blackElemsClass).append(blackPiecesArr[i]);
    }
    
    //=======Append 12 red pieces to the right side of the board=======//
    
    var redPiecesArr = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8, piece9, piece10, piece11, piece12];
    redElemsClass= 65;
    for (let i = 0; i < redPiecesArr.length; i++){
        redPiecesArr[i] = $('<div class="pieces rp redPiece-'+(i+1)+'" style="background-color:red; border: 2px ridge darkgray; border-radius:50%; width:40px; height:40px; margin: 0px 3px">');
        if(redElemsClass == 65){
            redElemsClass--
        } else if (redElemsClass == 58){
            redElemsClass = redElemsClass - 3;
        } else if (redElemsClass == 49){
            redElemsClass--;
        } else {
            redElemsClass = redElemsClass - 2;
        }
        $('.box-'+redElemsClass).append(redPiecesArr[i]);
    }
    
    //=======Hightlights the pieces white when they are clicked=======//
    
    let colorArr = ['red', 'black'];
    let pieceColor;
    let pieceNumber;
    let isKing;
    
    $('.pieces').on('click', (e)=>{
    
        if ($(e.target).hasClass('king') == false){
        
            for (let y = 1; y <= 12; y++){
                for(i=0; i < colorArr.length; i++){
                    if ($('.'+colorArr[i]+'Piece-'+y).css('backgroundColor') == 'rgb(255, 255, 255)'){
                        $('.'+colorArr[i]+'Piece-'+y).css({'backgroundColor': pieceColor});
                    }
                }
            }
    
            for(let h = 1; h <=64; h++){
                if ($(e.target).parent().hasClass('box-'+h)){
                    pieceNumber = h;
                }
            }
    
            pieceColor = $(e.target).css('backgroundColor');
    
            isKing = false;
            if($(e.target).children().hasClass('king')){
                isKing = true;
                $(e.target).parent().css({backgroundColor: 'rgb(255, 255, 255)'});
            } else {
                isKing = false;
            };
    
            if (blacksTurn && pieceColor == 'rgb(0, 0, 0)'){
                $(e.target).css({
                    'background-color': 'white'
                });
                $('.king').css({
                    'background-color': 'transparent'
                });
            } else if (!blacksTurn && pieceColor == 'rgb(255, 0, 0)'){
                $(e.target).css({
                    'background-color': 'white'
                });
                $('.king').css({
                    'background-color': 'transparent'
                });
            }
        }
    });
    
    
    
    //=======Highlights the legal squares for the piece selected=======//
    
    let num;
    let noChoice = false;
    
    $('.boxes').on('click', (e)=>{
    
        num = $(Number(e.target.className.match(/\d{1,}/)))[0]
    
        for (let y = 0; y <= 64; y++){
            if($('.box-'+y).css('backgroundColor') == 'rgb(255, 255, 255)'){
                $('.box-'+y).css('backgroundColor', 'black')
            }
        }
    
    //=======Black player's turn=======//
    
        for(a=1;a<=64;a++){
            if(blacksTurn){   
    
    //=======Hightlights the diagonal jump move to the black king selected=======//
           
                if($('.box-'+a).children().children().is('.king') == true && ((($('.box-'+a).children().is('.bp') && $('.box-'+(a+7)).children().is('.rp') && $('.box-'+(a+14)).is(':empty') && $('.box-'+(a+14)).css('backgroundColor') == 'rgb(0, 0, 0)') == true || ($('.box-'+a).children().is('.bp') && $('.box-'+(a+9)).children().is('.rp') && $('.box-'+(a+18)).is(':empty') && $('.box-'+(a+18)).css('backgroundColor') == 'rgb(0, 0, 0)') == true) || (($('.box-'+a).children().is('.bp') && $('.box-'+(a-7)).children().is('.rp') && $('.box-'+(a-14)).is(':empty') && $('.box-'+(a-14)).css('backgroundColor') == 'rgb(0, 0, 0)') == true || ($('.box-'+a).children().is('.bp') && $('.box-'+(a-9)).children().is('.rp') && $('.box-'+(a-18)).is(':empty') && $('.box-'+(a-18)).css('backgroundColor') == 'rgb(0, 0, 0)') == true))){
                    noChoice = true;
                    if(($('.box-'+(a+14))[0] == $(e.target)[0] || $('.box-'+(a+18))[0] == $(e.target)[0]) || ($('.box-'+(a-14))[0] == $(e.target)[0] || $('.box-'+(a-18))[0] == $(e.target)[0])){
                        if(($('.box-'+(num-14)).children().css('backgroundColor') == 'rgb(255, 255, 255)' || $('.box-'+(num-18)).children().css('backgroundColor') == 'rgb(255, 255, 255)') || ($('.box-'+(num+14)).children().css('backgroundColor') == 'rgb(255, 255, 255)' || $('.box-'+(num+18)).children().css('backgroundColor') == 'rgb(255, 255, 255)')){
                            $(e.target).css({
                                'background-color': 'white'
                            });
                            noChoice = false
                        } 
                    }
    
    //=======Hightlights the squares diagonal jump move to the black piece selected=======//
    
                }else if(($('.box-'+a).children().is('.bp') && $('.box-'+(a+7)).children().is('.rp') && $('.box-'+(a+14)).is(':empty') && $('.box-'+(a+14)).css('backgroundColor') == 'rgb(0, 0, 0)') == true || ($('.box-'+a).children().is('.bp') && $('.box-'+(a+9)).children().is('.rp') && $('.box-'+(a+18)).is(':empty') && $('.box-'+(a+18)).css('backgroundColor') == 'rgb(0, 0, 0)') == true){
                        noChoice = true;
                        if($('.box-'+(a+14))[0] == $(e.target)[0] || $('.box-'+(a+18))[0] == $(e.target)[0]){
                            if($('.box-'+(num-14)).children().css('backgroundColor') == 'rgb(255, 255, 255)' || $('.box-'+(num-18)).children().css('backgroundColor') == 'rgb(255, 255, 255)'){
                                $(e.target).css({
                                    'background-color': 'white'
                                });
                                noChoice = false
                            } 
                        }
    
    //=======Hightlights the squares one move diagonal to the black piece selected=======//
    
                }else if(($('.box-'+a).children().is('.bp') && $('.box-'+(a+7)).children().is('.rp') && $('.box-'+(a+14)).is(':empty') && $('.box-'+(a+14)).css('backgroundColor') == 'rgb(0, 0, 0)') == false && ($('.box-'+a).children().is('.bp') && $('.box-'+(a+9)).children().is('.rp') && $('.box-'+(a+18)).is(':empty') && $('.box-'+(a+18)).css('backgroundColor') == 'rgb(0, 0, 0)') == false){     
                    if($(e.target).css('backgroundColor') == 'rgb(0, 0, 0)' && ($(e.target).hasClass('box-'+(pieceNumber+7)) || $(e.target).hasClass('box-'+(pieceNumber+9)))){
                        if($(e.target).is(":empty") && pieceColor == 'rgb(0, 0, 0)'){
                            if (noChoice == false){
                                $(e.target).css({
                                    'background-color': 'white'
                                });
                            }
                        }
                    }
    
    //=======Highlights the diagonal moves for the black king selected=======//   
    
                    if(isKing == true){
                        if(($(e.target).css('backgroundColor') == 'rgb(0, 0, 0)' && (($(e.target).hasClass('box-'+(pieceNumber+7)) || $(e.target).hasClass('box-'+(pieceNumber+9))) || ($(e.target).hasClass('box-'+(pieceNumber-7)) || $(e.target).hasClass('box-'+(pieceNumber-9)))))){
                            if($(e.target).is(":empty") && pieceColor == 'rgb(0, 0, 0)'){
                                if (noChoice == false){
                                    $(e.target).css({
                                        'background-color': 'white'
                                    });
                                }
                            }
                        }
                    }
                }
            }else if(!blacksTurn){
    
    //=======Hightlights the diagonal jump move to the red king selected=======//
           
                if($('.box-'+a).children().children().is('.king') == true && ((($('.box-'+a).children().is('.rp') && $('.box-'+(a+7)).children().is('.bp') && $('.box-'+(a+14)).is(':empty') && $('.box-'+(a+14)).css('backgroundColor') == 'rgb(0, 0, 0)') == true || ($('.box-'+a).children().is('.rp') && $('.box-'+(a+9)).children().is('.bp') && $('.box-'+(a+18)).is(':empty') && $('.box-'+(a+18)).css('backgroundColor') == 'rgb(0, 0, 0)') == true) || (($('.box-'+a).children().is('.rp') && $('.box-'+(a-7)).children().is('.bp') && $('.box-'+(a-14)).is(':empty') && $('.box-'+(a-14)).css('backgroundColor') == 'rgb(0, 0, 0)') == true || ($('.box-'+a).children().is('.rp') && $('.box-'+(a-9)).children().is('.bp') && $('.box-'+(a-18)).is(':empty') && $('.box-'+(a-18)).css('backgroundColor') == 'rgb(0, 0, 0)') == true))){
                    noChoice = true;
                    if(($('.box-'+(a+14))[0] == $(e.target)[0] || $('.box-'+(a+18))[0] == $(e.target)[0]) || ($('.box-'+(a-14))[0] == $(e.target)[0] || $('.box-'+(a-18))[0] == $(e.target)[0])){
                        if(($('.box-'+(num-14)).children().css('backgroundColor') == 'rgb(255, 255, 255)' || $('.box-'+(num-18)).children().css('backgroundColor') == 'rgb(255, 255, 255)') || ($('.box-'+(num+14)).children().css('backgroundColor') == 'rgb(255, 255, 255)' || $('.box-'+(num+18)).children().css('backgroundColor') == 'rgb(255, 255, 255)')){
                            $(e.target).css({
                                'background-color': 'white'
                            });
                            noChoice = false
                        } 
                    }
    
    //=======Hightlights the squares diagonal jump move to the red piece selected=======//
    
                }else if(($('.box-'+a).children().is('.rp') && $('.box-'+(a-7)).children().is('.bp') && $('.box-'+(a-14)).is(':empty') && $('.box-'+(a-14)).css('backgroundColor') == 'rgb(0, 0, 0)') == true || ($('.box-'+a).children().is('.rp') && $('.box-'+(a-9)).children().is('.bp') && $('.box-'+(a-18)).is(':empty') && $('.box-'+(a-18)).css('backgroundColor') == 'rgb(0, 0, 0)') == true){
                    noChoice = true;
                    if($('.box-'+(a-14))[0] == $(e.target)[0] || $('.box-'+(a-18))[0] == $(e.target)[0]){
                        if($('.box-'+(num+14)).children().css('backgroundColor') == 'rgb(255, 255, 255)' || $('.box-'+(num+18)).children().css('backgroundColor') == 'rgb(255, 255, 255)'){
                            $(e.target).css({
                                'background-color': 'white'
                            });
                            noChoice = false 
                        } 
                    }
    
    //=======Hightlights the squares one move diagonal to the red piece selected=======//
    
                }else if(($('.box-'+a).children().is('.rp') && $('.box-'+(a-7)).children().is('.bp') && $('.box-'+(a-14)).is(':empty') && $('.box-'+(a-14)).css('backgroundColor') == 'rgb(0, 0, 0)') == false && ($('.box-'+a).children().is('.rp') && $('.box-'+(a-9)).children().is('.bp') && $('.box-'+(a-18)).is(':empty') && $('.box-'+(a-18)).css('backgroundColor') == 'rgb(0, 0, 0)') == false){     
                    if($(e.target).css('backgroundColor') == 'rgb(0, 0, 0)' && ($(e.target).hasClass('box-'+(pieceNumber-7)) || $(e.target).hasClass('box-'+(pieceNumber-9)))){
                        if($(e.target).is(":empty") && pieceColor == 'rgb(255, 0, 0)'){
                            if (noChoice == false){
                                $(e.target).css({
                                    'background-color': 'white'
                                });
                            }
                        }
                    }
    
    //=======Highlights the diagonal moves for the red king selected=======//   
    
                    if(isKing == true){
                        if(($(e.target).css('backgroundColor') == 'rgb(0, 0, 0)' && (($(e.target).hasClass('box-'+(pieceNumber-7)) || $(e.target).hasClass('box-'+(pieceNumber-9))) || ($(e.target).hasClass('box-'+(pieceNumber+7)) || $(e.target).hasClass('box-'+(pieceNumber+9)))))){
                            if($(e.target).is(":empty") && pieceColor == 'rgb(255, 0, 0)'){
                                if (noChoice == false){
                                    $(e.target).css({
                                        'background-color': 'white'
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    
    //=======Moves the pieces on the board=======//

    $('#tie').hide()
    $('#winner').hide()
    let redCount = 1;
    let blackCount = 12;
    $('.boxes').on('dblclick', (e)=>{
        for(i=1; i<=12; i++){
            for(j=1; j<=64; j++){
    
    //=======Allows the jump move for a black king=======//
    
                if($('.blackPiece-'+i).css('backgroundColor') == 'rgb(255, 255, 255)' && $('.box-'+j).css('backgroundColor') == 'rgb(255, 255, 255)'){
                    if($('.box-'+(num+7)).children().children().is('.king') || $('.box-'+(num+9)).children().children().is('.king') || $('.box-'+(num+14)).children().children().is('.king') || $('.box-'+(num+18)).children().children().is('.king')){
                        if($('.box-'+(num+18)).children().css('backgroundColor')=='rgb(255, 255, 255)' && $('.box-'+(num)).css('backgroundColor')=='rgb(255, 255, 255)'){
                            $('.box-'+(num+9)).children().remove()
                            redCount--
                        }else if($('.box-'+(num+14)).children().css('backgroundColor')=='rgb(255, 255, 255)' && $('.box-'+(num)).css('backgroundColor')=='rgb(255, 255, 255)'){
                            $('.box-'+(num+7)).children().remove()
                            redCount--
                        }
                    }
    
    //=======Allows the jump move for a black piece=======//
    
                    if($('.box-'+(num-18)).children().css('backgroundColor')=='rgb(255, 255, 255)' && $('.box-'+(num)).css('backgroundColor')=='rgb(255, 255, 255)'){
                        $('.box-'+(num-9)).children().remove()
                        redCount--
                    }else if($('.box-'+(num-14)).children().css('backgroundColor')=='rgb(255, 255, 255)' && $('.box-'+(num)).css('backgroundColor')=='rgb(255, 255, 255)'){
                        $('.box-'+(num-7)).children().remove()
                        redCount--
                    }
                    
    //=======Move the black piece to the highlighted square=======//                
                    $('.box-'+j).append(blackPiecesArr[i-1]);
                    if($('.box-'+j).children().hasClass('pieces')){
                        blacksTurn = false;
                    };
                    player1moves++
                    $('#moves1').html('moves: '+player1moves)
                    $('.box-'+j).css({'backgroundColor': 'rgb(0, 0, 0)'})
                    $('.blackPiece-'+i).css({'backgroundColor': 'rgb(0, 0, 0)'})
                }
    
    //=======Allows the jump move for a red king=======//
    
                if($('.redPiece-'+i).css('backgroundColor') == 'rgb(255, 255, 255)' && $('.box-'+j).css('backgroundColor') == 'rgb(255, 255, 255)'){
                    if($('.box-'+(num-7)).children().children().is('.king') || $('.box-'+(num-9)).children().children().is('.king') || $('.box-'+(num-14)).children().children().is('.king') || $('.box-'+(num-18)).children().children().is('.king')){
                        if($('.box-'+(num-18)).children().css('backgroundColor')=='rgb(255, 255, 255)' && $('.box-'+(num)).css('backgroundColor')=='rgb(255, 255, 255)'){
                            $('.box-'+(num-9)).children().remove()
                            blackCount--
                        }else if($('.box-'+(num-14)).children().css('backgroundColor')=='rgb(255, 255, 255)' && $('.box-'+(num)).css('backgroundColor')=='rgb(255, 255, 255)'){
                            $('.box-'+(num-7)).children().remove()
                            blackCount--
                        }
                    }
    
    //=======Allows the jump move for a red piece=======//
    
                    if($('.box-'+(num+18)).children().css('backgroundColor')=='rgb(255, 255, 255)' && $('.box-'+(num)).css('backgroundColor')=='rgb(255, 255, 255)'){
                        $('.box-'+(num+9)).children().remove()
                        blackCount--
                    }else if($('.box-'+(num+14)).children().css('backgroundColor')=='rgb(255, 255, 255)' && $('.box-'+(num)).css('backgroundColor')=='rgb(255, 255, 255)'){
                        $('.box-'+(num+7)).children().remove()
                        blackCount--
                    }
    
    //=======Move the red piece to the highlighted square=======// 
    
                    $('.box-'+j).append(redPiecesArr[i-1]);
                    if($('.box-'+j).children().hasClass('pieces')){
                        blacksTurn = true;
                    };          
                    player2moves++  
                    $('#moves2').html('moves: '+player2moves)
                    $('.box-'+j).css({'backgroundColor': 'rgb(0, 0, 0)'})
                    $('.redPiece-'+i).css({'backgroundColor': 'rgb(255, 0, 0)'})                 
                }
            }
        }

    //=======Makes a regular black piece a king when moved to the furthest squares to the right=======//
    
        if($('.box-64').children().css('backgroundColor')=='rgb(0, 0, 0)'){
            $('.box-64').children().append('<div class="king" style="background-color:transparent;width:25px;height:25px;margin:4px 7px;position:absolute">👑</div>')
        }
        if($('.box-62').children().css('backgroundColor')=='rgb(0, 0, 0)'){
            $('.box-62').children().append('<div class="king" style="background-color:transparent;width:25px;height:25px;margin:4px 7px;position:absolute">👑</div>')
        }
        if($('.box-60').children().css('backgroundColor')=='rgb(0, 0, 0)'){
            $('.box-60').children().append('<div class="king" style="background-color:transparent;width:25px;height:25px;margin:4px 7px;position:absolute">👑</div>')
        }
        if($('.box-58').children().css('backgroundColor')=='rgb(0, 0, 0)'){
            $('.box-58').children().append('<div class="king" style="background-color:transparent;width:25px;height:25px;margin:4px 7px;position:absolute">👑</div>')
        }
    
    //=======Makes a regular red piece a king when moved to the furthest squares to the left=======//
    
        if($('.box-1').children().css('backgroundColor')=='rgb(255, 0, 0)'){
            $('.box-1').children().append('<div class="king" style="background-color:transparent;width:25px;height:25px;margin:4px 7px;position:absolute">👑</div>')
        }
        if($('.box-3').children().css('backgroundColor')=='rgb(255, 0, 0)'){
            $('.box-3').children().append('<div class="king" style="background-color:transparent;width:25px;height:25px;margin:4px 7px;position:absolute">👑</div>')
        }
        if($('.box-5').children().css('backgroundColor')=='rgb(255, 0, 0)'){
            $('.box-5').children().append('<div class="king" style="background-color:transparent;width:25px;height:25px;margin:4px 7px;position:absolute">👑</div>')
        }
        if($('.box-7').children().css('backgroundColor')=='rgb(255, 0, 0)'){
            $('.box-7').children().append('<div class="king" style="background-color:transparent;width:25px;height:25px;margin:4px 7px;position:absolute">👑</div>')
        }
    });
    
});    