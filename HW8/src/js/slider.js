'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let prev_slide_btn = document.querySelector('.previous-slide');
    let next_slide_btn = document.querySelector('.next-slide');
    let posters = document.querySelectorAll('.scene-preview img');
    let dates = document.querySelectorAll('div.show-shedule-item');
    let items_desc = document.querySelectorAll('div.item-desc');
    let curentItem = 2;

    activate(posters, curentItem, 'shown');
    activate(dates, curentItem, 'current-shedule-item');
    activate(items_desc, curentItem, 'shown');

    function activate(items, k, className) {
        for (let i = 0, item; i < items.length; i++) {
            item = items[i];
            if (i === k) {
                item.classList.add(className);
            } else {
                item.classList.remove(className);
            }
        }
    }

    function cleaningClass(name, className) {
        for (let j = 0, item; j < name.length; j++) {
            item = name[j];
            item.classList.remove(className);
        }
    }

    function showPoster(i) {
        console.log(i);
        cleaningClass(posters, 'shown');
        cleaningClass(dates, 'current-shedule-item');
        cleaningClass(items_desc, 'shown');
        posters[i].classList.toggle("shown");
        dates[i].classList.toggle("current-shedule-item");
        items_desc[i].classList.toggle("shown");
    }

    next_slide_btn.addEventListener('click', function () {
        curentItem++;
        if (curentItem >= posters.length) {
            curentItem = 0;
        }
        showPoster(curentItem);
    });
    prev_slide_btn.addEventListener('click', function () {
        curentItem--;
        if (curentItem < 0) {
            curentItem = posters.length - 1;
        }
        showPoster(curentItem);
    });
    for (let n = 0, item; n < dates.length; n++) {
        item = dates[n];
        item.addEventListener('click', function () {
            showPoster(n);
        });
    }
});

