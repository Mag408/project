const numberOFfilms = +prompt("сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count : numberOFfilms,
    movies :{},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt("один из последних фильмов"),
      b = prompt("оценка"), 
      c = prompt("один из последних фильмов"),
      d = prompt("оценка");

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
 
console.log(personalMovieDB);