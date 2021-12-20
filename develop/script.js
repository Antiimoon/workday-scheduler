var todayDate = moment().format('dddd, MMMM do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
  //click listener savebtn
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".event").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  function timeTracker() {
    //current number of hours
    var currentTime = moment().hour();

    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      if (timeBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }

  // Get from local storage
  $("#hour9 .event").val(localStorage.getItem("hour9"));
  $("#hour10 .event").val(localStorage.getItem("hour10"));
  $("#hour11 .event").val(localStorage.getItem("hour11"));
  $("#hour12 .event").val(localStorage.getItem("hour12"));
  $("#hour1 .event").val(localStorage.getItem("hour1"));
  $("#hour2 .event").val(localStorage.getItem("hour2"));
  $("#hour3 .event").val(localStorage.getItem("hour3"));
  $("#hour4 .event").val(localStorage.getItem("hour4"));
  $("#hour5 .event").val(localStorage.getItem("hour5"));
  $("#hou6 .event").val(localStorage.getItem("hour6"));

  timeTracker();
})
  