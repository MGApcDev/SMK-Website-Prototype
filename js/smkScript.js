var child;
var collectionVisible = false;
$(document).ready(function(){
    $('#collection').hide();
    $('#period').hide();
    //$('#wall').hide();
    //$('body').css('background','#4bc2e2');
    //$('.gradient').hide();
    //$('#wall').overscroll();

    
    $('#logo').click(function(){
        hideWall();
        showCol();
        hidePeriod();
        //$('.gradient').hide();
        
    });
    $('.box div').click(function(){
        hideCol();
        showWall();
        info = $(this).attr('info');
        $('#nav_collection').html(info);
        $('#nav_slash').show();
        info = $(this).text();
        $('#nav_period').html(info).fadeTo(500,1);
        
    });
    $('#nav_collection').click(function(){
        hideWall();
        $('#nav_period').fadeOut(500);
        $('#nav_slash').fadeOut(500);
        showPeriod();

    });
    $('#collection div h4').click(function(){
        hideCol();
        info = $(this).text();
        $('#nav_collection').html(info);
        showPeriod();
    });
    
    $('#search_img').click(function(){
        $('.texty').hide();
        $('#search_field').focus();
    });
    $('#search_field').focusout(function(){
        $('.texty').show();
    });
    
    handleSearchBar();
    $('#period div').click(function(){
        info = $('h5', this).text();
        $('#nav_slash').fadeIn(500);
        $('#nav_period').text(info).fadeTo(500,1);
        hidePeriod();
        showWall();
    });
    
    
});

function addChild(){
    child++;
}
function hideWall(){
    child = 0;
    
    while(child < 100){
        $('#wall img:nth-child('+child+')').delay(50*child).fadeOut();
        //window.setTimeout(addChild(), 1000);
        child++;
    }
}
function showWall(){
    child = 0;
    $('#wall').show();
    while(child < 100){
        $('#wall img:nth-child('+child+')').delay(50*child).fadeIn();
        //window.setTimeout(addChild(), 1000);
        child++;
    }
}
function showCol(){
    collectionVisible = true;
    $('#nav_slash').fadeOut(500);
    $('#nav_period').fadeTo(500, 0, function(){
        $(this).html('');
        $('#nav_collection').fadeTo(500,0,function(){
            $('#wall').hide();
            $(this).html('Udstillinger').fadeTo(500,1);
                $('#collection').show();
                $('body').css('background','#4bc2e2');
                

        });
    });
}
function hideCol(){
    collectionVisible = false;
    $('#collection').hide();
    $('body').css('background','#000');
}

function handleSearchBar(){
    $('#search_udstil').click(function(){
        removeHighlight();
        $(this).css('background','rgba(139, 139, 139, 0.7)');
        if(collectionVisible){
            $('#collection').fadeTo(1000,0,function(){
                $('body').css('background','#4bc2e2');
                $('#collection').fadeTo(1000,1);
                $('#nav_collection').text('Udstillinger');
                changeUdstil();
            });
        }
    });
    $('#search_artist').click(function(){
        removeHighlight();
        $(this).css('background','rgba(139, 139, 139, 0.7)');
        if(collectionVisible){
        $('#collection').fadeTo(1000,0,function(){
            $('body').css('background','#d03836');
            $('#collection').fadeTo(1000,1);
            $('#nav_collection').text('Kunstnere');
            changeArtist();
        });
        }
    });
    $('#search_geo').click(function(){
        removeHighlight();
        $(this).css('background','rgba(139, 139, 139, 0.7)');
        if(collectionVisible){
        $('#collection').fadeTo(1000,0,function(){
            $('body').css('background','#4eb89d');
            $('#collection').fadeTo(1000,1);
            $('#nav_collection').text('Geografiske Områder');
            changeGeo();
        });
        }
    });
    $('#search_period').click(function(){
        removeHighlight();
        $(this).css('background','rgba(139, 139, 139, 0.7)');
        if(collectionVisible){
        $('#collection').fadeTo(1000,0,function(){
            $('body').css('background','#df902f');
            $('#collection').fadeTo(1000,1);
            $('#nav_collection').text('Tidsperioder');
            changePeriod();
        });
        }
    });
}
function showPeriod(){
    $('#wall').fadeOut(1000);
    $('#period').fadeIn(1000);
}
function hidePeriod(){
    $('#period').hide();
}
function removeHighlight(){
    $('.texty').css('background','rgba(0,0,0,0)');
}

function changeUdstil(){
    $('#box1 h4').text('Fransk Kunst');
    $('#box1 h5').text('1900-1930');
    $('#box2 h4').text('Dansk og Nordisk Kunst');
    $('#box2 h5').text('1750-1900');
    $('#box3 h4').text('Dansk og Int. Kunst');
    $('#box3 h5').text('efter 1900');
    $('#box5 h4').text('Europæisk Kunst');
    $('#box5 h5').text('1300-1800');
    $('#box4 h4').text('Den Kgl. Afstøbningssamling');
    $('#box6 h4').text('Tidligere udstillinger');
    $('#box7 h4').text('Manets Goya.Grafik');
}
function changePeriod(){
    $('#box1 h4').text('Renæssancen');
    $('#box1 h5').text('');
    $('#box2 h4').text('1800-Tallet');
    $('#box2 h5').text('');
    $('#box3 h4').text('Romantikken');
    $('#box3 h5').text('');
    $('#box5 h4').text('1900-tallet');
    $('#box5 h5').text('');
    $('#box4 h4').text('Moderne Kunst');
    $('#box6 h4').text('1700-Tallet');
    $('#box7 h4').text('1300-1600');
}
function changeArtist(){
    $('#box1 h4').text('Giovanni Pisano');
    $('#box1 h5').text('');
    $('#box2 h4').text('Picasso');
    $('#box2 h5').text('');
    $('#box3 h4').text('Petrus Chistus');
    $('#box3 h5').text('');
    $('#box5 h4').text('Andrea Mantegna');
    $('#box5 h5').text('');
    $('#box4 h4').text('Peiter Aertsen');
    $('#box6 h4').text('El Greco');
    $('#box7 h4').text('Frans Hals');
}
function changeGeo(){
    $('#box1 h4').text('Italiensk Kunst');
    $('#box1 h5').text('');
    $('#box2 h4').text('Fransk Kunst');
    $('#box2 h5').text('');
    $('#box3 h4').text('Dansk Kunst');
    $('#box3 h5').text('');
    $('#box5 h4').text('Afrikanst Kunst');
    $('#box5 h5').text('');
    $('#box4 h4').text('Asiatisk Kunst');
    $('#box6 h4').text('Nordisk Kunst');
    $('#box7 h4').text('Spansk Kunst');
}
