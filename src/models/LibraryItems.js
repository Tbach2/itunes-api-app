function LibraryItem(){
    // this is the parent class that all books,movies,etc extend

    // list of possible statuses (enum)
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out',
        PURCHASED: 'purchased', NOT_PURCHASED: 'not-purchased'}

    // set the default status
    this.status = STATUSES.CHECKED_IN;
    this.purchased = STATUSES.NOT_PURCHASED;

    // methods
    this.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    this.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    this.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN && this.purchased === STATUSES.NOT_PURCHASED;
    }

    //  option 1
    // media.remove = function(){
    //     return removeMethod(this);
    // }

    // option 2
    // media.remove = removeMethod;
    //
    // media.remove = function(){
    //     return removeMethod();
    // }

}

// this is a constructor function
// we use TitleCase to represent classes/prototypes/constructor functions

function Song( artworkUrl100, trackName,artistName, collectionName, primaryGenreName, trackExplicitness) {
    this.artworkUrl100 = artworkUrl100;
    this.trackName = trackName;
    this.artistName = artistName;
    this.collectionName = collectionName;
    this.primaryGenreName = primaryGenreName;
    this.trackExplicitness = trackExplicitness;
}

function Movie(artworkUrl100, trackName, artistName, primaryGenreName, shortDescription, contentAdvisoryRating) {
    this.artworkUrl100 = artworkUrl100;
    this.trackName = trackName;
    this.artistName = artistName;
    this.primaryGenreName = primaryGenreName;
    this.shortDescription = shortDescription;
    this.contentAdvisoryRating = contentAdvisoryRating;
}

function Podcast(artworkUrl600, trackName, artistName, primaryGenreName, contentAdvisoryRating) {
    this.artworkUrl600 = artworkUrl600;
    this.trackName = trackName;
    this.artistName = artistName;
    this.primaryGenreName = primaryGenreName;
    this.contentAdvisoryRating = contentAdvisoryRating;
}

function TvEpisode(artworkUrl100, trackName, collectionName, primaryGenreName, shortDescription, contentAdvisoryRating) {
    this.artworkUrl100 = artworkUrl100;
    this.trackName = trackName;
    this.collectionName = collectionName;
    this.primaryGenreName = primaryGenreName;
    this.shortDescription = shortDescription;
    this.contentAdvisoryRating = contentAdvisoryRating;
}

function MusicVideo(artworkUrl100, collectionName, primaryGenreName, shortDescription, contentAdvisoryRating) {
    this.artworkUrl100 = artworkUrl100;
    this.collectionName = collectionName;
    this.primaryGenreName = primaryGenreName;
    this.shortDescription = shortDescription;
    this.contentAdvisoryRating = contentAdvisoryRating;
}

export {LibraryItem, Song, Movie, Podcast, TvEpisode, MusicVideo};
