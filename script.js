$(function(){
  $(".showMore").on("click", function() {
      const siblingP = $(this).siblings("p")
      siblingP.toggleClass("open")

      siblingP.hasClass("open")
    ? $(this).text("...Visa mindre")
    : $(this).text("Visa mer...");
  })

  $(".detailsImages").hover(function () {
      $(this).toggleClass("focused");
    });

    $("form").submit(function (e) {
      e.preventDefault();
    });

    $("#contactButton").on("click", function () {
      $("#contactForm").hide();

      const formHeader = $("#contactForm").siblings("h2");
      $(formHeader).text("Tack för ditt meddelande. Vi återkopplar så fort vi kan.").addClass("orangeHeader");
  });

  $("#addScheduleItem").on("click", function () {
    let newItem = $("<li></li>").text($("#scheduleItemInput").val());
    $("#eventSchedule").append($(newItem));
  });

  $("#eventSchedule").on("click", "li", function () {
    $(this).remove();
  });
})