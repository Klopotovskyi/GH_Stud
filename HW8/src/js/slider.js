'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let prev_slide_btn = document.querySelector('.previous-slide');
    let next_slide_btn = document.querySelector('.next-slide');
    let posters = document.querySelectorAll('.scene-preview img');
    let curentItem = 0;

    next_slide_btn.addEventListener('click', function () {
        HidePoster(curentItem);
        curentItem++;
        if (curentItem >= posters.length) {
            curentItem = 0;
        }
        ShowPoster(curentItem);
    });
    prev_slide_btn.addEventListener('click', function () {
        HidePoster(curentItem);
        curentItem--;
        if (curentItem < 0) {
            curentItem = posters.length - 1;
        }
        ShowPoster(curentItem);
    });

    function ShowPoster(curentItem) {
        posters[curentItem].classList.toggle('shown');
    }
    function HidePoster(curentItem) {
        posters[curentItem].classList.remove('shown');
    }
})
