console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
// - Update the `addToCollection` function to also take an input parameter for the array of tracks.
// - Add a function named `addToCollection`. This function should:
// - Take in the album's `title`, `artist`, `yearPublished` as input parameters
// - Add an array of `tracks` to your album objects.
// - Create a new object having the above properties
let collection = []; 
function addToCollection(title, artist, yearPublished, tracks) {
    let newAlbum = { 
        title: title, 
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks,
    };
    collection.push(newAlbum); // - Add the new object to the end of the `collection` array
    return newAlbum; // - Return the newly created object
}
// - Test the `addToCollection` function:
// - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// - Each track should have a `name` and `duration`.
// - Console.log each album as added using the returned value.
console.log('First album added to collection:', addToCollection('Black', 'One', '1982', 
    [{name: 'Toys', duration: '2:55'}, {name: 'Cans', duration: '3:35'}, {name: 'Bottles', duration: '3:00'}])) 
console.log('Second album added to collection:', addToCollection('White', 'Two', '1984', 
    [{name: 'Papers', duration: '1:46'}, {name: 'Scissors', duration: '2:27'}, {name: 'Rocks', duration: '4:30'}]))
console.log('Third album added to collection:', addToCollection('Red', 'Three', '1986', 
    [{name:'Glasses', duration: '3:12'}, {name: 'Plates', duration: '3:55'}, {name: 'Cups', duration: '4:08'}]))
console.log('Fourth album added to collection:', addToCollection('Blue', 'Four', '1988', 
    [{name: 'Forks', duration: '1:57'}, {name: 'Spoons', duration: '3:33'}, {name: 'Spoons', dduration: '4:22'}]))
console.log('Fifth album added to collection:', addToCollection('Yellow', 'Five', '1990', 
    [{name: 'Cats', duration: '2:22'}, {name: 'Dogs', duration: '3:13'}, {name: 'Birdss', duration: '3:51'}]))
console.log('Sixth album added to collection:', addToCollection('Green', 'Six', '1992', 
    [{name:'Left', duration: '2:39'}, {name: 'Right', duration: '3:41'}, {name: 'Up', duration: '4:17'}]))

console.log(collection)// - After all are added, console.log the `collection` array.

// - Add a function named `showCollection`. This function should:
// - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// - Console.log the number of items in the array.
// - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
// - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
function showCollection(array) {
    console.log(array.length) 
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].title} by ${array[i].artist}. Published in ${array[i].yearPublished}.`);
        for (let track = 0; track < array[i].tracks.length; track++) {
        console.log(`${track + 1}. ${array[i].tracks[track].name}: ${array[i].tracks[track].duration}`);
        }
    }
}
console.log('Showing Collection:'), showCollection(collection); // - Test the `showCollection` function.

// - Add a function named `findByArtist`. This function should:
// - Take in `artist` (a string) parameter
// - Create an array to hold any results, empty to start
// - Loop through the `collection` and add any objects with a matching artist to the array.
// - Return the array with the matching results. If no results are found, return an empty array.
function findByArtist(artist) {
    let findArtist = []; 
    for (let i = 0; i < collection.length; i++) { 
        if (collection[i].artist === artist) {
            findArtist.push(collection[i]);
        }
    }
  return findArtist;
}
// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, 
// as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log('Find artist, Two:', findByArtist('Two'));
console.log('Find artist, Eight', findByArtist('Eight'));
console.log('Find artist, Five', findByArtist('Five'));
console.log('Find artist, Ten', findByArtist('Ten'));

// - Create a function called `search`. This function should:
// - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// - { artist: 'Ray Charles', year: 1957 }
// - The returned output from `search` should meet these requirements:
// - Update `search` to allow a `trackName` search criteria.
// - Return a new array of all items in the `collection` matching *all* of the search criteria.
// - If no results are found, return an empty array.
// - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.       
function search(object) {
    if (Object.keys(object).length === 0) {
        return collection;
    }
    let searchResults = [];
    for (let i = 0; i < collection.length; i++) {
        for (let track = 0; track < collection[i].tracks.length; track++) {
            if (collection[i].artist === object.artist && collection[i].yearPublished === object.year 
                && collection[i].tracks[track].name === object.track) {

                searchResults.push(collection[i]);
             
            }   
        }
    }
    return searchResults;
}    

console.log('Search for, Two, 1984 and Papers:', search({artist: 'Two', year: '1984', track: 'Papers'}));
console.log('Search for, Nine, 1990 and Forks:', search({artist: 'Nine', year: '1990', track: 'Forks'}));
console.log('Search for empty search object:', search({}))
