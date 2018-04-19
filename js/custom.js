$(document).ready(function () {
    $("body").css({
        "margin-top": $("nav").height()
    });


    if ($(window).width() <= "767") {
        $("#resizeAdj").val("mobile");
    } else {
        $("#resizeAdj").val("pc");
    }


    $(window).resize(function () {
        $("body").css({
            "margin-top": $("nav").height()
        });

        if ($(window).width() <= "767" && $("#resizeAdj").val() == "pc") {
            location.reload();
        } else if ($(window).width() > "768" && $("#resizeAdj").val() == "mobile") {
            location.reload();
        }



    });



    $("a[data-target='message-success']").click(function () {
        $("div[data-role='" + $(this).attr("data-target") + "']").stop().fadeOut("fast");
    });

    $("#btnAddProduct").click(function () {

        if ($("#image1").val() == "" ||
            $("#image2").val() == "" ||
            $("#image3").val() == "" ||
            $("#image4").val() == "") {
            window.alert('Please select all images !');
        }
    });
});

var icons = document.getElementsByClassName("simg");

for (var i = 0; i < icons.length; i++) {
    icons[i].onclick = function () {
        document.getElementById("mimg").src = this.src;
    }
}