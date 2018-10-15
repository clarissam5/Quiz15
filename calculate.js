//Author: Clarissa Mercado
//Quiz 15 Calculator Program

$(document).ready(function () {
    $(".inputElements").on("click", function () {
        $("#calculatorInput").append($(this).text());
    });
    $(".clear").on("click", function () {
        $("#calculatorInput").empty();
    });
    $(".evaluate").on("click", function () {
        try {
            var z = $("#calculatorInput").text();
            $("#calculatorInput").text(eval(z));
        }
        catch (err) {
            var message = document.getElementById("calculatorInput");
            message.innerHTML = "Invalid calculator input.";
        }

    });
});