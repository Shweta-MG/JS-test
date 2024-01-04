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
    const words = movieArray[i]..split(" ").length;
    console.log(`"${movieArray[i]}" has ${words} words.`);   
}

//Log out the number of letters in each movie title.
for (let i = 0; i < movieTitles.length; i++) {
  const numberOfLetters = movieTitles[i].replace(/[^a-zA-Z]/g, "").length; // Count only letters

  console.log(`"${movieArray[i]}" has ${numberOfLetters} letters.`);
}
