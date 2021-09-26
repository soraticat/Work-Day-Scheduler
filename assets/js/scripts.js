//set global variables
var thisMoment = moment();
var hour = moment().hour(); //sets hour variable to 24 hour value
var dateToday = thisMoment.format('dddd, MMMM do');

//Puts today's date in the header
var displayDate = $('#dateToday');
displayDate.text(dateToday);

//set background color of text field based on time. Compares the current hour to the timeBlock value and runs equality comparisons for each input form. Adds past, present, or future classes based on equality outcome.
    $.each($('input'), function(){
    //sets timeBlock to id value (24 hour time)
    var timeBlock = $(this).attr('id'); 
    $(this).val(localStorage.getItem(timeBlock)); //gets values from local storage to populate saved form data
    if(timeBlock == hour){
        $(this).addClass('present');
    }else if(timeBlock < hour){
        $(this).addClass('past');
    }else{
        $(this).addClass('future');
    };
});

//on click event listener to save form input to localStorage. Uses the data-id value as a key and sets form input to the task variable as the storage value
$(document).ready(function() {
    $('.saveBtn').click(function(){
        var dataID = $(this).attr('data-id');
        var task = $('#' + dataID).val();
        localStorage.setItem(dataID, task);
    });
});

//Makes the background color of forms stay the same on focus
$('.form-control').focus(function(){
    if ($(this).attr('class').includes('past')){
        $(this).css("background-color", "#d3d3d3");
    }else if ($(this).attr('class').includes('present')){
        $(this).css("background-color", "#ff3931");
    }else{
        $(this).css("background-color", "#77dd77");
    };
});