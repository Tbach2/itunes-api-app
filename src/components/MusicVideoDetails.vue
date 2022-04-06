<template>
  <div class="musicVideo">
    <img class="card-img-top" style="max-height: 10rem; max-width: 10rem" :src="item.artworkUrl100" alt="thumbnail"/>
    <p class="card-title"><b>Music Video:</b> {{item.collectionName}}</p>
    <p class="card-text"><b>Genre:</b> {{item.primaryGenreName}}</p>
    <p class="card-text"><b>Description:</b> {{item.shortDescription}}...</p>
    <p class="card-text"><b>Rating:</b> {{item.contentAdvisoryRating}}</p>
  </div>
</template>

<script>
import {MusicVideo} from "@/models/LibraryItems";

export default {
  name: "MusicVideoDetails",
  props: {
    item: MusicVideo
  },
}
</script>

<style scoped>

</style>