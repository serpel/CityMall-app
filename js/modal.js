// JavaScript Document

$( document ).ready(function() {
	
	document.addEventListener('deviceready',onDeviceReady,false);
	
    $.mobile.defaultPageTransition = "none";
	
	jQuery('#btnBancos').on('vclick',CambioABancos);
	
	
	jQuery('#btnBancoContinental').on('vclick',CambioABancoContinental);
	jQuery('#btnSPS').on('vclick',CambiaSps);
	
	jQuery('#btnInicioHome').on('vclick',CambiaHome);
	jQuery('#btnInicioTiendas').on('vclick',CambiaHome);
	jQuery('#btnInicioCine').on('vclick',CambiaHome);
	jQuery('#btnInicioTiendasCategorias').on('vclick',CambiaHome);
	jQuery('#btnInicioBancoContinental').on('vclick',CambiaHome);
	jQuery('#btnCambiarUbicacion').on('vclick',CambiaUbicacion);
	jQuery('#btnInicioOfertas').on('vclick',CambiaHome);
	jQuery('#btnInicioParqueo').on('vclick',CambiaHome);
	jQuery('#btnLlamarSabado').on('vclick',IrASabado);
	jQuery('#btnInicioEventos').on('vclick',CambiaHome);
	jQuery('#btnInicioSabado').on('vclick',CambiaHome);
	
	
	jQuery('#btnRegresarHome').on('vclick',RegresarHome);
    jQuery('#CineBackHome').on('vclick',RegresarHome);


	
	
	
	
	
});

function RegresarHome()
{
	$.mobile.changePage( "#Home");
	
	
}

function IrASabado()
{
	$.mobile.changePage( "#Sabado");
	
	
}

function onDeviceReady() {

    var tf = new TestFlight();
    tf.takeOff(function(){console.log('success');}, function(){console.log('fail');}, "83588ec0-d857-431e-bf6e-4d312391d796");


	
	document.addEventListener("backbutton", onBackKeyDown, true);
	
}

function CambiaUbicacion()
{
	$.mobile.changePage( "#index");
}

function CambiaSps()
{
	$.mobile.changePage( "#Home");
}

function CambiaHome()
{
	$.mobile.changePage( "#Home");
}

function CambioABancos()
{
	$.mobile.changePage( "#TiendasCategorias");
}

function CambioABancoContinental()
{
	$.mobile.changePage( "#BancoContinental");
}

function onBackKeyDown(e) {
	
		if($.mobile.activePage.is('#index')){
			//alert("home");
			 //e.preventDefault();
             navigator.app.exitApp();
		}

        if($.mobile.activePage.is('#Home')){
            $.mobile.changePage( "#index");
        }


        //ofertas
        if($.mobile.activePage.is('#Ofertas')){

            $.mobile.changePage( "#Home");

        }
        //Fin ofertas




        //Eventos
        if($.mobile.activePage.is('#Eventos')){

            $.mobile.changePage( "#Home");

        }
        if($.mobile.activePage.is('#Sabado')){

            $.mobile.changePage( "#Eventos");
        }
        //Fin Eventos


        //Tiendas
        if($.mobile.activePage.is('#Tiendas')){

            $.mobile.changePage( "#Home");

        }
        if($.mobile.activePage.is('#TiendasCategorias')){

            $.mobile.changePage( "#Tiendas");
        }

        if($.mobile.activePage.is('#BancoContinental')){
            $.mobile.changePage( "#TiendasCategorias");
        }
        //Fin Tiendas

        //Cines
        if($.mobile.activePage.is('#Cines')){

            $.mobile.changePage( "#Home");

        }
        //Fin Cines

        //Parqueo
        if($.mobile.activePage.is('#Parqueo')){

            $.mobile.changePage( "#Home");

        }
        //fin Parqueo








    /*
    if($.mobile.activePage.is('#verificarDiv')){
        //alert("Verificacion");
        navigator.app.exitApp();
    }*/
	   
    }