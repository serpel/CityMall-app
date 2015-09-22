/**
 * Created by Gabriel Recinos on 5/12/14.
 */



function getMapaGoogle()
{
    $.ajax(
        {
            url: urlGlobal + "Coordenadas?idMall="+idMallGlobal,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {
               VerDireccion(data.Value.Latitud, data.Value.Longitud, data.Value.Nombre);


            }
        }).fail(function (data) {
            $.mobile.hidePageLoadingMsg();

        });
}



function VerDireccion(latitud, longitud, Nombre)
{

    var strWindowFeatures = "location=no,EnableViewPortScale=yes";




    var ref = window.open(encodeURI('Mapa.html?url='+latitud+','+longitud +'@'+Nombre), '_blank', 'location=no');
    //var ref = window.open('mapa1.html', '_blank', 'location=yes');
    ref.addEventListener('loadstart', undefined,true);

    //$('.imgSmall').glisse({speed: 500, changeSpeed: 0, effect:'bounce', fullscreen: true});
}


function getAllMall(){


    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });

    $.ajax(
        {
            url: urlGlobal + "Malls",
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {
                CreateListMall(data.Value);


            }
        }).fail(function (data) {
            $.mobile.hidePageLoadingMsg();

        });



}

function goHome()
{

}

function CreateListMall(data){

    if(data != null)
    {

        if(data.length>0)
        {
            var ul = jQuery('#listIndex');
            ul.empty();


            var div;
            var a;
            var img;

            for (var i = 0; i < data.length; i++) {
                div = jQuery('<div class=ui-block-a/>');
                a = jQuery('<a/>');
                img = jQuery('<img/>');

                img.attr('id','imgListMall'+i).attr('src','');
                a.attr('value',data[i].Id).attr('facebook',data[i].EnlaceFacebook).attr('Instagram',data[i].EnlaceInstagram).attr('Pinterest',data[i].EnlacePinterest).attr('Twitter',data[i].EnlaceTwitter).attr('SitioWeb',data[i].SitioWeb).attr('imageMenu',data[i].ImagenMenu).attr('Estado',data[i].Estado).attr('ImagenProximamente',data[i].ImagenProximamente).attr('Cine',data[i].EnlaceCine).attr('onclick','getIdMall(this)');

                a.append(img);
                ul.append(a);
            }
            //ul.listview('refresh');

            var imgList;
            for (var i = 0; i < data.length; i++) {

                imgList = document.getElementById('imgListMall'+i);
                imgList.src  = 'data:image/jpeg;base64,'+ data[i].ImagenIndex;

            }
            //ul.listview('refresh');


        }
    }

    $.mobile.hidePageLoadingMsg();
}


//var urlCines = '';
function getIdMall(id){

    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });


//        navigator.notification.alert(
//            'You are the winner!',  // message
//            alertDismissed,         // callback
//            'Game Over',            // title
//            'Done'                  // buttonName
//        );


    var imgMenu = document.getElementById('imgHeaderHome');
    imgMenu.src = 'data:image/jpeg;base64,'+ $(id).attr('imageMenu');

    var imgMenu1 = document.getElementById('imgHeaderHome1');
    imgMenu1.src = 'data:image/jpeg;base64,'+ $(id).attr('imageMenu');


    jQuery('#enlaceweb').removeAttr('onclick');
    jQuery('#enlacefb').removeAttr('onclick');
    jQuery('#enlacepin').removeAttr('onclick');
    jQuery('#enlacetw').removeAttr('onclick');
    jQuery('#enlaceinstab').removeAttr('onclick');
    jQuery('#btnCines').removeAttr('onclick');




    setTimeout(function(){

        if($(id).attr('Estado')!=2){
            $.mobile.changePage('#Home');
        }

        else
        {
            $.mobile.changePage('#Home1');
            var imgProximamente = document.getElementById('imgProximamente');
            imgProximamente.src = 'data:image/jpeg;base64,'+ $(id).attr('ImagenProximamente');

        }


        idMallGlobal = $(id).attr('value');
        //urlCines = $(id).attr('Cine');


        if($(id).attr('Cine')!=null && $(id).attr('Cine')!="" && $(id).attr('Cine')!='null')
            jQuery('#btnCines').attr('href','#').attr('onclick','window.open('+"'"+ $(id).attr('Cine') +"'"+','+"'"+'_system'+"'"+')');


        if($(id).attr('SitioWeb')!=null && $(id).attr('SitioWeb')!="" && $(id).attr('SitioWeb')!='null')
            jQuery('#enlaceweb').attr('href','#').attr('onclick','window.open('+"'"+$(id).attr('SitioWeb') +"'"+','+"'"+'_system'+"'"+')');
        else
            jQuery('#enlaceweb').attr('href','#');


        if($(id).attr('facebook')!=null && $(id).attr('facebook')!="" && $(id).attr('facebook')!='null')
            jQuery('#enlacefb').attr('href','#').attr('onclick','window.open('+"'"+$(id).attr('facebook') +"'"+','+"'"+'_system'+"'"+')');
        else
            jQuery('#enlacefb').attr('href','#');



        if($(id).attr('Pinterest')!=null && $(id).attr('Pinterest')!="" && $(id).attr('Pinterest')!='null')
            jQuery('#enlacepin').attr('href','#').attr('onclick','window.open('+"'"+$(id).attr('Pinterest') +"'"+','+"'"+'_system'+"'"+')');
        else
            jQuery('#enlacepin').attr('href','#');


        if($(id).attr('Twitter')!=null && $(id).attr('Twitter')!="" && $(id).attr('Twitter')!='null')
            jQuery('#enlacetw').attr('href','#').attr('onclick','window.open('+"'"+$(id).attr('Twitter') +"'"+','+"'"+'_system'+"'"+')');
        else
            jQuery('#enlacetw').attr('href','#');



        if($(id).attr('Instagram')!=null && $(id).attr('Instagram')!="" && $(id).attr('Instagram')!='null')
            jQuery('#enlaceinstab').attr('href','#').attr('onclick','window.open('+"'"+$(id).attr('Instagram') +"'"+','+"'"+'_system'+"'"+')');
        else
            jQuery('#enlaceinstab').attr('href','#');






        $.mobile.hidePageLoadingMsg();


    }, 600);








}