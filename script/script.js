// Not finsihed still need to work on drop down and date picker

// Moment.js portion. Mainly time is on here
var time = moment();

var par = document.createElement("P");
par.innerHTML = time.format("MMM Do, YYYY") + " at " + time.format("h:mm:ss a");
document.body.appendChild(par)

//this part is mainly the popup for the form
var di = document.createElement("P");
di.innerHTML = "This is dialog example"
di.className = ("dialog")
document.body.appendChild(di)


var btn = document.createElement("BUTTON");
btn.innerHTML = "Press";
document.body.appendChild(btn)


$(btn.addEventListener("click", function() {
    $( document.getElementsByClassName("dialog")).dialog();
  } ));

// for the dropdown
var field = document.createElement("fieldset");
field.className = "fs";
var sel = document.createElement("select");
sel.className = "drop";
var option = document.createElement("option");
option.value = "Group";
document.body.appendChild(field);
document.getElementsByClassName("drop").appendChild(sel);
getElementsByClassName("drop").appendChild(option);



$( function() {
    $( document.getElementsByClassName("drop") ).selectmenu();
  } );

// for the datepicker
// $( function() {
//     $( "#datepicker" ).datepicker({
//       showOn: "button",
//       buttonImage: "images/calendar.gif",
//       buttonImageOnly: true,
//       buttonText: "Select date"
//     });
//   } );