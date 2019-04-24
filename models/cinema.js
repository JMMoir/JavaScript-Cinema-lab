const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.list = function(){
   let list = [];
   for( let film of this.films){
     list.push(film.title)
   }
  return list;
};

Cinema.prototype.findByTitle = function(title){
  const result = this.films.filter((film)=>{
    return film.title === title;
  })
  return result;
}

Cinema.prototype.findByGenre = function(genre){
  const result = this.films.filter((film) => {
    return film.genre === genre;
  })
  return result;
};

Cinema.prototype.findByYear = function(year){
  const result = this.films.some((film) => {
    return film.year === year;
  })
  return result;
};

Cinema.prototype.findByYear = function(year){
  const result = this.films.some((film) => {
    return film.year === year;
  })
  return result;
};

Cinema.prototype.lengthGreaterThan = function(length){
  const result = this.films.some((film) => {
    return film.length > length;
  })
  return result;
};

Cinema.prototype.totalFilmLength = function(){
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0)
  return result;
};

Cinema.prototype.filmsByProperty = function(property, value){
  const result = this.films.filter((film) => {
    return film[property] === value;
  });
  return result;
};

module.exports = Cinema;
