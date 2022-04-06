<template>
  <div class="movie">
    <img class="card-img-top" style="max-height: 10rem; max-width: 10rem" :src="item.artworkUrl100" alt="thumbnail"/>
    <p class="card-text"><b>Movie:</b> {{item.trackName}}</p>
    <p class="card-text"><b>Director:</b> {{item.artistName}}</p>
    <p class="card-text"><b>Genre:</b> {{item.primaryGenreName}}</p>
    <p class="card-text"><b>Description:</b> {{item.shortDescription}}...</p>
    <p class="card-text"><b>Rating:</b> {{item.contentAdvisoryRating}}</p>
  </div>
</template>

<script>
import {Movie} from "@/models/LibraryItems";

export default {
  name: "MovieDetails",
  props: {
    item: Movie
  },
}
</script>

<style scoped>

</style>