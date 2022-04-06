<template>
  <div class="song">
    <img class="card-img-top" style="max-height: 10rem; max-width: 10rem" :src="item.artworkUrl100" alt="thumbnail"/>
    <p class="card-text"><b>Song:</b>  {{item.trackName}}</p>
    <p class="card-text"><b>Artist:</b>  {{item.artistName}}</p>
    <p class="card-title"><b>Album:</b>  {{item.collectionName}}</p>
    <p class="card-text"><b>Genre:</b>  {{item.primaryGenreName}}</p>
    <p class="card-text"><b>Rating:</b> {{item.trackExplicitness}}</p>
  </div>
</template>

<script>
import {Song} from "@/models/LibraryItems";

export default {
  name: "SongDetails",
  props: {
    item: Song
  },
}
</script>

<style scoped>

</style>