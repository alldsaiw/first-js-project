/* Задание на урок:
4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false,
};


for (let i = 0; i < 2; i++) {
    let q1 = prompt('Один из последних просмотренных фильмов?', ''),
        q2 = prompt('На сколько оцените его?', '');
    

    if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
        personalMovieDB.movies[q1] = q2; 
    } else {
        i--;
    }

}

let filmsCount = personalMovieDB.count;
if (filmsCount <= 10) {console.log('Просмотрено довольно мало фильмов');} 
else if (filmsCount > 10 && filmsCount <= 30) {console.log('Вы классический зритель');}
else if (filmsCount > 30) {console.log('Вы киноман');}
else {console.log('Произошла ошибка');}


console.log(personalMovieDB);

