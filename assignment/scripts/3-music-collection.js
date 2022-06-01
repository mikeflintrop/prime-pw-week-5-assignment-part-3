console.log('***** Music Collection *****')

let collection = []; // - Create a variable `collection` that starts as an empty array.

function addToCollection(title, artist, yearPublished) {// - Add a function named `addToCollection`. This function should:
    // - Take in the album's `title`, `artist`, `yearPublished` as input parameters
    let newAlbum = { // - Create a new object having the above properties
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push({newAlbum}); // - Add the new object to the end of the `collection` array
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
