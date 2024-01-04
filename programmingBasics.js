//Create an array of the movie titles
const movieArray = ["The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "12 Angry Men",
    "The Lord Of The Rings",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "Forrest Gump"];


 //Log out each movie title   

for (let i = 0; i < movieArray.length; i++) {
    console.log(movieArray[i]);   
}

//Log out the number of words in each movie title.
for (let i = 0; i < movieArray.length; i++) {
    const movieTitle = movieArray[i];
    const words = movieTitle.split(" ").length;
    console.log(`"${movieTitle}" has ${words} words.`);   
}

//Log out the number of letters in each movie title.
for (let i = 0; i < movieArray.length; i++) {
    const movieTitle = movieArray[i];
  const numberOfLetters = movieTitle.replace(/[^a-zA-Z]/g, "").length; // Count only letters

  console.log(`"${movieTitle}" has ${numberOfLetters} letters.`);
}
