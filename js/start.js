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
    arrNull = '';

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




// let lop = 'бумага мокрое хзпиздец " " лолик "" dsadasd " "';

// // console.log(lop.split(/(\w+)\s+(\w+)/));

// lop.split(" ").join("");

// console.log(lop);

// console.log(main.getBoundingClientRect());


// console.log(btn_test);

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
        if (dateWord.style.display == 'flex') {
            dateWord.style.display = 'none';
        }
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



        if (arrWords[i].pic == '') {
            mainWord.innerHTML = arrWords[i].name;
            descWord.innerHTML = arrWords[i].desc;
            

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
            console.dir(showWords);
            if (showWords.clientHeight < 500) {
                console.log('aga');
                body.style.justifyContent = 'center';
            } else {
                body.style.justifyContent = 'flex-start';
            }
            setTimeout(() => {
                main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
                // next.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
            }, 800);
        } else {
            idImg.src = `${arrWords[i].pic}`;
            mainWord.innerHTML = 'wait...'
            descWord.innerHTML = 'wait...';
            idImg.onload = () => {
                idImg.style.display = 'block';
                console.log(i);
                console.log(arrWords[i].name);
                console.log(arrWords[i].desc);
                mainWord.innerHTML = arrWords[i].name;


                if (arrWords[i].desc.indexOf('li') !== -1) {
                    descWord.innerHTML = '<p class="font-normal">' + arrWords[i].desc + '</p>';
                    // let testPizd = arrWords[i].desc.split(' ');
                    // testPizd.forEach(function(item, i) {
                    //     console.log(item);
                    //     console.log(i);
                    // });
                    // console.log(testPizd);
                    // console.dir(testPizd);
                    // /^[А-ЯЁ][а-яё]*$/
                    // let testPizd = arrWords[i].desc.match(/^[а-яё\s-]+$/i);
                    // console.dir(testPizd);
                    // let testPizd = arrWords[i].desc.split(/^[а-яё\s-]+$/i);
                    // testPizd.forEach(element => {
                    //     console.log(element);
                    // });

                } else {

                    testArr = [];
                    testArr2 = [];

                    arrNull = arrWords[i].desc.split(' ');
                    arrNull.forEach(element => {
                        if (element.length > 1) {
                            testArr.push(element);
                            testArr2.push(element);
                            console.log(element);
                        }
                    });


                    console.log(testArr);

                    // console.log(arrNull);
                    isShifr = true;
                    // console.log(arrWords[i].desc);
                    // arrWords[i].desc.split(' ');
                    // console.log(arrWords[i].desc.filter(Boolean));

                    // console.log(arrWords[i].desc.split(' '));
                    // let descWordShifr = arrWords[i].desc.split(' ');
                    // let descWordShifr = arrWords[i].desc.split(/(\w+)\s+(\w+)/);
                    // console.log(descWordShifr);


                    let random4isloShifr = randomInteger(0, testArr.length - 1);
                    let random4isloShifr2 = randomInteger(0, testArr.length - 1);

                    // let ShifrSlova = descWordShifr[random4isloShifr] + ' ' + descWordShifr[random4isloShifr2];
                    // console.log(ShifrSlova);
                    testArr.splice(random4isloShifr, 1, '######');
                    testArr.splice(random4isloShifr2, 1, '######');


                    
                    console.log('testArr' + testArr);
                    descWord.innerHTML = '<p class="font-normal">' + testArr.join(' ') + '</p>';

                }


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
        mainWord.classList.add('underline');
        mainWord.classList.remove('fs-3');
        mainWord.classList.add('text-3xl');
        descWord.classList.remove('fs-5');
        descWord.classList.add('font-thin');
        descWord.classList.add('text-xl');
        descWord.classList.add('leading-relaxed');
        descWord.style.padding = '10px';
        picWord.remove();
        body.style.justifyContent = 'flex-start';
        words();
    } else {
        body.style.justifyContent = 'flex-start';
        logger();
    }


    // body.style.justifyContent = 'flex-start';
    btn.remove();
    select.remove();
    hello_h1.remove();


    alert_info.style.display = 'block';
    showWords.style.display = 'flex';
});


// btn_next.addEventListener('click', () => {
//     if (select.value == 'Слова') {
//         words();
//     } else {
//         logger();
//     }
// });

// console.log(descWord.classList);


// showWords.addEventListener('touchend', (e) => {
//     e.preventDefault();
//     if (descWord.className.indexOf('blur-sm') !== -1) {
//         console.log('Есть пробитие');
//     }
    
// });




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
            descWord.innerHTML = '<p class="font-normal">' + testArr2.join(' ') + '</p>';
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



inputText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        protect();
    }
});



// next.addEventListener('click', (e) => {
//     e.preventDefault();
//     protect();
// });


function protect() {
    if (select.value == 'Слова') {
        if (randomWords == 1) {
            // console.dir(mainWord);
            // console.dir(inputText);

            // inputText.value.toLowerCase();
            // mainWord.innerHTML.toLowerCase();

            let mainWordLet = mainWord.innerHTML.toLowerCase();
            let inputTextLet = inputText.value.toLowerCase();

            console.log(mainWordLet.trim());
            console.log(inputTextLet.trim());

            if (mainWordLet.trim() == inputTextLet.trim()) {
                words();
            } else {
                error.style.display = 'block';
            }
        } else {
            words();
        }
    } else {
        logger();
    }
}


function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

DarkTheme();

function DarkTheme() {
    let date = new Date();
    if (date.getHours() > 17 || date.getHours() < 6) {
        console.log('yes');
        alert_info.style.color = 'rgb(209, 213, 219)';
        body.classList.add('dark:bg-slate-900');
        hello_h1.style.color = '#fff';
        main.classList.add('dark:bg-slate-800');
        descWord.style.color = 'rgb(209 213 219)';
        select.style.backgroundColor = '#6c757d';
        select.style.color = '#fff';
        dateWord.style.color = '#fff';
    }
}