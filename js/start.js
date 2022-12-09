"use strict";


import { arrWords } from './posts.js'; // посты
import { WordsArr } from './words.js';


let timerId,
    randText = randomInteger(1, 2),
    idAnim,
    randomWords,
    isShifr = false,
    testArr = [],
    testArr2 = [],
    arrNull = '',
    isMainTwo = false,
    isLoggerInput = false,
    textArrayLogger = '';

let btn = document.querySelector('#btn_start'),
    body = document.querySelector('body'),
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
    inputText = document.querySelector('#inputText'),
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





const posts = [];
while (posts.length <= 20) {
    let a = randomInteger(0, arrWords.length - 1);
    posts.unshift(arrWords[a]);
    arrWords.splice([a], 1);
}

console.dir(posts);
console.dir(arrWords);


function words() {
    if (WordsArr.length == 0) {
        location.reload();
    } else {
        window.scrollTo(0,0);

        if (inputText.style.display == 'block') {
            inputText.value = '';
            inputText.style.display = 'none';
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

        main.classList.add('animate__animated', 'animate__zoomIn', 'animate__faster');
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


        if (randomWords == 1) {
            inputText.style.display = 'block';
            // body.style.justifyContent = 'flex-start';
            inputText.focus();
        }
        WordsArr.splice(i, 1);
        setTimeout(() => {
            // main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
            main.classList.remove('animate__animated', 'animate__zoomIn', 'animate__faster');
            // next.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
        }, 500);

    }
}

function logger() {
    if (posts.length == 1) {
        location.reload();
    } else {
        window.scrollTo(0,0);
        if (inputText.style.display == 'block') {
            inputText.value = '';
            inputText.style.display = 'none';
        }
        // descWord.classList.add('blur-sm');
        descWord.style.cursor = 'pointer';
        dateWord.classList.add('blur-sm');
        if (dateWord.style.display == 'flex') dateWord.style.display = 'none';
        // main.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        main.classList.add('animate__animated', 'animate__backInDown', 'animate__faster');
        // animate__backInDown
        // next.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        if ((posts.length - 1) != 0) {
            alert_info.innerHTML = posts.length - 1;
        } else {
            alert_info.remove();
            // alert_info.innerHTML = 'Последняя';
        }
        let i = randomInteger(0, posts.length - 1);
        // let i = randomInteger(0, 20);
        console.log(i);


        // idImg.src = '../pictures/no_photo.png';
        idImg.style.display = 'none';

        console.log(posts[i].pic);

        idImg.src = `${posts[i].pic}`;
        mainWord.innerHTML = 'wait...'
        descWord.innerHTML = 'wait...';
        idImg.onload = () => {
            idImg.style.display = 'block';
            window.scrollTo(0,0);
            mainWord.innerHTML = posts[i].name;

            console.log(posts[i].isInput);


            testArr = [];
            testArr2 = [];

            posts[i].desc.trim();
                arrNull = posts[i].desc.split(' ');

                // console.log(arrNull.length);

                arrNull.forEach(element => {
                    if (element.length > 0 && element[0].match(/[?!,-.'";—()%а-яА-ЯёЁ0-9]/ig)) {
                        console.log(element);
                        testArr.push(element);
                        testArr2.push(element);
                    }
                });

                textArrayLogger = testArr.join(' ');
                console.log(testArr.join(' '));
                console.log('Длина массива = ' + testArr.length);
                isShifr = true;
                

                let rand1 = randomInteger(0, testArr.length - 1),
                    rand2 = randomInteger(0, testArr.length - 1),
                    rand3 = randomInteger(0, testArr.length - 1);

                
                if (testArr[rand1].length <= 3) {
                    console.log('Равно одной букве = ' + testArr[rand1]);
                    while (testArr[rand1].length <= 3) {
                        rand1 = randomInteger(0, testArr.length - 1);
                        console.log(rand1);
                    }
                }
    
                if (testArr[rand2].length <= 3) {
                    console.log('rand2 = ' + rand2);
                    console.log('Равно одной букве2 = ' + testArr[rand2]);
                    while (testArr[rand2].length <= 3) {
                        rand2 = randomInteger(0, testArr.length - 1);
                        console.log(rand2);
                    }
                }

                if (testArr.length > 10) {
                    if (testArr[rand3].length <= 3) {
                    console.log('rand3 = ' + rand3);
                    console.log('Равно одной букве3 = ' + testArr[rand3]);
                        while (testArr[rand3].length <= 3) {
                            rand3 = randomInteger(0, testArr.length - 1);
                            console.log(rand3);
                        }
                    }
                }


                if (testArr.length > 10) {
                    if (rand1 == rand2 || rand1 == rand3 || rand2 == rand3) {
                        while (rand1 == rand2 || rand1 == rand3 || rand2 == rand3) {
                            rand2 = randomInteger(0, testArr.length - 1);
                            rand3 = randomInteger(0, testArr.length - 1);
                        }
                    }
                } else {
                    if (rand1 == rand2) {
                        while (rand1 == rand2) {
                            rand2 = randomInteger(0, testArr.length - 1);
                        }
                    }
                }


                console.log('rand1 = ' + rand1);
                console.log('rand2 = ' + rand2);
                console.log('rand3 = ' + rand3);

                // let ShifrSlova = descWordShifr[rand1] + ' ' + descWordShifr[rand2];
                // console.log(ShifrSlova);

                testArr.splice(rand1, 1, `<span class="blur-sm">${testArr[rand1]}</span>`);
                testArr.splice(rand2, 1, `<span class="blur-sm">${testArr[rand2]}</span>`);
                if (testArr.length > 10) testArr.splice(rand3, 1, `<span class="blur-sm">${testArr[rand3]}</span>`);

                console.log('testArr = ' + testArr.join(' '));
                descWord.innerHTML = '<p class="leading-relaxed">' + testArr.join(' ') + '</p>';



                if (posts[i].isInput == true) {
                    inputText.style.display = 'block';
                    isLoggerInput = true;
                }


                if (posts[i].dateWord.length > 0) {
                    dateWord.innerHTML = '';
                    dateWord.style.display = 'flex';
                    dateWord.innerHTML +=
                        `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                        <path d="M12 6v6l4 2"></path>
                    </svg>`;
                    dateWord.innerHTML += `<p>${posts[i].dateWord}</p>`;
                }
                posts.splice(i, 1);

                setTimeout(() => {
                    main.classList.remove('animate__animated', 'animate__backInDown', 'animate__faster');
                }, 500);
            };

    }
}


btn.addEventListener('click', () => {
    if (select.value == 'Слова') {
        randText == 1 ? mainWord.classList.add('text-green-500') : mainWord.classList.add('text-purple-400');
        //     mainWord.classList.add('text-green-500');
        // } else {
        //     mainWord.classList.add('text-purple-400');
        // }
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
    window.scrollTo(0,0);
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
        console.log(inputText.style.display);
        if (inputText.style.display !== 'block') protect();
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
            descWord.innerHTML = '<p class="leading-relaxed">' + testArr2.join(' ') + '</p>';
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

    if (isLoggerInput == true) {

        // console.log('textArrayLogger = ' + textArrayLogger.toLowerCase().replace(/[\s.,%]/g, ''));
        // console.log('inputText = ' + inputText.value.toLowerCase().replace(/[\s.,%]/g, ''));
        if (inputText.value.toLowerCase().replace(/[\s.,%]/g, '') == textArrayLogger.toLowerCase().replace(/[\s.,%]/g, '')) {
            isLoggerInput = false;
            window.scrollTo(0,0);
            logger();
        }
    }


    if (inputText.value.toLowerCase().trim() == mainWord.innerHTML.toLowerCase().trim()) {
        words();
    }
});



// next.addEventListener('click', (e) => {
//     e.preventDefault();
//     protect();
// });


function protect() {
    // window.scrollTo(0,0);
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
        body.classList.add('bg-slate-900');
        hello_h1.style.color = '#fff';
        main.classList.add('bg-slate-800');
        mainTwo.classList.add('bg-slate-900');
        descWord.style.color = 'rgb(209 213 219)';
        select.style.backgroundColor = '#6c757d';
        select.style.color = '#fff';
        dateWord.style.color = '#fff';
    }
}