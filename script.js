'use strict';

let personalMovieDB = {
    count: function() {
        let numberOfFilms;
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = numberOfFilms;
    },
    movies: function() {
        for (let i = 0; i < 2; i++) {
            let q1 = prompt('Один из последних просмотренных фильмов?', ''),
                q2 = prompt('На сколько оцените его?', '');

            if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
                personalMovieDB.movies[q1] = q2;
            } else {
                i--;
            }
        }
    },
    actors: {},
   
    persLevel: function() {
        let filmsCount = personalMovieDB.count;
        if (filmsCount <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (filmsCount > 10 && filmsCount <= 30) {
            console.log('Вы классический зритель');
        } else if (filmsCount > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    privat: false,
    showMyDB: function() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
        function toggleVisibleMyDB() {
            if (personalMovieDB.privat === 'true') {
                personalMovieDB.privat = 'false';
            } else {
            personalMovieDB.privat = 'true';
            }
        }
    },
   
    genres: [],
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre != null || genre != '') {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            }
        }
        this.genres.forEach(function(item, i, [genres]) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
    },
};

personalMovieDB.count();
personalMovieDB.movies();
personalMovieDB.showMyDB();
personalMovieDB.persLevel();
personalMovieDB.writeYourGenres();