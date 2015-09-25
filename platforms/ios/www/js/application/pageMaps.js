/**
 * Created by Gabriel Recinos on 5/23/14.
 */


function getAllLevels(){

    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });


    $.ajax(
        {
            url: urlGlobal + "Mapas?idMall="+idMallGlobal,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {

                createLevelsList(data.Value);



            }
        }).fail(function (data) {
            $.mobile.hidePageLoadingMsg();

        });

}


function createLevelsList(data){


    var ul = jQuery('#listLevelsMall');
    ul.empty();

    $('#listLevelsMall').listview();




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

                    div1 = jQuery('<div class=ui-block-a style="width: 100%;"/>');



                div2 = jQuery(' <div data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-icon="null" data-iconpos="null" data-theme="c" class="ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all" aria-disabled="false"/>')
                span1 = jQuery('<span class="ui-btn-inner ui-btn-corner-all"/>');
                span2 = jQuery('<span class="ui-btn-text"/>');
                span2.text(data[i].Nombre);

                span1.append(span2);

                button = jQuery('<button class="ui-btn-hidden" aria-disabled="false"/>');

                button.attr('value',data[i].Id).attr('onclick','getMapSelected(this)').text(data[i].Nombre);

                div2.append(span1);
                div2.append(button);
                div1.append(div2);

                ul.append(div1);
                $('#listLevelsMall').listview('refresh',true);
            }
            //ul.listview('refresh');



        }
    }




    $.mobile.hidePageLoadingMsg();

}

function getMapSelected(id){

    //$(id).attr('Foto')



    var strWindowFeatures = "location=no,EnableViewPortScale=yes";


    var ref = window.open(encodeURI('verNivel.html?id='+idMallGlobal+'&Level='+$(id).attr('value')), '_blank',strWindowFeatures);
    //var ref = window.open('mapa1.html', '_blank', 'location=yes');
    ref.addEventListener('loadstart', undefined,true);




//    $.mobile.loading( 'show', {
//        text: 'Cargando...',
//        textVisible: true,
//        theme: 'b',
//        html: ""
//    });
//
//
//
//
//
//    setTimeout(function(){
//
//        jQuery('#listMapSelected').empty();
//        $.mobile.changePage( "#MapSelected");
//
//        $.mobile.loading( 'show', {
//            text: 'Cargando...',
//            textVisible: true,
//            theme: 'b',
//            html: ""
//        });
//
//
//        var img = document.getElementById('imgMapSelected');
//        img.src   = '';
//        img.src   = 'data:image/jpeg;base64,'+ $(id).attr('Foto');
//
//
//
//        $.mobile.hidePageLoadingMsg();
//
//
//    }, 600);

}