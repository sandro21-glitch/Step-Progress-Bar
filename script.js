'use strict';


const progress = document.getElementById('progress');
const circle = document.querySelectorAll('.circle');
const prev =  document.getElementById('prev');
const next =  document.getElementById('next');

let count = 1;

next.addEventListener('click', function(){

    count++;

    if(count > circle.length){
        next.disabled = false;
        prev.disabled = false;
    }else if(count === circle.length){
        next.disabled = true;
        prev.disabled = false;
    }else{
        next.disabled = false;
        prev.disabled = false;
    }

    circleActive();

});

prev.addEventListener('click', function(){

    count--;

    if(count > circle.length){
        next.disabled = true;
        prev.disabled = false;
    }else if(count === 1){
        next.disabled = false;
        prev.disabled = true;
    }else{
        next.disabled = false;
        prev.disabled = false;
    }

    circleActive();

});

function circleActive(){

    circle.forEach(function(circles, i) {       
        if(count > i){
            circles.classList.add('active');
        }else {
            circles.classList.remove('active');
        }
    });     
    
    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%';
}

