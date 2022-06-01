console.log('***** Music Collection *****')

let collection = []; // - Create a variable `collection` that starts as an empty array.

function addToCollection(title, artist, yearPublished) {// - Add a function named `addToCollection`. This function should:
    // - Take in the album's `title`, `artist`, `yearPublished` as input parameters
    let newAlbum = { // - Create a new object having the above properties
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(newAlbum); // - Add the new object to the end of the `collection` array
    return newAlbum; // - Return the newly created object
}
// - Test the `addToCollection` function:
console.log('First album added to collection:', addToCollection('Black', 'One', '1982')) 
// - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// - Console.log each album as added using the returned value.
console.log('Second album added to collection:', addToCollection('White', 'Two', '1984'))
console.log('Third album added to collection:', addToCollection('Red', 'Three', '1986'))
console.log('Fourth album added to collection:', addToCollection('Blue', 'Four', '1988'))
console.log('Fifth album added to collection:', addToCollection('Yellow', 'Five', '1990'))
console.log('Sixth album added to collection:', addToCollection('Green', 'Six', '1992'))

console.log(collection)// - After all are added, console.log the `collection` array.

// - Add a function named `showCollection`. This function should:
// - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
function showCollection(array) {
    console.log(array.length) // - Console.log the number of items in the array.
// - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].title} by ${array[i].artist}. Published in ${array[i].yearPublished}.`);
    }
}
console.log('Showing Collection:'), showCollection(collection); // - Test the `showCollection` function.

// - Add a function named `findByArtist`. This function should:
// - Take in `artist` (a string) parameter
function findByArtist(artist) {
    let findArtist = []; //   - Create an array to hold any results, empty to start
// - Loop through the `collection` and add any objects with a matching artist to the array.
    for (let i = 0; i < collection.length; i++) { 
          if (collection[i].artist === artist) {
            findArtist.push(collection[i]);
          }
        }
// - Return the array with the matching results. If no results are found, return an empty array.
  return findArtist;
}
// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, 
// as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log('Find artist, Two:', findByArtist('Two'));
console.log('Find artist, Eight', findByArtist('Eight'));
