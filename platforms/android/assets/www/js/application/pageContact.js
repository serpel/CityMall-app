/**
 * Created by Gabriel Recinos
 * on 6/9/14.
 */

function renderInfo(data)
{
    $.mobile.changePage('#Contacto');
    if(data != null)
    {
        $.mobile.loading( 'show', {
            text: 'Cargando...',
            textVisible: true,
            theme: 'b',
            html: ""
        });


        var titulo = document.getElementById('txtContactoTitulo');
        titulo.textContent = data.Titulo;

        var descripcion = document.getElementById('txtContactoDescripcion');
        descripcion.textContent = data.Descripcion;

        var telefono = document.getElementById('txtContactoTelefono');
        telefono.textContent = data.Telefono;

        var imgContactoPhone = document.getElementById('imgContactoPhone');
        imgContactoPhone.src = "images/svgicons/phone.png";

        var imgContactoFB = document.getElementById('imgContactoFB');
        imgContactoFB.src = "images/svgicons/facebook.png";

        var imgContactoMail = document.getElementById('imgContactoMail');
        imgContactoMail.src = "images/svgicons/mail.png";






        var facebook = jQuery('#txtContactoFB');



        jQuery('#txtContactoFB').attr('href','#').attr('onclick','window.open('+"'"+ data.SitioWeb +"'"+','+"'"+'_system'+"'"+')').text(data.SitioWeb);

        jQuery('#txtContatoMail').attr('href','mailto:'+data.Correo+'?subject=Información').text(data.Correo);
    }
    else
    {
        var titulo = document.getElementById('txtContactoTitulo');
        titulo.textContent = '';

        var descripcion = document.getElementById('txtContactoDescripcion');
        descripcion.textContent = '';

        var telefono = document.getElementById('txtContactoTelefono');
        telefono.textContent = '';

        var imgContactoPhone = document.getElementById('imgContactoPhone');
        imgContactoPhone.src = "";

        var imgContactoFB = document.getElementById('imgContactoFB');
        imgContactoFB.src = "";

        var imgContactoMail = document.getElementById('imgContactoMail');
        imgContactoMail.src = "";


        var facebook = jQuery('#txtContactoFB');



        jQuery('#txtContactoFB').attr('href','#').attr('onclick','window.open('+"'"+  +"'"+','+"'"+'_system'+"'"+')').text('');

        jQuery('#txtContatoMail').attr('href','mailto:'+''+'subject=Información;').text('');
    }


    $.mobile.hidePageLoadingMsg();




}

function getContact()
{
    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });



    $.ajax(
        {
            url: urlGlobal + "Contacto?idMall="+idMallGlobal,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {
                $.mobile.hidePageLoadingMsg();
                renderInfo(data.Value);

            }
        }).fail(function (data) {

            $.mobile.hidePageLoadingMsg();

        });
}

