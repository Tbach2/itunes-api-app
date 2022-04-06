<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <i class="fa fa-music"></i>
        Itunes api - Media Search
      </a>
    </nav>
    <div class="container my-2">
      <div class="col-md-6 mx-auto">
        <label for="searchBar">Enter: </label>
        <div class="input-group">
          <form @submit.prevent="search" class="form-inline search-form">
            <input type="text" class="form-control" id="searchBar" name="search"
                   placeholder="Song, Audiobook, Movie..." v-model="searchTerm">
            <button type="submit" class="btn btn-dark" id="fetch">search</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <library-list :library="mediaCollection"></library-list>
    </div>
  </div>
</template>

<script>
import LibraryList from "@/components/LibraryList";
import LibraryCollection from "@/models/LibraryCollection";
import {Song, Movie, Podcast, TvEpisode, MusicVideo} from "@/models/LibraryItems";

const axios = require('axios').default;
export default {
  name: 'App',
  components: {
    LibraryList,
  },

  data() {
    return {
      searchTerm: '',
      mediaCollection: new LibraryCollection(),
    }
  },
  methods: {
    displayResults() {
      for (let i = 0; i < this.searchResults.length; i++) {
        if (this.searchResults[i].kind === 'song') {
          this.mediaCollection.addItem(Object.assign(new Song, this.searchResults[i]))
        }
        if (this.searchResults[i].kind === 'feature-movie') {
          this.mediaCollection.addItem(Object.assign(new Movie, this.searchResults[i]))
        }
        if (this.searchResults[i].kind === 'podcast') {
          this.mediaCollection.addItem(Object.assign(new Podcast(), this.searchResults[i]))
        }
        if (this.searchResults[i].kind === 'tv-episode' && this.searchResults[i].trackName !== 'Music Video' ) {
          this.mediaCollection.addItem(Object.assign(new TvEpisode(), this.searchResults[i]))
        }
        if (this.searchResults[i].trackName === 'Music Video' ) {
          this.mediaCollection.addItem(Object.assign(new MusicVideo(), this.searchResults[i]))
        }
      }
    },
    search() {
      // prepare and perform search
      if (this.searchTerm) {
        // clear results
        this.mediaCollection = new LibraryCollection();
        console.clear();

        // build request arguments
        let url = 'https://itunes.apple.com/search?';
        let config = {
          params: {
            term: this.searchTerm,
            limit: 40,
          },
          responseType: 'json'
        }

        // execute ajax request using promises
        axios.get(url, config)
            .then(response => {
              console.log('api response', response);

              if (response.data.results.length > 0) {
                // without a customer decorator
                this.searchResults = response.data.results
              }
            })
            .catch(error => {
              console.error('AJAX SEARCH ERROR:', error)
            })
            .finally(() => {

              // show results
              this.displayResults()
            })
      }
    },
  }
}
</script>

<style>

</style>