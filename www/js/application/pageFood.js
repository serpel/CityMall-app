/**
 * Created by Gabriel Recinos on 5/15/14.
 */

function getAllFoods()
{
    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });



    $.ajax(
        {
            url: urlGlobal + "Comidas?idMall="+idMallGlobal,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {
                createListFood(data.Value);


            }
        }).fail(function (data) {
            $.mobile.hidePageLoadingMsg();

        });

}


function createListFood(data){




    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });


    var ul = jQuery('#listFood');
    ul.listview();
    ul.empty();


    if(data != null)
    {

        if(data.length>0)
        {


                var div = jQuery('<div />');
                div.attr('id','categoryList').attr('class','ui-grid-b');

                var li;
                var a;
                var img;
                var h3;
                //var div;
//                div = jQuery('#results');
//                div.empty();

                for (var i = 0; i < data.length; i++) {


                    li = jQuery('<div class=ui-block-c />');
                    a = jQuery('<a class=CategoriasLink />');
                    img = jQuery('<img style=width:60px;margin-left:23%;/>');
                    h3 = jQuery('<h3 style=margin-top:0px;font-size:12px;/>');
                    a.attr('value',data[i].Id).attr('onclick','getListFoodSelected(this)');
                    img.attr('id','imgFoodMall'+i).attr('src','')
                    h3.attr('id','idh3'+i).text('');
                    a.append(img);
                    a.append(h3);
                    li.append(a);
                    div.append(li);
                }
                $('#listFood').append(div);


                var imageId;
                var ref;
                var render;
                var h3id;
                for (var i = 0; i < data.length; i++) {

                    imgList = document.getElementById('imgFoodMall'+i);
                    imgList.src  = 'data:image/jpeg;base64,'+ data[i].Icono;
                    h3id= document.getElementById('idh3'+ i);

                    h3id.textContent = data[i].Nombre;

                }

            ul.listview('refresh',true);






//            //Inicio Imagen en Lista
//            var div;
//            var li;
//            var a;
//            var img;
//            var p;
//
//
//
//            var separador;// = jQuery('<img src="images/ofertas/separadorofertas.png" style="margin-bottom: 10px;"/>');
////        <p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>
//
//            for (var i = 0; i < data.length; i++) {
//
//                li = jQuery('<li/>');
//                img = jQuery('<img/>');
//                a = jQuery('<a class="CategoriasLink"/>');
//                div = jQuery('<div align=justify/>');
//
//                separador = jQuery('<img style="margin-bottom: 10px;"/>');
//
//
//                img.attr('id','imgFoodMall'+i).attr('src','').attr('style','margin-left: 8px');
//                separador.attr('id','separadorImgFood'+i);
//                a.attr('value',data[i].Id).attr('onclick','getListFoodSelected(this)').text(data[i].Nombre);
//
//
//
//                div.append(a);
//
//                li.append(img);
//                li.append(div);
//
//
//                ul.append(li);
//                ul.append(separador);
//            }
//            //
//
//            var imgList;
//            var imgSeparador;
//            for (var i = 0; i < data.length; i++) {
//
//                imgList = document.getElementById('imgFoodMall'+i);
//                imgList.src  = 'data:image/jpeg;base64,'+ data[i].Icono;
//
//                imgSeparador = document.getElementById('separadorImgFood'+i);
//                imgSeparador.src = 'images/ofertas/separadorofertas.png';
//
//
//            }
//            ul.listview('refresh',true);
//            //Fin Imagen en Lista
            // ul.listview('refresh');




//            var div;
//            var a;
//            var br;
//            var img;
//            var separador;
//
//
//
//            for (var i = 0; i < data.length; i++) {
//                if(i==0)
//                    div = jQuery('<div style="padding-bottom: 5px;padding-left: 20px;padding-top: 20px;"/>');
//                else
//                    div = jQuery('<div style="padding-bottom: 5px;padding-left: 20px;"/>');
//
//
//
//                a = jQuery('<a class="CategoriasLink"/>');
//                img = jQuery('<img/>');
//
//                br = jQuery('<br/>');
//                separador = jQuery('<img/>');
//
//                separador.attr('id','separadorImgFood'+i);
//
//                img.attr('id','imgFoodMall'+i).attr('src','').attr('style','margin-left: 8px');
//
//                a.attr('value',data[i].Id).attr('onclick','getListFoodSelected(this)').text(data[i].Nombre);
//                div.append(a);
//                div.append(br);
//                div.append(img);
//                div.append(separador);
//
//                ul.append(div);
//            }
//
//            var imgSeparador;
//            var imgList;
//            for (var i = 0; i < data.length; i++) {
//
//
//                imgList = document.getElementById('imgFoodMall'+i);
//                imgList.src  = 'data:image/jpeg;base64,'+data[i].Logo;
//
//                imgSeparador = document.getElementById('separadorImgFood'+i);
//                imgSeparador.src = 'images/tiendas/separador2.png';
//
//                ul.listview('refresh',true)
//
//            }

            //jQuery('#listFood').listview('refresh');




        }
    }
//    $('.ui-icon').remove();
    ul.listview('refresh',true)

    $.mobile.hidePageLoadingMsg();
}

function getListFoodSelected(id){



    $.mobile.changePage('#foodSelected');



    jQuery('#foodSelectedLinkfb').attr('href','#').removeAttr('onclick');
    jQuery('#foodSelectedLinktw').attr('href','#').removeAttr('onclick');
    jQuery('#foodSelectedLinkpin').attr('href','#').removeAttr('onclick');
    jQuery('#foodSelectedLinkinstab').attr('href','#').removeAttr('onclick');
    jQuery('#foodSelectedPageWeb').attr('href','#').removeAttr('onclick');


//    address.textContent='';
//    name.textContent = '';
//    description.textContent = '';
//    imgStoreSelected.src  = 'data:image/jpeg;base64,'+ '';

    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });

    $('#ulListfoodSelected').listview();

    $.ajax(
        {
            url: urlGlobal + 'Comida?idComida=' + $(id).attr('value'),
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {

                renderInfoFood(data);


            }
            $.mobile.hidePageLoadingMsg();
        }).fail(function (data) {
            $.mobile.hidePageLoadingMsg();

        });








}

function renderInfoFood(data)
{

    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });


    var name = document.getElementById('txtFoodName');
    var description = document.getElementById('txtFoodDescription');
    var imgStoreSelected = document.getElementById('imgFoodSelected');
    var address = document.getElementById('txtFoodAddress');


    address.textContent = '';


    $('#ulListfoodSelected').listview('refresh',true);


    if(data.Value.SitioWeb!=null && data.Value.SitioWeb!="" && data.Value.SitioWeb!='null')
        jQuery('#foodSelectedPageWeb').attr('href','#').attr('onclick','window.open('+"'"+data.Value.SitioWeb +"'"+','+"'"+'_system'+"'"+')');
    else
        jQuery('#foodSelectedPageWeb').attr('href','#');


    if(data.Value.EnlaceFacebook && data.Value.EnlaceFacebook!="" && data.Value.EnlaceFacebook!='null' )
        jQuery('#foodSelectedLinkfb').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlaceFacebook +"'"+','+"'"+'_system'+"'"+')');
    else
        jQuery('#foodSelectedLinkfb').attr('href','#');



    if(data.Value.EnlacePinterest!=null && data.Value.EnlacePinterest!="" && data.Value.EnlacePinterest!='null')
        jQuery('#foodSelectedLinkpin').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlacePinterest +"'"+','+"'"+'_system'+"'"+')');
    else
        jQuery('#foodSelectedLinkpin').attr('href','#');


    if(data.Value.EnlaceTwitter!=null && data.Value.EnlaceTwitter!="" && data.Value.EnlaceTwitter!='null' )
        jQuery('#foodSelectedLinktw').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlaceTwitter +"'"+','+"'"+'_system'+"'"+')');
    else
        jQuery('#foodSelectedLinktw').attr('href','#');



    if(data.Value.EnlaceInstagram!=null && data.Value.EnlaceInstagram!="" && data.Value.EnlaceInstagram!='null')
        jQuery('#foodSelectedLinkinstab').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlaceInstagram +"'"+','+"'"+'_system'+"'"+')');
    else
        jQuery('#foodSelectedLinkinstab').attr('href','#');






    $('#ulListfoodSelected').listview('refresh',true);

    name.textContent = data.Value.Nombre;
    description.textContent = data.Value.Descripcion;
    imgStoreSelected.src  = 'data:image/jpeg;base64,'+ data.Value.Logo;
    $('#txtFoodAddress').text(data.Value.Ubicacion);
    //address.textContent= data.Value.Ubicacion;


    $.mobile.hidePageLoadingMsg();


}