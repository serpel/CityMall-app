/**
 * Created by Gabriel Recinos on 5/26/14.
 */
var urlGlobal = 'https://www.leitzbook.com/citymallservices/CityMallAppServices.svc/';

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


$(document).ready(function(){


//    alert( "This page was just enhanced by jQuery Mobile!" );
//
//
    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });

    var mall = decodeURI(getUrlVars()["id"]);
    var level = decodeURI(getUrlVars()["Level"]);
//
//    var img = document.getElementById('imgMapSelected');
//    img.src   = '';
//    img.src   = 'data:image/jpeg;base64,'+ picture;

    $.ajax(
        {
            url: urlGlobal + "Mapa?idMapa="+level+"&idMall="+mall,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {

                getImg(data.Value);



            }
        }).fail(function (data) {
            $.mobile.hidePageLoadingMsg();

        });




//       if(imageLevel!='')
//       {
//           setImg(imageLevel);
//       }


//    img = document.getElementById('imgMapSelected');
//    img.src   = '';

});

function getImg(data)
{


            var img = document.getElementById('imgMapSelected');
            img.src   = '';
            img.src   = 'data:image/jpeg;base64,'+ data.Foto;


//    for (var i = 0; i < data.length; i++) {
//
//        if(data[i].Id==level){
//            var img = document.getElementById('imgMapSelected');
//            img.src   = '';
//
//            img.src   = 'data:image/jpeg;base64,'+ data[i].Foto;
//            break;
//        }
//    }

    $.mobile.hidePageLoadingMsg();

}
//
