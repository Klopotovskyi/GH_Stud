'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let prev_slide_btn = document.querySelector('.previous-slide');
    let next_slide_btn = document.querySelector('.next-slide');
    let posters = document.querySelectorAll('.scene-preview img');
    let curentItem = 0;

    next_slide_btn.onclick = function (){
        posters[curentItem].style.display = 'none';
        curentItem++;
        if (curentItem>=posters.length){
            curentItem =0;
        }
        posters[curentItem].style.display = 'block';
    }
    prev_slide_btn.onclick = function (){
        posters[curentItem].style.display = 'none';
        curentItem--;
        if (curentItem<0){
            curentItem =posters.length -1;
        }
        posters[curentItem].style.display = 'block';
    }

})
