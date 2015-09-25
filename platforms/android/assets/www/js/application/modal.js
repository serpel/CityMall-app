// JavaScript Document

var urlGlobal = 'https://www.leitzbook.com/citymallservicestest/CityMallAppServices.svc/';//'https://www.leitzbook.com/citymallservicestest/CityMallAppServices.svc/';

var idMallGlobal;




//$(document).delegate('#MapSelected', function () {
//    var $viewport        = $('meta[name="viewport"]'),
//        default_viewport = $viewport.attr('content');
//    //these are the pages that you want to enable zooming
//    $viewport.attr('content', 'width=device-width,initial-scale=1.0,maximum-scale=5.0');
//
//});

//
//var $viewport        = $('meta[name="viewport"]'),
//    default_viewport = $viewport.attr('content');
//
//$(document).delegate('#MapSelected', 'pageshow', function () {
//
//    //these are the pages that you want to enable zooming
//    $viewport.attr('content', 'width=device-width,initial-scale=1.0,maximum-scale=5.0');
//
//});


//$(document).on('pageinit', '#MapSelected', function() {
//    var $viewport        = $('meta[name="viewport"]');
////        default_viewport = $viewport.attr('content');
////    //these are the pages that you want to enable zooming
//    $viewport.attr('content', 'width=device-width,initial-scale=1.0,maximum-scale=5.0');
//});

// Función para probar en explorador web de pc
$(document).ready(function(){
//
//
//    //$('#listCategosriesStores').listview('refresh');
////    $('#listCategoriesStores').listview().listview('refresh');
//
//
    getAllMall();
//
//
//
    $.mobile.defaultPageTransition = "none";

    jQuery('#btnBancos').on('vclick',CambioABancos);


    jQuery('#btnBancoContinental').on('vclick',CambioABancoContinental);
    jQuery('#btnSPS').on('vclick',CambiaSps);


    jQuery('#btnInicioFood').on('vclick',CambiaHome);
    jQuery('#btnInicioHome').on('vclick',CambiaHome);
    jQuery('#btnInicioTiendas').on('vclick',CambiaHome);
    jQuery('#btnInicioCine').on('vclick',CambiaHome);
    jQuery('#btnInicioTiendasCategorias').on('vclick',CambiaHome);
    jQuery('#btnInicioStoredSelected').on('vclick',CambiaHome);
    jQuery('#btnCambiarUbicacion').on('vclick',CambiaUbicacion);
    jQuery('#btnCambiarUbicacion1').on('vclick',CambiaUbicacion);
    jQuery('#btnInicioOfertas').on('vclick',CambiaHome);
    jQuery('#btnInicioParqueo').on('vclick',CambiaHome);
    jQuery('#btnInicioPatrocinador').on('vclick',CambiaHome);
    jQuery('#btnLlamarSabado').on('vclick',IrASabado);
    jQuery('#btnInicioEventos').on('vclick',CambiaHome);
    jQuery('#btnInicioSabado').on('vclick',CambiaHome);
    jQuery('#btnInicioMapa').on('vclick',CambiaHome);
    jQuery('#btnInicioMapSelected').on('vclick',CambiaHome);
    jQuery('#btnInicioAbout').on('vclick',CambiaHome);
    jQuery('#btnInicioAbout1').on('vclick',CambiaHome1);
    jQuery('#btnInicioContacto').on('vclick',CambiaHome);
    jQuery('#btnInicioEventoSeleccionado').on('vclick',CambiaHome);
    jQuery('#btnInicioBuscar').on('vclick',CambiaHome);

    jQuery('#btnSearch').on('vclick',getSearch);
    jQuery('#btnContacto').on('vclick',getContact);
    jQuery('#btnPatrocinador').on('vclick',getSponsor);




    jQuery('#btnInicioFoodSelected').on('vclick',CambiaHome);



    jQuery('#btnRegresarHome').on('vclick',RegresarHome);
    jQuery('#CineBackHome').on('vclick',RegresarHome);

    jQuery('#btnOfertas').on('vclick',getAllDeals);
    jQuery('#btnTiendas').on('vclick',function(){
        jQuery('#listCategoriesStores').empty();
        $.mobile.changePage('#Tiendas');
        setTimeout(getAllStores(),600);
    });

    jQuery('#btnComidas').on('vclick',function(){


            jQuery('#listFood').empty();
            $.mobile.changePage('#Comidas');
            setTimeout(getAllFoods(),900);
    });
    jQuery('#btnMapas').on('vclick',function(){

        jQuery('#listLevelsMall').empty();
        $.mobile.changePage('#Mapas');
        setTimeout(getAllLevels(),900);
    });
    jQuery('#btnCalendario').on('vclick',getInfoCalendar);

    jQuery('#btnMapasGoogle').on('vclick',getMapaGoogle);

//
//    initPushwoosh();
//    document.addEventListener("backbutton", onBackKeyDown, true);





//
//
//
//
//
    document.addEventListener('deviceready',onDeviceReady,true);
//
//
//
//    //navigator.notification.alert();
//
//
//	//showAlert();
//
//
//
//
//
//
//
});

function showAlert(text) {

    var notePromo = document.getElementById('NotePromo');

    notePromo.textContent = text;


    $( "#popupCloseRight" ).popup();
    $( "#popupCloseRight" ).popup( "open" );
}

function RegresarHome()
{
	$.mobile.changePage( "#Home");


}

function IrASabado()
{
	$.mobile.changePage( "#Sabado");


}
// Función para usar en Dispositivos
//function onDeviceReady() {
//
////    var tf = new TestFlight();
////    tf.takeOff(function(){console.log('success');}, function(){console.log('fail');}, "83588ec0-d857-431e-bf6e-4d312391d796");
//
//    getAllMall();
//
//    $.mobile.defaultPageTransition = "none";
//
//    jQuery('#btnBancos').on('vclick',CambioABancos);
//
//    jQuery('#btnBancoContinental').on('vclick',CambioABancoContinental);
//    jQuery('#btnSPS').on('vclick',CambiaSps);
//
//    jQuery('#btnInicioFood').on('vclick',CambiaHome);
//    jQuery('#btnInicioHome').on('vclick',CambiaHome);
//    jQuery('#btnInicioTiendas').on('vclick',CambiaHome);
//    jQuery('#btnInicioCine').on('vclick',CambiaHome);
//    jQuery('#btnInicioTiendasCategorias').on('vclick',CambiaHome);
//    jQuery('#btnInicioStoredSelected').on('vclick',CambiaHome);
//    jQuery('#btnCambiarUbicacion').on('vclick',CambiaUbicacion);
//    jQuery('#btnCambiarUbicacion1').on('vclick',CambiaUbicacion);
//    jQuery('#btnInicioOfertas').on('vclick',CambiaHome);
//    jQuery('#btnInicioParqueo').on('vclick',CambiaHome);
//    jQuery('#btnInicioPatrocinador').on('vclick',CambiaHome);
//    jQuery('#btnLlamarSabado').on('vclick',IrASabado);
//    jQuery('#btnInicioEventos').on('vclick',CambiaHome);
//    jQuery('#btnInicioSabado').on('vclick',CambiaHome);
//    jQuery('#btnInicioMapa').on('vclick',CambiaHome);
//    jQuery('#btnInicioMapSelected').on('vclick',CambiaHome);
//    jQuery('#btnInicioAbout').on('vclick',CambiaHome);
//    jQuery('#btnInicioAbout1').on('vclick',CambiaHome1);
//    jQuery('#btnInicioContacto').on('vclick',CambiaHome);
//    jQuery('#btnInicioEventoSeleccionado').on('vclick',CambiaHome);
//    jQuery('#btnInicioBuscar').on('vclick',CambiaHome);
//
//    jQuery('#btnSearch').on('vclick',getSearch);
//    jQuery('#btnContacto').on('vclick',getContact);
//    jQuery('#btnPatrocinador').on('vclick',getSponsor);
//
//
//    jQuery('#btnInicioFoodSelected').on('vclick',CambiaHome);
//
//    jQuery('#btnRegresarHome').on('vclick',RegresarHome);
//
//    jQuery('#CineBackHome').on('vclick',RegresarHome);
//
//    jQuery('#btnOfertas').on('vclick',getAllDeals);
//
//    jQuery('#btnTiendas').on('vclick',function(){
//        jQuery('#listCategoriesStores').empty();
//        $.mobile.changePage('#Tiendas');
//        setTimeout(getAllStores(),600);
//    });
//
//    jQuery('#btnComidas').on('vclick',function(){
//
//
//        jQuery('#listFood').empty();
//        $.mobile.changePage('#Comidas');
//        setTimeout(getAllFoods(),900);
//    });
//
//    jQuery('#btnMapas').on('vclick',function(){
//
//        jQuery('#listLevelsMall').empty();
//        $.mobile.changePage('#Mapas');
//        setTimeout(getAllLevels(),900);
//    });
//
//    jQuery('#btnCalendario').on('vclick',getInfoCalendar);
//
//    jQuery('#btnMapasGoogle').on('vclick',getMapaGoogle);
//
//    initPushwoosh();
//    document.addEventListener("backbutton", onBackKeyDown, true);
//}

function initPushwoosh() {
    //alert('initPushwoosh');
    var pushNotification = window.plugins.pushNotification;

    registerPushwooshAndroid();
    pushNotification.onDeviceReady();



}

function registerPushwooshAndroid() {
    //alert('registerPushwooshAndroid');
    var pushNotification = window.plugins.pushNotification;
    //pushNotification.onDeviceReady();

    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;

        //var notification = event.notification;


        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }

        showAlert(title);

//        navigator.notification.alert(
//            title,  // message
//            alertDismissed,         // callback
//            'City Mall',            // title
//            'Cerrar'                  // buttonName
//        );
        //navigator.notification.alert(title);
        pushNotification.stopGeoPushes();




    });



    pushNotification.registerDevice({ projectid: "857388064607", appid : "07A8F-C052F" },
        function(token) {
            //alert(token);
            onPushwooshInitialized(token);
        },
        function(status) {
            alert("Fallo al registrarse para notificaciones: " +  status);
            //console.warn(JSON.stringify(['failed to register ', status]));
        });


}

function alertDismissed() {
    // do something
}


function onPushwooshInitialized(pushToken)
{
    //output the token to the console
    //console.warn('push token: ' + pushToken);

    var pushNotification = window.plugins.pushNotification;

    pushNotification.getTags(function(tags) {
            console.warn('tags for the device: ' + JSON.stringify(tags));
        },
        function(error) {
            console.warn('get tags error: ' + JSON.stringify(error));
        });


    //set multi notificaiton mode
    //pushNotification.setMultiNotificationMode();
    //pushNotification.setEnableLED(true);

    //set single notification mode
    //pushNotification.setSingleNotificationMode();

    //disable sound and vibration
    //pushNotification.setSoundType(1);
    //pushNotification.setVibrateType(1);

    pushNotification.setLightScreenOnNotification(false);

    //goal with count
    //pushNotification.sendGoalAchieved({goal:'purchase', count:3});

    //goal with no count
    //pushNotification.sendGoalAchieved({goal:'registration'});

    //setting list tags
    //pushNotification.setTags({"MyTag":["hello", "world"]});

    //settings tags
    pushNotification.setTags({deviceName:"cityappdevice", deviceId:100},
        function(status) {
            console.warn('setTags success');
        },
        function(status) {
            console.warn('setTags failed');
        });

    function geolocationSuccess(position) {
        pushNotification.sendLocation({lat:position.coords.latitude, lon:position.coords.longitude},
            function(status) {
                console.warn('sendLocation success');
            },
            function(status) {
                console.warn('sendLocation failed');
            });
    };

    // onError Callback receives a PositionError object
    //
    function geolocationError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
    }

    //greedy method to get user position every 3 second. works well for demo.
//	setInterval(getCurrentPosition, 3000);

    //this method just gives the position once
//	navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);

    //this method should track the user position as per Phonegap docs.
//	navigator.geolocation.watchPosition(geolocationSuccess, geolocationError, { maximumAge: 3000, enableHighAccuracy: true });

    //Pushwoosh Android specific method that cares for the battery
    pushNotification.startGeoPushes();
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

function CambiaHome1()
{
    $.mobile.changePage( "#Home1");
}

function CambioABancos()
{
	$.mobile.changePage( "#TiendasCategorias");
}

function CambioABancoContinental()
{
	$.mobile.changePage( "#StoreSelected");
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


        if($.mobile.activePage.is('#Home1')){
            $.mobile.changePage( "#index");
        }

        //Cines
        if($.mobile.activePage.is('#Cines')){

            $.mobile.changePage( "#Home");

        }
        //Fin Cines

        //ofertas
        if($.mobile.activePage.is('#Ofertas')){

            $.mobile.changePage( "#Home");

        }
        //Fin ofertas

        //Tiendas
        if($.mobile.activePage.is('#Tiendas')){

            $.mobile.changePage( "#Home");

        }
        //Fin Tiendas

        //Tiendas Categorias
        if($.mobile.activePage.is('#TiendasCategorias')){

            $.mobile.changePage( "#Tiendas");
        }
        // Fin Tiendas Categorias

        //Tiendas Seleccionada
        if($.mobile.activePage.is('#StoreSelected')){

            $.mobile.changePage( "#TiendasCategorias");
        }
        // Fin Tiendas Seleccionada



        //Parqueo
        if($.mobile.activePage.is('#Parqueo')){

            $.mobile.changePage( "#Home");

        }
        //fin Parqueo

        //Eventos
        if($.mobile.activePage.is('#Eventos')){

            $.mobile.changePage( "#Home");

        }
        //Fin Eventos
        if($.mobile.activePage.is('#EventSelected')){

            $.mobile.changePage( "#Eventos");
        }


        //Mapas
        if($.mobile.activePage.is('#Mapas')){

            $.mobile.changePage( "#Home");

        }
        //Fin Mapas

        //Mapa Seleccionado
        if($.mobile.activePage.is('#MapSelected')){

            $.mobile.changePage( "#Mapas");
        }
        //Fin Mapa Seleccionado


        //Comida
        if($.mobile.activePage.is('#Comidas')){

            $.mobile.changePage( "#Home");

        }
        //Fin Comida

        //Comida Seleccionada
        if($.mobile.activePage.is('#foodSelected')){

            $.mobile.changePage( "#Comidas");
        }
        //Fin Comida Seleccionada

        //About
        if($.mobile.activePage.is('#About')){

            $.mobile.changePage( "#Home");
        }
        //Fin About

    //About
    if($.mobile.activePage.is('#About1')){

        $.mobile.changePage( "#Home1");
    }
    //Fin About

        //Contacto
        if($.mobile.activePage.is('#Contacto')){

            $.mobile.changePage( "#Home");
        }

        //Fin Contacto

        //Buscar
        if($.mobile.activePage.is('#Buscar')){

            $.mobile.changePage( "#Home");
        }

        //Fin Contacto




    function hideLoading() {
        $.mobile.hidePageLoadingMsg();
    }



    /*
    if($.mobile.activePage.is('#verificarDiv')){
        //alert("Verificacion");
        navigator.app.exitApp();
    }*/
	   
    }