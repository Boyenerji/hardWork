"use strict";


import { arrWords } from './posts.js'; // посты
import { WordsArr } from './words.js';
import { englishWords } from './engwords.js';
// import { text } from 'express';


console.dir(englishWords);

let arrColors = [
    'text-green-500',
    'text-purple-400',
    'text-orange-500',
    'text-cyan-600',
    'text-blue-600'
];


let randText = randomInteger(0, 4),
    randomWords,
    isMainTwo = false,
    textArrayLogger = '',
    myr = '',
    a = 0,
    y = 0,
    letArr = [];

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
    mainWord2 = document.querySelector('.mainWord2'),
    descWord = document.querySelector('.descWord'),
    textA = document.querySelector('.textA'),
    example = document.querySelector('.example'),
    idImg = document.querySelector('#idImg'),
    mainTwo = document.querySelector('.mainTwo'),
    // inputText = document.querySelector('#inputText'),
    btn_test = document.querySelector('#btn_test'),
    btn_test2 = document.querySelector('#btn_test2'),
    audio = document.querySelector('.audio'),
    echoWarning = document.querySelector('#echoWarning'),
    main_2 = document.querySelector('.main_2');







const posts = [];
while (posts.length <= 25) {
    let a = randomInteger(0, arrWords.length - 1);
    posts.unshift(arrWords[a]);
    arrWords.splice([a], 1);
    // console.log(arrWords);
}

const words = [];
while (words.length <= 25) {
    let a = randomInteger(0, WordsArr.length - 1);
    words.unshift(WordsArr[a]);
    WordsArr.splice([a], 1);
}


const englishWordsArr = [];
while (englishWordsArr.length <= 15) {
    let a = randomInteger(0, englishWords.length - 1);
    englishWordsArr.unshift(englishWords[a]);
    englishWords.splice([a], 1);
}



console.dir(englishWordsArr);
console.dir(posts);
console.dir(words);


function wordsFunc() {


    if (words.length == 0 || englishWordsArr.length == 0) {
        location.reload();
    } else {

        if (example.className.indexOf('blur-sm') == -1) example.classList.add('blur-sm');
        if (example.innerHTML.length > 0) example.innerHTML = '';

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
            // inputText.style.display = 'block';
        } else {
            console.log('Блюрим описание');
            descWord.classList.add('blur-sm');
            descWord.style.cursor = 'pointer';
        }
        isMainTwo = true;



        main.classList.add('animate__animated', 'animate__backInDown', 'animate__faster');

        let i;
        if (select.value == 'English') {
            ((englishWordsArr.length - 1) != 0) ? alert_info.innerHTML = englishWordsArr.length - 1 : alert_info.remove();
            i = randomInteger(0, englishWordsArr.length - 1);
        } else {
            ((words.length - 1) != 0) ? alert_info.innerHTML = words.length - 1 : alert_info.remove();
            i = randomInteger(0, words.length - 1);
        }

        // ((words.length - 1) != 0) ? alert_info.innerHTML = words.length - 1 : alert_info.remove();
        // let i = randomInteger(0, words.length - 1);

        if (select.value == 'English') {
            console.log(englishWordsArr);
            console.log(englishWordsArr[i]);
            console.log(englishWordsArr[i].desc.length);
            let randEndWord = randomInteger(0, englishWordsArr[i].desc.length - 1 );
            mainWord.innerHTML = englishWordsArr[i].name;
            descWord.innerHTML = englishWordsArr[i].desc[randEndWord];
        } else {
            mainWord.innerHTML = words[i].name;
            descWord.innerHTML = words[i].desc;
        }

        if (select.value == 'English') {
            if (englishWordsArr[i].example.length != 0) {
                let randomExample = randomInteger(0, englishWordsArr[i].example.length - 1);
                console.log(englishWordsArr[i].example[randomExample]);
                example.innerHTML = englishWordsArr[i].example[randomExample];
            }
        } else {
            if (words[i].example.length != 0) {
                let randomExample = randomInteger(0, words[i].example.length - 1);
                console.log(words[i].example[randomExample]);
                example.innerHTML = words[i].example[randomExample];
            }
        }


        (select.value == 'English') ? englishWordsArr.splice(i, 1) : words.splice(i, 1);
        // words.splice(i, 1);

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
        // y = 0;
        descWord.classList.remove('blur-sm');

    
        descWord.style.cursor = 'pointer';
        // mainWord.classList.add('blur-sm');
        if (audio.style.display == 'flex') audio.style.display = 'none';

        main.classList.add('animate__animated', 'animate__backInDown', 'animate__faster');

        ((posts.length - 1) != 0) ? alert_info.innerHTML = posts.length - 1 : alert_info.remove();





        let i = randomInteger(0, posts.length - 1);

        console.log(arrWords[i]);
        console.log(i);

        window.scrollTo(0,0);

        idImg.style.display = 'none';
        // console.log(posts[i].pic);

        idImg.src = `${posts[i].pic}`;
        
        let mainWordLet = posts[i].name;
        let textAlet = posts[i].textA;
        mainWord2.innerHTML = '';


        if (textA.style.display == 'block') {
            textA.value = '';
            textA.style.display = 'none'
        }



        switch (posts[i].isInput) {
            case 0:
                console.log('0');

                mainWord.innerHTML = mainWordLet;
                descWord.innerHTML = '';

                posts[i].arrInput.sort(() => Math.random() - 0.5);
                console.log(posts[i].arrInput.sort(() => Math.random() - 0.5));

                posts[i].arrInput.forEach(element => {
                    descWord.innerHTML += `<button>${element}</button>`;
                });

                let letInput = posts[i].trueInput;

                let popp = document.querySelectorAll('button');

                for (let j = 0; j < popp.length; j++) {
                    console.log(j);
                    console.log(popp[j]);
                    popp[j].addEventListener('click', function (e) {
                        console.dir(e.target.style.display);
                        console.log(e.target.innerText);


                        if (e.target.innerText !== '>') {
                            mainWord2.innerHTML += e.target.innerText + ' ';
                            e.target.style.display = 'none';
                        }


                        console.log(letInput);
                        console.log(mainWord2.innerText);


                        letInput.forEach(element => {
                            if (element == mainWord2.innerText) {
                                console.log('aga');
                                mainWord2.innerHTML = '';
                                ifBlur();
                            }
                        });

                    });
                }

                break;

            case 1:
                console.log('1');

                mainWord.innerHTML = posts[i].name;
                descWord.innerHTML = '<p class="leading-relaxed">' + posts[i].desc + '</p>';
                break;

            case 2:
                console.log('2');

                audio.innerHTML = '';
                audio.style.display = 'flex';
                mainWord.innerHTML = posts[i].name;
                descWord.innerHTML = '<p class="leading-relaxed">' + posts[i].audio + '</p>';
                break;

            case 3:
                console.log('3');

                mainWord.innerHTML = posts[i].name;
                descWord.innerHTML = '';
                textA.style.display = 'block';


                textA.addEventListener('input', function (e) {
                    e.preventDefault();
                    console.log(textA.value);
                    console.log(textAlet);

                    textAlet.forEach(element => {
                        if (textA.value.toLowerCase().trim() == element.toLowerCase().trim()) {
                            textA.style.display = 'none';
                            console.log('Congrat');
                            logger();
                        }
                    });

                    // if (textA.value.toLowerCase().trim() == textAlet.toLowerCase().trim()) {
                    //     console.log('Congrat');
                       
                    //     // setTimeout(() => {
                    //     //     wordsFunc();
                    //     // }, 3000);
                    // }
                });

                break;

            default:
                console.log('error');
                break;
        }

        idImg.onload = () => {
            idImg.style.display = 'block';
        };

        posts.splice(i, 1);
        setTimeout(() => {
            main.classList.remove('animate__animated', 'animate__backInDown', 'animate__faster');
        }, 500);

    }
}


btn.addEventListener('click', () => {
    if (select.value == 'Слова' || select.value == 'English' ) {

        mainWord.classList.add(`${arrColors[randText]}`);

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


        letArr = words;
        console.log(letArr);


        wordsFunc();
    } else {
        body.style.justifyContent = 'flex-start';
        body.style.height = 'auto';
        btn_test.style.display = 'block';
        btn_test2.style.display = 'block';
        logger();
    }


    btn.remove();
    select.remove();
    hello_h1.remove();

    showWords.style.display = 'flex';
    window.scrollTo(0,0);
});


mainTwo.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('aga');
    console.log(isMainTwo);
    if (isMainTwo == true) {
        if (descWord.className.indexOf('blur-sm') !== -1) descWord.classList.remove('blur-sm');
        if (mainWord.className.indexOf('blur') !== -1)  mainWord.classList.remove('blur');
        if (example.className.indexOf('blur-sm') !== -1) example.classList.remove('blur-sm');
        isMainTwo = false;
    } else {
        wordsFunc();
    }
    
});

mainWord.addEventListener('click', (e) => {
    e.preventDefault();
    // mainWord.style.cursor = 'auto';
    mainWord.classList.remove('blur-sm');
    // isMainTwo = false;
});



example.addEventListener('click', () => {
    example.classList.remove('blur-sm');
});

btn_test.addEventListener('click', () => {
    ifBlur();
});

btn_test2.addEventListener('click', () => {
    ifBlur();
});



document.addEventListener('keydown', function(event) {
    if (event.key == 'ArrowRight') {
        ifBlur();
    }
 
});


function ifBlur() {
    if (select.value == 'Слова') {
        if (descWord.className.indexOf('blur-sm') !== -1) descWord.classList.remove('blur-sm');
    } else {

        logger();


        // console.log('A = ' + a);

        // if (a == 0) {
            

        //     let prof = descWord.children[0].children;
        //     for (let key in prof) {
        //         if (prof[key].classList == 'blur-sm') {
        //             y++;
        //             prof[key].classList.remove('blur-sm');
        //         }
        //     }

        //     console.log('Y = ' + y);
        //     if (y == 0) {
        //         a = 0;
        //         console.log(a);
        //         logger();
        //     } else {
        //         a++;
        //     }
            
        // } else {
        //     a = 0;
        //     logger();
        // }
    }
}


function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}



DarkTheme();

function DarkTheme() {
    let date = new Date();
    if (date.getHours() > 16 || date.getHours() < 9) {
        console.log('yes');
        alert_info.style.color = 'rgb(209, 213, 219)';
        body.classList.add('bg-slate-900');
        hello_h1.style.color = '#fff';
        main.classList.add('bg-slate-800');
        mainTwo.classList.add('bg-slate-900');
        descWord.classList.add('text-white');
        select.style.backgroundColor = '#6c757d';
        select.style.color = '#fff';
        mainTwo.classList.add('bg-slate-800');
        example.style.color = '#cbd5e1';
        mainWord2.style.color = '#fff';
    }
}