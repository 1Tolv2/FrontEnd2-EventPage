$(function () {
  $(".showMore").on("click", function () {
    const siblingP = $(this).siblings(".eventInfo");
    siblingP.toggleClass("open");

    siblingP.hasClass("open")
      ? $(this).text("Visa mindre")
      : $(this).text("Visa mer...");
  });

  $(".detailsImages").hover(function () {
      $(this).toggleClass("focused")
  });

  $("form").submit(function(e){
    e.preventDefault();
});

  $("#addScheduleItem").on("click", function () {
    let newItem = $("<li></li>").text($("#scheduleItemInput").val());
    $("#eventSchedule").append($(newItem));
  });

  $("#eventSchedule").on("click", "li", function() {
    $(this).remove()
  })
});