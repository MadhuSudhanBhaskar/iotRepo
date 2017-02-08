 $(document).ready(function() {
     $('select').niceSelect();
     $.fn.datepicker.setDefaults({
         autoPick: true,
         autoHide: true
     });
     $('[data-toggle="datepicker"]').datepicker();
 });

 function drawChartSeats() {
     var label_oc = "%Occupied";
     var label_av = "%Available";
     var color_oc = "rgba(255,0,0,1)";
     var color_av = "rgba(0,255,0,1)";

     var chart01Data = {
         labels: ['Mon 2017-01-16', 'Tue 2017-01-17', 'Wed 2017-01-18', 'Thu 2017-01-19', 'Fri 2017-01-20', 'Sat 2017-01-21', 'Sun 2017-01-22', 'Mon 2017-01-23', 'Tue 2017-01-24', 'Wed 2017-01-25', 'Thu 2017-01-26', 'Fri 2017-01-27', 'Sat 2017-01-28', 'Sun 2017-01-29', 'Mon 2017-01-30', 'Tue 2017-01-31', 'Wed 2017-02-01'],
         datasets: [{
             label: label_av,
             backgroundColor: color_av,
             fill: false,
             data: [98.39, 99.89, 100, 99.92, 99.02, 99.55, 99.2, 98.28, 99.95, 99.89, 100, 99.72, 98.9, 98.6, 94.6, 91.15, 85.35]
         }]
     };

     var ctx = document.getElementById("seats_graph").getContext("2d");
     var myLineChart = new Chart(ctx, {
         type: "line",
         data: chart01Data,
         options: {
             scales: {
                 xAxes: [{
                     gridLines: {
                         display: false
                     },
                     stacked: true
                 }],
                 yAxes: [{
                     ticks: {
                         max: 100,
                         min: 0,
                         stepSize: 20
                     },
                     stacked: false
                 }]
             }
         }
     });
     //});
 }

 function drawChartRooms() {
     var label_oc = "%Occupied";
     var label_av = "%Available";
     var color_oc = "rgba(255,0,0,1)";
     var color_av = "rgba(0,255,0,1)";

     var chart01Data = {
         labels: ['Mon 2017-01-16', 'Tue 2017-01-17', 'Wed 2017-01-18', 'Thu 2017-01-19', 'Fri 2017-01-20', 'Sat 2017-01-21', 'Sun 2017-01-22', 'Mon 2017-01-23', 'Tue 2017-01-24', 'Wed 2017-01-25', 'Thu 2017-01-26', 'Fri 2017-01-27', 'Sat 2017-01-28', 'Sun 2017-01-29', 'Mon 2017-01-30', 'Tue 2017-01-31', 'Wed 2017-02-01'],
         datasets: [{
             label: label_av,
             fill: false,
             backgroundColor: color_av,
             data: [72.22, 75, 76.69, 82.62, 100, 100, 100, 92.19, 57.81, 100, 100, 100, 89.81, 100, 83.37, 100, 100]
         }]
     };

     var ctx = document.getElementById("rooms_graph").getContext("2d");
     var myLineChart = new Chart(ctx, {
         type: "line",
         data: chart01Data,
         options: {
             scales: {
                 xAxes: [{
                     gridLines: {
                         display: false
                     },
                     stacked: true
                 }],
                 yAxes: [{
                     ticks: {
                         max: 100,
                         min: 0,
                         stepSize: 10
                     },
                     stacked: true
                 }]
             }
         }
     });
     //});
 }

 drawChartSeats();
 drawChartRooms();