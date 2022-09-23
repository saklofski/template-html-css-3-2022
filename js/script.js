$(function() {

    'use strict';

    /* nicescroll */

    $('html').niceScroll({

        cursorcolor: 'var(--main-color)',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid var(--main-color)'

    });

    
/* Start events */

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    /* let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24); */
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    
    if(dateDiff < 0) {
        clearInterval(counter);
    }

}, 1000)

/* End Events */

/* Start skills stas up */

let sectionskill = document.querySelector('.our-skills');
let spans = document.querySelectorAll(".the-progress span");
let sectionup = document.querySelector(".up");
let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if(window.scrollY >= sectionskill.offsetTop - 250) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }

    if (this.scrollY >= 1000) {
        sectionup.classList.add("show");
    } else {
        sectionup.classList.remove("show");
    }

    if(window.scrollY >= section.offsetTop - 400) {
        if(!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }

}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

sectionup.onclick = function () {
    window.scrollTo({
        top: 0, 
        behavior: "smooth",
    })
    } 

/* End skills stats up */



});  
