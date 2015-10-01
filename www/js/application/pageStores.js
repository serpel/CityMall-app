/**
 * Created by Gabriel Recinos on 5/14/14.
 */

function getAllStores()
{


    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });



    $.ajax(
        {
            url: urlGlobal + "CategoriasTienda?idMall="+idMallGlobal,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {


                createListStores(data.Value);



            }
        }).fail(function (data) {

            $.mobile.hidePageLoadingMsg();

        });

}


function createListStores(data){


    $('#listCategoriesStores').listview();


    var ul = jQuery('#listCategoriesStores');
    ul.empty();

    if(data != null)
    {

        if(data.length>0)
        {




            var div1;
            var div2;
            var span1;
            var span2;
            var button;


            for (var i = 0; i < data.length; i++) {
                if((i%2)==0)
                    div1 = jQuery('<div class=ui-block-a/>');
                else
                    div1 = jQuery('<div class=ui-block-b/>');


               div2 = jQuery(' <div data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-icon="null" data-iconpos="null" data-theme="c" class="ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all" aria-disabled="false"/>')
               span1 = jQuery('<span class="ui-btn-inner ui-btn-corner-all"/>');
               span2 = jQuery('<span class="ui-btn-text"/>');
               span2.text(data[i].Nombre);

               span1.append(span2);

                button = jQuery('<button class="ui-btn-hidden" aria-disabled="false"/>');

                button.attr('value',data[i].Id).attr('onclick','getStoresSelected(this)').attr('imgHeaderDealsSelected',data[i].ImagenEncabezado).attr('textCategory',data[i].Nombre).text(data[i].Nombre);

                div2.append(span1);
                div2.append(button);
                div1.append(div2);

                ul.append(div1);
                $('#listCategoriesStores').listview('refresh',true);
            }
            //ul.listview('refresh');

        }
    }




    $.mobile.hidePageLoadingMsg();


}

function getStoresSelected(id){


    var categories = $(id).attr('value');


    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });


  //  var img = document.getElementById('imgHeaderDeals');
  //  img.src   = 'data:image/jpeg;base64,'+ $(id).attr('imgHeaderDealsSelected');
	
	var dd = document.getElementById('categoryNameStore');
	dd.innerText = $(id).attr('textCategory');

    setTimeout(function(){

        jQuery('#listCategoriesStoresSelected').empty();
        $.mobile.changePage( "#TiendasCategorias");

        $.mobile.loading( 'show', {
            text: 'Cargando...',
            textVisible: true,
            theme: 'b',
            html: ""
        });

        $.ajax(
            {
                url: urlGlobal + "Tiendas?idCategoriaTienda="+categories+'&idMalL='+idMallGlobal,
                type: "GET",
                dataType: "json"
            }).done(function (data) {
                if (data.Success) {


                    createListStoreSelected(data.Value, id);


                }
            }).fail(function (data) {
                alert('getStoresSelected(id)');
                $.mobile.hidePageLoadingMsg();

            });


        //$.mobile.hidePageLoadingMsg();


    }, 600);










}

function createListStoreSelected(data, id){

//
//    <div style="
//    padding-bottom: 5px;
//    padding-left: 20px;
//    padding-top: 20px;
//
//">
//        <a class="CategoriasLink" href="">Banco Atlántida</a>
//
//        <img src="images/tiendas/separador2.png" />
//
//    </div>
//    <div style="
//    padding-bottom: 5px;
//    padding-left: 20px;
//    ">



//    $.mobile.loading( 'show', {
//        text: 'Loading...',
//        textVisible: true,
//        theme: 'b',
//        html: ""
//    });

    jQuery('#listCategoriesStoresSelected').listview();

    var ul = jQuery('#listCategoriesStoresSelected');
    ul.listview();

    ul.empty();

    if(data != null)
    {

        if(data.length>0)
        {


            var div = jQuery('<div />');
            div.attr('id','"categoryListStores"').attr('class','ui-grid-b');

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

                img = jQuery('<img style=width:60px;margin-left:23%;margin-top:9px;/>');
                h3 = jQuery('<h3 style=margin-top:0px;font-size:12px;/>');
                a.attr('value',data[i].Id).attr('onclick','getListStoreSelected(this)');
                img.attr('id','imgStoreMall'+i).attr('src','')
                h3.attr('id','idStore3'+i).text('');
                a.append(img);
                a.append(h3);
                li.append(a);
                div.append(li);
            }
            $('#listCategoriesStoresSelected').append(div);


            var imageId;
            var ref;
            var render;
            var h3id;
            for (var i = 0; i < data.length; i++) {

                imgList = document.getElementById('imgStoreMall'+i);
                imgList.src  = 'data:image/jpeg;base64,'+ data[i].Icono;
                h3id= document.getElementById('idStore3'+ i);

                h3id.textContent = data[i].Nombre;

            }

            ul.listview('refresh',true);


//            var div;
//            var a;
//            var br;
//
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
//                a = jQuery('<a class="CategoriasLink"/>');
//                br = jQuery('<br/>');
//                separador = jQuery('<img/>');
//
//                separador.attr('id','separadorImgStore'+i);
//
//                a.attr('value',data[i].Id).attr('onclick','getListStoreSelected(this)').text(data[i].Nombre);
//                div.append(a);
//                div.append(br);
//                div.append(separador);
//
//                ul.append(div);
//            }
//
//            var imgSeparador;
//            for (var i = 0; i < data.length; i++) {
//
//
//                imgSeparador = document.getElementById('separadorImgStore'+i);
//                imgSeparador.src = 'images/tiendas/separador2.png';
//
//                jQuery('#listCategoriesStoresSelected').listview('refresh',true);
//
//            }
//
//            jQuery('#listCategoriesStoresSelected').listview('refresh',true);





        }
    }
    ul.listview('refresh',true)


    $.mobile.hidePageLoadingMsg();
}

function getListStoreSelected(id){



    $.mobile.changePage('#StoreSelected');

    var name = document.getElementById('txtName');
    var description = document.getElementById('txtDescription');
    var address = document.getElementById('txtAddress');
    var imgStoreSelected = document.getElementById('imgStoreSelected');


    jQuery('#storeSelectedLinkfb').attr('href','#').removeAttr('onclick');
    jQuery('#storeSelectedLinktw').attr('href','#').removeAttr('onclick');
    jQuery('#storeSelectedLinkpin').attr('href','#').removeAttr('onclick');
    jQuery('#storeSelectedLinkinstab').attr('href','#').removeAttr('onclick');
    jQuery('#storeSelectedPageWeb').attr('href','#').removeAttr('onclick');

    name.textContent = '';
    description.textContent = '';
    address.textContent='';
    imgStoreSelected.src  = 'data:image/jpeg;base64,'+ '';


    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });

    $('#ulListStoreSelected').listview();

    $.ajax(
        {
            url: urlGlobal + 'Tienda?idTienda=' + $(id).attr('value'),
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {

                renderInfoStore(data);




            }
            $.mobile.hidePageLoadingMsg();
        }).fail(function (data) {
            $.mobile.hidePageLoadingMsg();

        });








}

function renderInfoStore(data)
{

    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });

    var name = document.getElementById('txtName');
    var description = document.getElementById('txtDescription');
    var address = document.getElementById('txtAddress');
    var imgStoreSelected = document.getElementById('imgStoreSelected');

    address.textContent = '';



    $('#ulListStoreSelected').listview('refresh',true);




    if(data.Value.SitioWeb!=null && data.Value.SitioWeb!="" && data.Value.SitioWeb!='null')
        jQuery('#storeSelectedPageWeb').attr('href','#').attr('onclick','window.open('+"'"+data.Value.SitioWeb +"'"+','+"'"+'_system'+"'"+')');
    else
        jQuery('#storeSelectedPageWeb').attr('href','#');


    if(data.Value.EnlaceFacebook && data.Value.EnlaceFacebook!="" && data.Value.EnlaceFacebook!='null')
        jQuery('#storeSelectedLinkfb').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlaceFacebook +"'"+','+"'"+'_system'+"'"+')');
    else
        jQuery('#storeSelectedLinkfb').attr('href','#');



    if(data.Value.EnlacePinterest!=null && data.Value.EnlacePinterest!="" && data.Value.EnlacePinterest!='null')
        jQuery('#storeSelectedLinkpin').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlacePinterest +"'"+','+"'"+'_system'+"'"+')');
    else
        jQuery('#storeSelectedLinkpin').attr('href','#');


    if(data.Value.EnlaceTwitter!=null && data.Value.EnlaceTwitter!="" && data.Value.EnlaceTwitter!='null')
        jQuery('#storeSelectedLinktw').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlaceTwitter +"'"+','+"'"+'_system'+"'"+')');
    else
        jQuery('#storeSelectedLinktw').attr('href','#');



    if(data.Value.EnlaceInstagram!=null && data.Value.EnlaceInstagram!="" && data.Value.EnlaceInstagram!='null')
        jQuery('#storeSelectedLinkinstab').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlaceInstagram +"'"+','+"'"+'_system'+"'"+')');
    else
        jQuery('#storeSelectedLinkinstab').attr('href','#');





    $('#ulListStoreSelected').listview('refresh',true);

    name.textContent = data.Value.Nombre;
    name.style.display = 'inline';
    description.textContent = data.Value.Descripcion;
    imgStoreSelected.src  = 'data:image/jpeg;base64,'+ data.Value.Logo;
    $('#txtAddress').text(data.Value.Ubicacion);
    //address.textContent= ;


    $.mobile.hidePageLoadingMsg();


}
