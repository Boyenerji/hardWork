"use strict";


import { arrWords } from './posts.js'; // посты
import { WordsArr } from './words.js';


let randText = randomInteger(1, 4),
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
    // main_btn = document.querySelector('#main_btn'),
    main = document.querySelector('.main'),
    alert_info = document.querySelector('#alert_info'),
    hello_h1 = document.querySelector('#hello_h1'),
    picWord = document.querySelector('.picWord'),
    mainWord = document.querySelector('.mainWord'),
    descWord = document.querySelector('.descWord'),
    idImg = document.querySelector('#idImg'),
    mainTwo = document.querySelector('.mainTwo'),
    inputText = document.querySelector('#inputText'),
    // btn_test = document.querySelector('#btn_test'),
    dateWord = document.querySelector('.dateWord'),
    echoWarning = document.querySelector('#echoWarning'),
    textareaID = document.querySelector('textarea');






const posts = [];
while (posts.length <= 20) {
    let a = randomInteger(0, arrWords.length - 1);
    posts.unshift(arrWords[a]);
    arrWords.splice([a], 1);
    // console.log(words);
}

const words = [];
while (words.length <= 20) {
    let a = randomInteger(0, WordsArr.length - 1);
    words.unshift(WordsArr[a]);
    WordsArr.splice([a], 1);
}

console.dir(posts);
console.dir(words);


function wordsFunc() {
    if (words.length == 0) {
        location.reload();
    } else {

        
        

        if (inputText.style.display == 'block') {
            inputText.blur();
            inputText.value = '';
            inputText.style.display = 'none';
        }

        if (mainWord.style.cursor == 'pointer') mainWord.style.cursor = 'auto';
        if (echoWarning.style.display == 'block') echoWarning.style.display = 'none';





        mainWord.classList.remove('blur');
        descWord.classList.remove('blur-sm');

        randomWords = randomInteger(1, 2);
        console.log('randomWords = ' + randomWords);

        if (randomWords == 1) {
            console.log('Блюрим тайтл');
            mainWord.classList.add('blur');
            mainWord.style.cursor = 'pointer';
            inputText.style.display = 'block';
        } else {
            console.log('Блюрим описание');
            descWord.classList.add('blur-sm');
            descWord.style.cursor = 'pointer';
        }

        isMainTwo = true;

        main.classList.add('animate__animated', 'animate__backInDown', 'animate__faster');



        ((words.length - 1) != 0) ? alert_info.innerHTML = words.length - 1 : alert_info.remove();
        let i = randomInteger(0, words.length - 1);


        if(words[i].isEnglish == true) {
            mainWord.style.color = '#FFFFFF';
            main.style.backgroundColor = '#1E90FF';
            descWord.style.color = 'white';
        } else {
            mainWord.style.color = '';
            main.style.backgroundColor = '';
            descWord.style.color = '';
        }
        
        mainWord.innerHTML = words[i].name;
        descWord.innerHTML = words[i].desc;



        // window.scrollTo(0,0);
        words.splice(i, 1);


        setTimeout(() => {
            main.classList.remove('animate__animated', 'animate__backInDown', 'animate__faster');
        }, 500);

    }
}

function logger() {
    if (posts.length == 1) {
        location.reload();
    } else {
        window.scrollTo(0,0);
        descWord.classList.remove('blur-sm');
        textareaID.value = '';
        if (textareaID.style.display == 'block') textareaID.style.display = 'none';

        descWord.style.cursor = 'pointer';
        dateWord.classList.add('blur-sm');
        if (dateWord.style.display == 'flex') dateWord.style.display = 'none';

        main.classList.add('animate__animated', 'animate__backInDown', 'animate__faster');

        ((posts.length - 1) != 0) ? alert_info.innerHTML = posts.length - 1 : alert_info.remove();

        let i = randomInteger(0, posts.length - 1);
        console.log(i);

        idImg.style.display = 'none';
        console.log(posts[i].pic);

        idImg.src = `${posts[i].pic}`;
        mainWord.innerHTML = 'wait...'
        descWord.innerHTML = 'wait...';
        idImg.onload = () => {
            idImg.style.display = 'block';
            window.scrollTo(0,0);
            mainWord.innerHTML = posts[i].name;

            testArr = [];
            testArr2 = [];

            posts[i].desc.trim();
            arrNull = posts[i].desc.split(' ');
            // console.log(arrNull);

            arrNull.forEach(element => {
                if (element.length > 0 && element[0].match(/[?!,-.'";—()%а-яА-ЯёЁ0-9]/ig)) {
                    console.log(element);
                    testArr.push(element);
                    testArr2.push(element);
                }
            });

            textArrayLogger = testArr.join(' ');

            if (posts[i].isInput == true) {
                textareaID.style.display = 'block';
                descWord.classList.add('blur-sm');
                isLoggerInput = true;
                isShifr = false;
                descWord.innerHTML = '<p class="leading-relaxed">' + textArrayLogger + '</p>';
            } else {

                // console.log(testArr.join(' '));
                // console.log('Длина массива = ' + testArr.length);
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


                console.log('rand1 = ' + testArr[rand1]);
                console.log('rand2 = ' + testArr[rand2]);
                console.log('rand3 = ' + testArr[rand3]);


                testArr.splice(rand1, 1, `<span class="blur-sm">${testArr[rand1]}</span>`);
                testArr.splice(rand2, 1, `<span class="blur-sm">${testArr[rand2]}</span>`);
                if (testArr.length > 10) testArr.splice(rand3, 1, `<span class="blur-sm">${testArr[rand3]}</span>`);

                console.log('testArr = ' + testArr.join(' '));
                descWord.innerHTML = '<p class="leading-relaxed">' + testArr.join(' ') + '</p>';
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
        switch (randText) {
            case 1:
                mainWord.classList.add('text-green-500')
                break;
            case 2:
                mainWord.classList.add('text-purple-400')
                break;
            case 3:
                mainWord.classList.add('text-orange-500')
                break;
            case 4:
                mainWord.classList.add('text-cyan-600')
                break;
            default:
                mainWord.classList.add('text-blue-600')
                break;
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
        wordsFunc();
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


mainTwo.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputText.style.display === 'block') {
        inputText.focus({
            preventScroll: true
        });
    } else {
        if (isMainTwo == true) {
            if (descWord.className.indexOf('blur-sm') !== -1) descWord.classList.remove('blur-sm');
            if (mainWord.className.indexOf('blur-sm') !== -1) mainWord.classList.remove('blur-sm');
            isMainTwo = false;
        } else {
            wordsFunc();
        }
    }
});


descWord.addEventListener('click', (e) => {
    e.preventDefault();

    if (select.value == 'Слова') {
        if (descWord.className.indexOf('blur-sm') !== -1) descWord.classList.remove('blur-sm'); 
    } else {
        console.log('Не слова');
        if (isShifr == true) {
            isShifr = false;
            descWord.innerHTML = '<p class="leading-relaxed">' + testArr2.join(' ') + '</p>';
        } else {
            if (isLoggerInput == true) {
                descWord.classList.remove('blur-sm'); 
                isLoggerInput = false;
                textareaID.style.display = 'none';
                divTextarea.style.display = 'none';
            } else {
                logger();
            }
        }
    }
});

mainWord.addEventListener('click', (e) => {
    e.preventDefault();
    mainWord.style.cursor = 'auto';
    mainWord.classList.remove('blur');
});

dateWord.addEventListener('click', (e) => {
    e.preventDefault();
    dateWord.style.cursor = 'auto';
    dateWord.classList.remove('blur-sm');
});



inputText.addEventListener('input', function (e) {
    e.preventDefault();
    if (inputText.value.toLowerCase().trim() == mainWord.innerHTML.toLowerCase().trim()) wordsFunc();
});




textareaID.addEventListener('input', function (e) {
    e.preventDefault();
    // console.dir(textareaID.style);
    if (isLoggerInput == true) {
        console.log('textArrayLogger = ' + textArrayLogger.toLowerCase().replace(/[\s.,%]/g, ''));
        console.log('inputText = ' + textareaID.value.toLowerCase().replace(/[\s.,%]/g, ''));
        if (textareaID.value.toLowerCase().replace(/[\s.,%]/g, '') == textArrayLogger.toLowerCase().replace(/[\s.,%]/g, '')) {
            isLoggerInput = false;
            window.scrollTo(0,0);
            logger();
        }
    }

});


// function protect() {
//     select.value == 'Слова' ? words() : logger();
// }


function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

DarkTheme();

function DarkTheme() {
    let date = new Date();
    if (date.getHours() > 16 || date.getHours() < 7) {
        console.log('yes');
        alert_info.style.color = 'rgb(209, 213, 219)';
        body.classList.add('bg-slate-900');
        hello_h1.style.color = '#fff';
        main.classList.add('bg-slate-800');
        mainTwo.classList.add('bg-slate-900');
        descWord.classList.add('text-white');
        select.style.backgroundColor = '#6c757d';
        select.style.color = '#fff';
        dateWord.style.color = '#fff';
        inputText.style.backgroundColor = 'rgb(51 65 85)';
        inputText.style.color = '#fff';
        textareaID.style.backgroundColor = 'rgb(51 65 85)';
        textareaID.style.color = '#fff';
        mainTwo.classList.add('bg-slate-800');
    }
}