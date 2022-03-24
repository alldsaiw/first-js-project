'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false,
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt('Один из последних просмотренных фильмов?', ''),
            q2 = prompt('На сколько оцените его?', '');
        
    
        if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
            personalMovieDB.movies[q1] = q2; 
        } else {
            i--;
        }
    
    }
}
rememberMyFilms();

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        let genre = prompt('Ваш любимый жанр под номером ${i}');
        personalMovieDB.genres.push(genre);
    }
}
writeYourGenres();

function detectPersonalLevel () {
    let filmsCount = personalMovieDB.count;
if (filmsCount <= 10) {console.log('Просмотрено довольно мало фильмов');} 
else if (filmsCount > 10 && filmsCount <= 30) {console.log('Вы классический зритель');}
else if (filmsCount > 30) {console.log('Вы киноман');}
else {console.log('Произошла ошибка');}
}
detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false)
    console.log(personalMovieDB);
}
showMyDB();


/* Задание на урок:
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */