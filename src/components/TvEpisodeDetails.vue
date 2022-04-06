<template>
  <div class="tvEpisode">
    <img class="card-img-top" style="max-height: 10rem; max-width: 10rem" :src="item.artworkUrl100" alt="thumbnail"/>
    <p class="card-text"><b>Episode:</b> {{item.trackName}}</p>
    <p class="card-title"><b>Season:</b> {{item.collectionName}}</p>
    <p class="card-text"><b>Genre:</b> {{item.primaryGenreName}}</p>
    <p class="card-text"><b>Description:</b> {{item.shortDescription}}...</p>
    <p class="card-text"><b>Rating:</b> {{item.contentAdvisoryRating}}</p>
  </div>
</template>

<script>
import {TvEpisode} from "@/models/LibraryItems";

export default {
  name: "TvEpisodeDetails",
  props: {
    item: TvEpisode
  },
}
</script>

<style scoped>

</style>