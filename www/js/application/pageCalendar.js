/**
 * Created by Gabriel Recinos on 6/2/14.
 */
// page is now ready, initialize the calendar...

var _events=[];
var _dates=[];

function getInfoCalendar()
{
    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });

    $('#calendar').empty();

    $.ajax(
        {
            url: urlGlobal + "Eventos?idMall="+idMallGlobal,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {
                $.mobile.hidePageLoadingMsg();
                callCallendar(data.Value);


            }
        }).fail(function (data) {
            $.mobile.hidePageLoadingMsg();

        });
}


function callCallendar(data)
{

    $.mobile.changePage('#Eventos');

    $('#calendar').empty();

    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });

    var fechaI='';
    var fechaF='';


   _events=[];

    for(var i=0; i<data.length;i++)
    {
        fechaI = data[i].FechaInicio.FromWCFDate();
        fechaF  = data[i].FechaFin.FromWCFDate();

        var _start = fechaI;
        var _end = fechaF;

        _events.push({

            start: _start,
            end: _end
        });
    }

    setTimeout(renderCalendar(_events),6000)

}

function renderCalendar(dataEvents)
{
//    for(var i=0; i<dataEvents.length;i++)
//    {
//        alert(dataEvents[i].title);
//    }


    _dates=[];

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        header: {
            left: 'today',
            center: 'title',
            right: 'prev,next'
        },

        dayClick: function (date, allDay, jsEvent, view) {



            callEventSelected(date.toISOString(),date);
//            if (allDay) {
//                alert('Clicked on the entire day: ' + date.toISOString());
//            } else {
//                alert('Clicked on the slot: ' + date.toISOString());
//            }
//
//            alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
//
//            alert('Current view: ' + view.name);
//
//            // change the day's background color just for fun
//            $(this).css('background-color', 'red');

        },
        buttonText: {
            prev: '&laquo;',
            next: '&raquo;',
            prevYear: '&nbsp;&lt;&lt;&nbsp;',
            nextYear: '&nbsp;&gt;&gt;&nbsp;',
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Dia'
        },
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
            'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
            'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        eventClick: function (date,calEvent, jsEvent, view) {
//            alert(date);
//            alert('Event: ' + calEvent.title);
//            alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
//            alert('View: ' + view.name);
//
//            // change the border color just for fun
//            $(this).css('border-color', 'red');

        },
        dayRender: function (date, cell) {

//           var d = new Date();
            var curr_date = date.getDate();
            var curr_month = date.getMonth() + 1; //Months are zero based
            var curr_year = date.getFullYear();

            if(curr_date<10){
                curr_date = '0'+curr_date;
            }

            if(curr_month<10){
                curr_month = '0'+curr_month;
            }


            var dateParse = curr_year +'-'+curr_month+'-'+curr_date;



            for(var i=0; i<dataEvents.length;i++)

            {
                var fechaInicio = dataEvents[i].start.setHours(0);
                var fechaFinal = dataEvents[i].end.setHours(0);
                if(date >=  fechaInicio &&  date <= fechaFinal) {
                   // alert(date +' - ' +dataEvents[i].start +' end '+  dataEvents[i].end);

                    $('.fc-day[data-date="' + dateParse + '"]').css('background', '#E1ED6E');


                    //$(cell).css("background-color", "yellow");
                }

            }





//            $( ".fc-header" ).table();
//            $( ".fc-header" ).table( "refresh",true);
        }

    });

    $('#calendar').fullCalendar('render');
    $.mobile.hidePageLoadingMsg();


}

function callEventSelected(date, fecha){

    $.mobile.loading( 'show', {
        text: 'Cargando...',
        textVisible: true,
        theme: 'b',
        html: ""
    });

    //$('#calendar').empty();

    $.ajax(
        {
            url: urlGlobal + "EventosxDia?fecha="+date+"&idMall="+idMallGlobal,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            if (data.Success) {
                $.mobile.hidePageLoadingMsg();

                renderInfoEvent(data.Value, fecha);


            }
        }).fail(function (data) {
            $.mobile.hidePageLoadingMsg();

        });
}

function renderInfoEvent(data, daySelected){

    if(data != null)
    {

        if(data.length>0)
        {
            $.mobile.changePage('#EventSelected');

            $.mobile.loading( 'show', {
                text: 'Cargando...',
                textVisible: true,
                theme: 'b',
                html: ""
            });

            var dateSelected= document.getElementById('dateSelected');

            var optionsF = {
                dayNamesShort : ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                monthNamesShort : ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']};
            var formatedDate2 = ($.fullCalendar.formatDate(daySelected, 'ddd, dd-MMM-yyyy', optionsF));

            dateSelected.textContent = formatedDate2;



                    var ul = jQuery('#ListEvents');
                    ul.listview();
                    ul.empty();

                    if(data.length>0)
                    {



                        var div;
                        var li;

                        var p;
                        var strong;
                        var separador;// = jQuery('<img src="images/ofertas/separadorofertas.png" style="margin-bottom: 10px;"/>');
        //        <p class="ui-li-aside ui-li-desc"><strong>6:24</strong>PM</p>

                        for (var i = 0; i < data.length; i++) {
                            strong = jQuery('<strong/>')
                            li = jQuery('<li/>');

                            div = jQuery('<div align=justify/>');
                            p = jQuery('<p class="ui-li-desc"/>');
                            separador = jQuery('<img style="margin-bottom: 10px;"/>');


                            strong.text(data[i].HoraInicio + ' ' +data[i].Nombre)


                            separador.attr('id','separadorEvent'+i);

                            div.text(data[i].Descripcion);
                            p.append(strong);
                            li.append(p);

                            li.append(div);


                            ul.append(li);
                            ul.append(separador);
                        }
                        //


                        var imgSeparador;
                        for (var i = 0; i < data.length; i++) {



                            imgSeparador = document.getElementById('separadorEvent'+i);
                            imgSeparador.src = 'images/ofertas/separadorofertas.png';


                        }
                        ul.listview('refresh',true);

                        // ul.listview('refresh');


                    }
                    ul.listview('refresh',true);

        }
    }
    $.mobile.hidePageLoadingMsg();
}