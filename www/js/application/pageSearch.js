/**
 * Created by Gabriel Recinos on 6/5/14.
 */


function getSearch()
{
    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });


var texto = jQuery('#txtSearch').val();
    if(texto.length>0)
    {
        $.ajax(
            {
                url: urlGlobal + "Busqueda?busqueda="+texto+"&idMall="+idMallGlobal,
                type: "GET",
                dataType: "json"
            }).done(function (data) {
                if (data.Success) {
                    $.mobile.hidePageLoadingMsg();
                    callRender(data.Value);


                }
            }).fail(function (data) {
                $.mobile.hidePageLoadingMsg();

            });
    }
    else
    {
        $.mobile.hidePageLoadingMsg();

        jQuery('#ulTiendas').empty();
//        var dateSelected= document.getElementById('h1Tiendas');
//        dateSelected.textContent = '';

        jQuery('#ulComidas').empty();
//        var dateSelected= document.getElementById('h1Comidas');
//        dateSelected.textContent = '';

        jQuery('#ulEventos').empty();
//        var dateSelected= document.getElementById('h1Eventos');
//        dateSelected.textContent = '';

        jQuery('#ulOfertas').empty();
//        var dateSelected= document.getElementById('h1Ofertas');
//        dateSelected.textContent = '';

    }
    //$('#calendar').empty();


}


function callRender(data)
{
    renderComidas(data.Comidas);
    renderEventos(data.Eventos);
    renderOfertas(data.Ofertas);
    renderTiendas(data.Tiendas);

}

function renderTiendas(data)
{
    var ul = jQuery('#ulTiendas');

    ul.listview();
    ul.empty();

    //var dateSelected= document.getElementById('h1Tiendas');
    //dateSelected.textContent = '';




   if(data!=null)
   {


        if(data.length>0)
        {


            var liHeader;
            var h2Header;

            liHeader = jQuery('<li data-role="list-divider" role="heading" style="border-radius:none;background:#F3AE3B!important;border:none;" class="ui-li ui-li-divider ui-bar-b">');
            h2Header = jQuery('<h2/>');

            h2Header.text('Tiendas');

            liHeader.append(h2Header);
            ul.append(liHeader);

            ul.listview('refresh',true);

            //dateSelected.textContent = 'Tiendas';

            var div;
            var li;

            var p;
            var strong;
            var separador;// = jQuery('<img src="images/ofertas/separadorofertas.png" style="margin-bottom: 10px;"/>');
            //        <p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>

            for (var i = 0; i < data.length; i++) {
                strong = jQuery('<strong/>')
				
                li = jQuery('<li style=border:0px;/>');

                div = jQuery('<div align=justify/>');

                if(i==0)
                    p = jQuery('<p class="ui-li-desc" style="padding-top:10px;"/>');
                else
                    p = jQuery('<p class="ui-li-desc"/>');


                separador = jQuery('<img style="margin-bottom: 10px;"/>');


                strong.text(data[i].Nombre)


                separador.attr('id','separadorEventStore'+i);

                div.text(data[i].Ubicacion);
                p.append(strong);
                li.append(p);

                li.append(div);


                ul.append(li);
                ul.append(separador);
            }
            //


            var imgSeparador;
            for (var i = 0; i < data.length; i++) {



                imgSeparador = document.getElementById('separadorEventStore'+i);
                imgSeparador.src = 'images/ofertas/separadorofertas.png';


            }
            ul.listview('refresh',true);

            // ul.listview('refresh');


        }
                ul.listview('refresh',true);
   }

    $.mobile.hidePageLoadingMsg();
}


function renderComidas(data)
{
    var ul = jQuery('#ulComidas');

    ul.listview();
    ul.empty();

//    var dateSelected= document.getElementById('h1Comidas');
//    dateSelected.textContent = '';

    if(data!=null)
    {


        if(data.length>0)
        {

            var liHeader;
            var h2Header;

            liHeader = jQuery('<li data-role="list-divider" role="heading" style="border-radius:none;background:#F3AE3B!important;border:none;" class="ui-li ui-li-divider ui-bar-b">');
            h2Header = jQuery('<h2/>');

            h2Header.text('Comidas');

            liHeader.append(h2Header);
            ul.append(liHeader);

            ul.listview('refresh',true);



            var div;
            var li;

            var p;
            var strong;
            var separador;// = jQuery('<img src="images/ofertas/separadorofertas.png" style="margin-bottom: 10px;"/>');
            //        <p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>

            for (var i = 0; i < data.length; i++) {
                strong = jQuery('<strong/>')
                li = jQuery('<li style=border:0px;/>');

                div = jQuery('<div align=justify/>');

                if(i==0)
                    p = jQuery('<p class="ui-li-desc" style="padding-top:10px;"/>');
                else
                    p = jQuery('<p class="ui-li-desc"/>');


                separador = jQuery('<img style="margin-bottom: 10px;"/>');


                strong.text(data[i].Nombre)


                separador.attr('id','separadorEventFood'+i);

                div.text(data[i].Ubicacion);
                p.append(strong);
                li.append(p);

                li.append(div);


                ul.append(li);
                ul.append(separador);
            }
            //


            var imgSeparador;
            for (var i = 0; i < data.length; i++) {



                imgSeparador = document.getElementById('separadorEventFood'+i);
                imgSeparador.src = 'images/ofertas/separadorofertas.png';


            }
            ul.listview('refresh',true);

            // ul.listview('refresh');


        }
        ul.listview('refresh',true);
    }

    $.mobile.hidePageLoadingMsg();
}


function renderEventos(data)
{
    var ul = jQuery('#ulEventos');

//    var dateSelected= document.getElementById('h1Eventos');
//    dateSelected.textContent = '';

    ul.listview();
    ul.empty();

    if(data!=null)
    {


        if(data.length>0)
        {

            var liHeader;
            var h2Header;

            liHeader = jQuery('<li data-role="list-divider" role="heading" style="border-radius:none;background:#F3AE3B!important;border:none;" class="ui-li ui-li-divider ui-bar-b">');
            h2Header = jQuery('<h2/>');

            h2Header.text('Eventos');

            liHeader.append(h2Header);
            ul.append(liHeader);

            ul.listview('refresh',true);



            var div;
            var li;

            var p;
            var strong;
            var separador;// = jQuery('<img src="images/ofertas/separadorofertas.png" style="margin-bottom: 10px;"/>');
            //        <p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>

            for (var i = 0; i < data.length; i++) {
                strong = jQuery('<strong/>')
                li = jQuery('<li style=border:0px;/>');

                div = jQuery('<div align=justify/>');

                if(i==0)
                    p = jQuery('<p class="ui-li-desc" style="padding-top:10px;"/>');
                else
                    p = jQuery('<p class="ui-li-desc"/>');

                separador = jQuery('<img style="margin-bottom: 10px;"/>');


                strong.text(data[i].Nombre)


                separador.attr('id','separadorEventEvents'+i);

                var fechaInicio = data[i].FechaInicio.FromWCFDate();
                var fechaFinal  = data[i].FechaFin.FromWCFDate();
                var mesInicio = fechaInicio.getMonth() +1
                var mesFinal = fechaFinal.getMonth() +1


                div.text('Desde: ' + fechaInicio.getDate() +'/'+ mesInicio +'/'+fechaInicio.getFullYear() + ' Hasta: ' +  fechaFinal.getDate() +'/'+ mesFinal +'/'+fechaFinal.getFullYear());
                p.append(strong);
                li.append(p);

                li.append(div);


                ul.append(li);
                ul.append(separador);
            }
            //


            var imgSeparador;
            for (var i = 0; i < data.length; i++) {



                imgSeparador = document.getElementById('separadorEventEvents'+i);
                imgSeparador.src = 'images/ofertas/separadorofertas.png';


            }
            ul.listview('refresh',true);

            // ul.listview('refresh');


        }
        ul.listview('refresh',true);
    }

    $.mobile.hidePageLoadingMsg();
}

function renderOfertas(data)
{
    var ul = jQuery('#ulOfertas');

//    var dateSelected= document.getElementById('h1Ofertas');
//    dateSelected.textContent = '';

    ul.listview();
    ul.empty();

    if(data!=null)
    {


        if(data.length>0)
        {

            var liHeader;
            var h2Header;

            liHeader = jQuery('<li data-role="list-divider" role="heading" style="border-radius:none;background:#F3AE3B!important;border:none;" class="ui-li ui-li-divider ui-bar-b">');
            h2Header = jQuery('<h2/>');

            h2Header.text('Ofertas');

            liHeader.append(h2Header);
            ul.append(liHeader);

            ul.listview('refresh',true);


            var div;
            var li;

            var p;
            var strong;
            var separador;// = jQuery('<img src="images/ofertas/separadorofertas.png" style="margin-bottom: 10px;"/>');
            //        <p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>

            for (var i = 0; i < data.length; i++) {
                strong = jQuery('<strong/>')
                li = jQuery('<li style=border:0px;/>');

                div = jQuery('<div align=justify/>');

                if(i==0)
                    p = jQuery('<p class="ui-li-desc" style="padding-top:10px;"/>');
                else
                    p = jQuery('<p class="ui-li-desc"/>');


                separador = jQuery('<img style="margin-bottom: 10px;"/>');


                strong.text(data[i].Nombre)


                separador.attr('id','separadorEventOfertas'+i);

                var fechaInicio = data[i].FechaInicio.FromWCFDate();
                var fechaFinal  = data[i].FechaFin.FromWCFDate();
                var mesInicio = fechaInicio.getMonth() +1
                var mesFinal = fechaFinal.getMonth() +1


                div.text('Desde: ' + fechaInicio.getDate() +'/'+ mesInicio +'/'+fechaInicio.getFullYear() + ' Hasta: ' +  fechaFinal.getDate() +'/'+ mesFinal +'/'+fechaFinal.getFullYear());
                p.append(strong);
                li.append(p);

                li.append(div);


                ul.append(li);
                ul.append(separador);
            }
            //


            var imgSeparador;
            for (var i = 0; i < data.length; i++) {



                imgSeparador = document.getElementById('separadorEventOfertas'+i);
                imgSeparador.src = 'images/ofertas/separadorofertas.png';


            }
            ul.listview('refresh',true);

            // ul.listview('refresh');


        }
        ul.listview('refresh',true);
    }

    $.mobile.hidePageLoadingMsg();
}
