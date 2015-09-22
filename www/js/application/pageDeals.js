/**
 * Created by Gabriel Recinos on 5/12/14.
 */



function getAllDeals()
{
    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });

    $.ajax(
        {
            url: urlGlobal + "Ofertas?idMall="+idMallGlobal,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {
                $.mobile.changePage('#Ofertas');
                setTimeout(createListDeals(data.Value), 600);



            }
        }).fail(function (data) {
            $.mobile.hidePageLoadingMsg();

        });

}

function createListDeals(data){


//    <li>
//        <p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>
//        <img src="images/ofertas/wendys.png" style= "margin-left: 8px">
//
//
//
//            <div align="justify">Sólo por hoy 19 de Febrero aprovecha un 15% de
//            Descuento en todos los zapatos y un 20% en tennis...Te esperamos.</div>
//
//
//
//
//        </li>

    var ul = jQuery('#ListDeals');
    ul.listview();
    ul.empty();

    if(data.length>0)
    {



        var div;
        var li;
        var img;
        var p;
        var strong;
        var separador;// = jQuery('<img src="images/ofertas/separadorofertas.png" style="margin-bottom: 10px;"/>');
//        <p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>

        for (var i = 0; i < data.length; i++) {
            strong = jQuery('<strong/>')
            li = jQuery('<li/>');
            img = jQuery('<img/>');
            div = jQuery('<div align=justify/>');
            p = jQuery('<p class="ui-li-desc"/>');
            separador = jQuery('<img style="margin-bottom: 10px;"/>');

            var fechaInicio = data[i].FechaInicio.FromWCFDate();
            var fechaFinal  = data[i].FechaFin.FromWCFDate();
            var mesInicio = fechaInicio.getMonth() +1
            var mesFinal = fechaFinal.getMonth() +1
            strong.text('Desde: ' + fechaInicio.getDate() +'/'+ mesInicio +'/'+fechaInicio.getFullYear() + ' Hasta: ' +  fechaFinal.getDate() +'/'+ mesFinal +'/'+fechaFinal.getFullYear())

            img.attr('id','imgDealMall'+i).attr('src','').attr('style','margin-left: 8px');
            separador.attr('id','separadorImg'+i);

            div.text(data[i].Descripcion);
            p.append(strong);
            li.append(p);
            li.append(img);
            li.append(div);


            ul.append(li);
            ul.append(separador);
        }
        //

        var imgList;
        var imgSeparador;
        for (var i = 0; i < data.length; i++) {

            imgList = document.getElementById('imgDealMall'+i);
            imgList.src  = 'data:image/jpeg;base64,'+data[i].Logo;

            imgSeparador = document.getElementById('separadorImg'+i);
            imgSeparador.src = 'images/ofertas/separadorofertas.png';


        }
        ul.listview('refresh',true);

       // ul.listview('refresh');


    }
    ul.listview('refresh',true);
    $.mobile.hidePageLoadingMsg();

}



