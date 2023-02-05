"use strict";


import { arrWords } from './posts.js'; // посты
import { WordsArr } from './words.js';
import { englishWords } from './engwords.js';


console.log(englishWords);

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
    descWord = document.querySelector('.descWord'),
    example = document.querySelector('.example'),
    idImg = document.querySelector('#idImg'),
    mainTwo = document.querySelector('.mainTwo'),
    // inputText = document.querySelector('#inputText'),
    // btn_test = document.querySelector('#btn_test'),
    dateWord = document.querySelector('.dateWord'),
    echoWarning = document.querySelector('#echoWarning');







const posts = [];
while (posts.length <= 20) {
    let a = randomInteger(0, arrWords.length - 1);
    posts.unshift(arrWords[a]);
    arrWords.splice([a], 1);
    // console.log(words);
}

const words = [];
while (words.length <= 25) {
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

        
        // if (inputText.style.display == 'block') {
        //     inputText.blur();
        //     inputText.style.display = 'none';
        // } 
        // inputText.value = '';

        

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



        ((words.length - 1) != 0) ? alert_info.innerHTML = words.length - 1 : alert_info.remove();
        let i = randomInteger(0, words.length - 1);


        // if(words[i].isEnglish == true) {
        //     mainWord.style.color = '#FFFFFF';
        //     main.style.backgroundColor = '#1E90FF';
        //     descWord.style.color = 'white';
        // } else {
        //     mainWord.style.color = '';
        //     main.style.backgroundColor = '';
        //     descWord.style.color = '';
        // }
        
        mainWord.innerHTML = words[i].name;
        descWord.innerHTML = words[i].desc;

        // console.log(words[i].example.length);

        if (words[i].example.length != 0) {
            let randomExample = randomInteger(0, words[i].example.length - 1);
            console.log(words[i].example[randomExample]);
            example.innerHTML = words[i].example[randomExample];
        }

        // inputText.focus({
        //     preventScroll: true
        // });



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
        y = 0;
        descWord.classList.remove('blur-sm');
        // textareaID.value = '';
        // if (textareaID.style.display == 'block') textareaID.style.display = 'none';

        descWord.style.cursor = 'pointer';
        // descWord.classList.add('blur-sm');
        dateWord.classList.add('blur-sm');
        if (dateWord.style.display == 'flex') dateWord.style.display = 'none';

        main.classList.add('animate__animated', 'animate__backInDown', 'animate__faster');

        ((posts.length - 1) != 0) ? alert_info.innerHTML = posts.length - 1 : alert_info.remove();

        let i = randomInteger(0, posts.length - 1);
        console.log(i);

        window.scrollTo(0,0);

        idImg.style.display = 'none';
        console.log(posts[i].pic);

        idImg.src = `${posts[i].pic}`;
        // mainWord.innerHTML = 'wait...'
        // descWord.innerHTML = 'wait...';


        mainWord.innerHTML = posts[i].name;
        descWord.innerHTML = '<p class="leading-relaxed">' + posts[i].desc + '</p>';


        idImg.onload = () => {
            idImg.style.display = 'block';
        };

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



    }
}


btn.addEventListener('click', () => {
    if (select.value == 'Слова') {

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


descWord.addEventListener('click', (e) => {
    e.preventDefault();
    ifBlur();
});

mainWord.addEventListener('click', (e) => {
    e.preventDefault();
    mainWord.style.cursor = 'auto';
    mainWord.classList.remove('blur');
    isMainTwo = false;
});

dateWord.addEventListener('click', (e) => {
    e.preventDefault();
    dateWord.style.cursor = 'auto';
    dateWord.classList.remove('blur-sm');
});

example.addEventListener('click', () => {
    example.classList.remove('blur-sm');
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

        console.log('A = ' + a);

        if (a == 0) {
            

            let prof = descWord.children[0].children;
            for (let key in prof) {
                if (prof[key].classList == 'blur-sm') {
                    y++;
                    prof[key].classList.remove('blur-sm');
                }
            }

            console.log('Y = ' + y);
            if (y == 0) {
                a = 0;
                console.log(a);
                logger();
            } else {
                a++;
            }
            
        } else {
            a = 0;
            logger();
        }
    }
}


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
        example.style.color = '#cbd5e1';
    }
}