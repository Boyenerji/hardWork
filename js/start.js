"use strict";


import { arrWords } from './posts.js';
import { WordsArr } from './words.js';


let timerId,
    randText = randomInteger(1, 2),
    idAnim,
    randomWords,
    isShifr = false,
    testArr = [],
    testArr2 = [],
    arrNull = '',
    isMainTwo = false;

let btn = document.querySelector('#btn_start'),
    body = document.querySelector('body'),
    btn_next = document.querySelector('#btn_next'),
    showWords = document.querySelector('.showWords'),
    select = document.querySelector('select'),
    main_btn = document.querySelector('#main_btn'),
    main = document.querySelector('.main'),
    alert_info = document.querySelector('#alert_info'),
    hello_h1 = document.querySelector('#hello_h1'),
    picWord = document.querySelector('.picWord'),
    mainWord = document.querySelector('.mainWord'),
    descWord = document.querySelector('.descWord'),
    idImg = document.querySelector('#idImg'),
    mainTwo = document.querySelector('.mainTwo'),
    // next = document.querySelector('.next'),
    inputText = document.querySelector('#inputText'),
    error = document.querySelector('#error'),
    dalee = document.querySelector('#dalee'),
    btn_test = document.querySelector('#btn_test'),
    dateWord = document.querySelector('.dateWord');



    // let a = ['\n', 'Животное', 'типа', 'ёжика\n'];
    // a.forEach(function(item, i) {
    //     console.log(item);
    //     console.log(i);
    // });
    // a = a.filter(el => el.includes(/[a-я]/))
    // console.log(a)
    

// let bro = 'string';


// if (bro.indexOf('<br>') === -1) {
//     console.log('Не такого');
// };



// let names = 'Гарри Трамп Фрэд Барни Хелен Ригби  Билл Абель Крис Ханд ';

// console.log(names);

// var re = /\s*\s*/;
// var nameList = names.split(re);

// console.log(nameList);


// let bro = `<ol>
//             <li>Северная Америка.</li>
//             <li>Южная Америка</li>
//             <li>Антарктида.</li>
//             <li>Африка.</li>
//             <li>Евразия.</li>
//             <li>Австралия</li>
// </ol>`;

// bro = bro.replace(/<ol>/gi, '');
// bro = bro.replace(/<\/ol>/gi, '');
// bro = bro.replace(/<\/ol>/gi, '');
// bro = bro.replace(/<\/ol>/gi, '');
// console.log(bro);

// bro.split(/<ol>/);

// console.log(bro);

// bro.forEach(element => {
//     console.log(element);
// });




function words() {
    if (WordsArr.length == 0) {
        location.reload();
    } else {

        if (inputText.style.display == 'block') {
            inputText.value = '';
            inputText.style.display = 'none';
        }


        if (error.style.display == 'block') {
            error.style.display = 'none';
        }

        mainWord.classList.remove('blur');
        descWord.classList.remove('blur-sm');
        randomWords = randomInteger(1, 2);


        // console.log(randomWords);



        if (randomWords == 1) {
            mainWord.classList.add('blur');
            mainWord.style.cursor = 'pointer';

        } else {
            descWord.classList.add('blur-sm');
            descWord.style.cursor = 'pointer';
        }

        isMainTwo = true;

        main.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        // next.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        if ((WordsArr.length - 1) != 0) {
            alert_info.innerHTML = WordsArr.length - 1;
        } else {
            // dalee.innerText = 'Конец.'
            alert_info.remove();
        }
        let i = randomInteger(0, WordsArr.length - 1);
        console.log(i);
        mainWord.innerHTML = WordsArr[i].name;
        descWord.innerHTML = WordsArr[i].desc;

        // Работать
        // let lol = WordsArr[i].desc.split(' ');
        // console.log(lol[0] = '########');
        // // console.log(WordsArr[i].desc.split(' '));


        if (randomWords == 1) {
            inputText.style.display = 'block';
            // body.style.justifyContent = 'flex-start';
            inputText.focus();
        }
        WordsArr.splice(i, 1);
        setTimeout(() => {
            main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
            // next.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
        }, 800);

    }
}

function logger() {
    
    if (arrWords.length == 0) {
        location.reload();
    } else {
        // descWord.classList.add('blur-sm');
        descWord.style.cursor = 'pointer';
        dateWord.classList.add('blur-sm');
        if (dateWord.style.display == 'flex') dateWord.style.display = 'none';
        main.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        // next.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        if ((arrWords.length - 1) != 0) {
            alert_info.innerHTML = arrWords.length - 1;
        } else {
            alert_info.remove();
            // alert_info.innerHTML = 'Последняя';
        }
        let i = randomInteger(0, arrWords.length - 1);
        console.log(i);


        // idImg.src = '../pictures/no_photo.png';
        idImg.style.display = 'none';

        console.log(arrWords[i].pic);

        idImg.src = `${arrWords[i].pic}`;
        mainWord.innerHTML = 'wait...'
        descWord.innerHTML = 'wait...';
        idImg.onload = () => {
            idImg.style.display = 'block';
            mainWord.innerHTML = arrWords[i].name;


            testArr = [];
            testArr2 = [];

                arrWords[i].desc.trim();
                arrNull = arrWords[i].desc.split(' ');

                // console.log(arrNull.length);

                arrNull.forEach(element => {
                    if (element.length > 0 && element[0].match(/[?!,-.'";—()%а-яА-ЯёЁ0-9]/ig)) {
                        console.log(element);
                        testArr.push(element);
                        testArr2.push(element);
                    }
                });


                console.log(testArr);
                isShifr = true;
                


                let random4isloShifr = randomInteger(0, testArr.length - 1),
                    random4isloShifr2 = randomInteger(0, testArr.length - 1);

                // if (arrNull.length > 20) {
                //     let random4isloShifr3 = randomInteger(0, testArr.length - 1);
                // }

                if (testArr[random4isloShifr].length <= 3) {
                    console.log('Равно одной букве = ' + testArr[random4isloShifr]);
                    while (testArr[random4isloShifr].length <= 3) {
                        random4isloShifr = randomInteger(0, testArr.length - 1);
                        console.log(random4isloShifr);
                    }
                }
    
                if (testArr[random4isloShifr2].length <= 3) {
                    console.log('random4isloShifr2 = ' + random4isloShifr2);
                    console.log('Равно одной букве2 = ' + testArr[random4isloShifr2]);
                    while (testArr[random4isloShifr2].length <= 3) {
                        random4isloShifr2 = randomInteger(0, testArr.length - 1);
                        console.log(random4isloShifr2);
                    }
                }

                if (random4isloShifr == random4isloShifr2) {
                    while (random4isloShifr == random4isloShifr2) {
                        random4isloShifr2 = randomInteger(0, testArr.length - 1);
                    }
                }



                console.log(random4isloShifr);
                console.log(random4isloShifr2);

                // let ShifrSlova = descWordShifr[random4isloShifr] + ' ' + descWordShifr[random4isloShifr2];
                // console.log(ShifrSlova);


                

                testArr.splice(random4isloShifr, 1, `<span class="blur-sm">${testArr[random4isloShifr]}</span>`);
                testArr.splice(random4isloShifr2, 1, `<span class="blur-sm">${testArr[random4isloShifr2]}</span>`);


                console.log('testArr = ' + testArr.join(' '));
                descWord.innerHTML = '<p class="leading-loose">' + testArr.join(' ') + '</p>';
                // descWord.innerHTML = testArr.join(' ');

                


                if (arrWords[i].dateWord.length > 0) {
                    dateWord.innerHTML = '';
                    dateWord.style.display = 'flex';
                    dateWord.innerHTML +=
                        `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                        <path d="M12 6v6l4 2"></path>
                    </svg>`;
                    dateWord.innerHTML += `<p>${arrWords[i].dateWord}</p>`;
                }
                arrWords.splice(i, 1);

                if (showWords.clientHeight < 500) {
                    body.style.justifyContent = 'center';
                } else {
                    body.style.justifyContent = 'flex-start';
                }

                setTimeout(() => {
                    main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
                    // next.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
                }, 800);
            };

    }
}


btn.addEventListener('click', () => {
    // next.style.display = 'flex';
    if (select.value == 'Слова') {
        // body.style.justifyContent = 'space-evenly';
        // btn_next.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        // mainWord.classList.add('decoration-sky-500');
        // mainWord.classList.add('text-green-500');
        if (randText == 1) {
            mainWord.classList.add('text-green-500');
        } else {
            mainWord.classList.add('text-purple-400');
        }
        mainTwo.style.display = 'flex';
        mainWord.classList.add('underline');
        mainWord.classList.remove('fs-3');
        mainWord.classList.add('text-3xl');
        descWord.classList.remove('fs-5');
        descWord.classList.add('font-thin');
        descWord.classList.add('text-xl');
        descWord.classList.add('leading-relaxed');
        descWord.style.padding = '10px';
        picWord.remove();
        body.style.justifyContent = 'space-between';
        words();
    } else {
        body.style.justifyContent = 'flex-start';
        logger();
    }


    btn.remove();
    select.remove();
    hello_h1.remove();


    // alert_info.style.display = 'block';
    showWords.style.display = 'flex';
});


mainTwo.addEventListener('touchend', (e) => {
    e.preventDefault();
    if (isMainTwo == true) {
        if (descWord.className.indexOf('blur-sm') !== -1) {
            descWord.classList.remove('blur-sm'); 
        }
        if (mainWord.className.indexOf('blur-sm') !== -1) {
            mainWord.classList.remove('blur-sm'); 
        }
        isMainTwo = false;
    } else {
        protect();
    }
});


descWord.addEventListener('click', (e) => {
    e.preventDefault();

    if (select.value == 'Слова') {
        if (descWord.className.indexOf('blur-sm') !== -1) {
            descWord.classList.remove('blur-sm'); 
        } else {
            protect();
        }
    } else {
        console.log('Не слова');
        if (isShifr == true) {
            isShifr = false;
            descWord.innerHTML = '<p class="leading-loose">' + testArr2.join(' ') + '</p>';
        } else {
            protect();
        }
    }
});

mainWord.addEventListener('click', (e) => {
    e.preventDefault();
    descWord.style.cursor = 'auto';
    mainWord.classList.remove('blur');
});

dateWord.addEventListener('click', (e) => {
    e.preventDefault();
    dateWord.style.cursor = 'auto';
    dateWord.classList.remove('blur-sm');
});



// btn_test.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.dir(main);
//     console.log(main.getBoundingClientRect());
// });

inputText.addEventListener('input', function (e) {
    if (inputText.value.toLowerCase().trim() == mainWord.innerHTML.toLowerCase().trim()) words();
});



// next.addEventListener('click', (e) => {
//     e.preventDefault();
//     protect();
// });


function protect() {
    select.value == 'Слова' ? words() : logger();
}


function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

DarkTheme();

function DarkTheme() {
    let date = new Date();
    if (date.getHours() > 15 || date.getHours() < 6) {
        console.log('yes');
        alert_info.style.color = 'rgb(209, 213, 219)';
        body.classList.add('dark:bg-slate-900');
        hello_h1.style.color = '#fff';
        main.classList.add('dark:bg-slate-800');
        mainTwo.classList.add('dark:bg-slate-900');
        descWord.style.color = 'rgb(209 213 219)';
        select.style.backgroundColor = '#6c757d';
        select.style.color = '#fff';
        dateWord.style.color = '#fff';
    }
}