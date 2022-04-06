<template>
  <div class="podcast">
    <img class="card-img-top" style="max-height: 10rem; max-width: 10rem" :src="item.artworkUrl600" alt="thumbnail"/>
    <p class="card-text"><b>Podcast:</b> {{item.trackName}}</p>
    <p class="card-text"><b>Creator:</b> {{item.artistName}}</p>
    <p class="card-text"><b>Genre:</b> {{item.primaryGenreName}}</p>
    <p class="card-text"><b>Rating:</b> {{item.contentAdvisoryRating}}</p>
  </div>
</template>

<script>
import {Podcast} from "@/models/LibraryItems";

export default {
  name: "PodcastDetails",
  props: {
    item: Podcast
  },
}
</script>

<style scoped>

</style>