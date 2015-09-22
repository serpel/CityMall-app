/**
 * Created by adminmehn on 10/28/14.
 */

function getSponsor()
{
    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });

    $.ajax(
        {
            url: urlGlobal + "Patrocinador?idMall="+idMallGlobal,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {
                $.mobile.hidePageLoadingMsg();
                renderInfoSponsor(data);

            }
        }).fail(function (data) {

            $.mobile.hidePageLoadingMsg();

        });
}

function renderInfoSponsor(data)
{
    $.mobile.changePage('#Patrocinador');
    if(data != null)
    {
        $.mobile.loading( 'show', {
            text: 'Cargando...',
            textVisible: true,
            theme: 'b',
            html: ""
        });

        var img = document.getElementById('imgPublicidad');
        img.src   = '';
        img.src   = 'data:image/jpeg;base64,'+ data.Value.ImgPublicidad;


        if(data.Value.SitioWeb!=null && data.Value.SitioWeb!="" && data.Value.SitioWeb!='null')
            jQuery('#sponsorPageWeb').attr('href','#').attr('onclick','window.open('+"'"+data.Value.SitioWeb +"'"+','+"'"+'_system'+"'"+')');
        else
            jQuery('#sponsorPageWeb').attr('href','#');

        if(data.Value.EnlaceFacebook && data.Value.EnlaceFacebook!="" && data.Value.EnlaceFacebook!='null')
            jQuery('#sponsorLinkfb').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlaceFacebook +"'"+','+"'"+'_system'+"'"+')');
        else
            jQuery('#sponsorLinkfb').attr('href','#');

        if(data.Value.EnlacePinterest!=null && data.Value.EnlacePinterest!="" && data.Value.EnlacePinterest!='null')
            jQuery('#sponsorLinkpin').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlacePinterest +"'"+','+"'"+'_system'+"'"+')');
        else
            jQuery('#sponsorLinkpin').attr('href','#');

        if(data.Value.EnlaceTwitter!=null && data.Value.EnlaceTwitter!="" && data.Value.EnlaceTwitter!='null')
            jQuery('#sponsorLinktw').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlaceTwitter +"'"+','+"'"+'_system'+"'"+')');
        else
            jQuery('#sponsorLinktw').attr('href','#');

        if(data.Value.EnlaceInstagram!=null && data.Value.EnlaceInstagram!="" && data.Value.EnlaceInstagram!='null')
            jQuery('#sponsorLinkinstab').attr('href','#').attr('onclick','window.open('+"'"+data.Value.EnlaceInstagram +"'"+','+"'"+'_system'+"'"+')');
        else
            jQuery('#sponsorLinkinstab').attr('href','#');
    }

    $.mobile.hidePageLoadingMsg();

}