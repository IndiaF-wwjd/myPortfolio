"use strict";

$(document).ready(() => {

    let nextSlide = $("#slides img:first-child");
    let timer1 = null;

    const runSlideShow = () => {
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000, () => {

            if (nextSlide.next().length == 0) {
                nextSlide = $("#slides img:first-child");
            } else {
                nextSlide = nextSlide.next();
            }

            const nextSlideSource = nextSlide.attr("src");
            const nextCaption = nextSlide.attr("alt");

            $("#slide").attr("src", nextSlideSource).fadeIn(1000);
            $("#caption").text(nextCaption).fadeIn(1000);
        });
    };

    $("#startButton").click(() => {
        if (timer1 == null) {
            timer1 = setInterval(runSlideShow, 3000);
        }
    });

    $("#stopButton").click(() => {
        if (timer1 != null) {
            clearInterval(timer1);
            timer1 = null;
        }
    });

});