<template>
  <div class="card" :class="{'border-dark': item.isAvailable()}">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button v-if="item.isAvailable()" @click="item.checkOut()">Check Out</button>
      <button v-else @click="item.checkIn()">Check In</button>
      <!--                <button v-if="removeMethod" @click="removeMethod(item);">Remove</button>-->
      <!--                <button @click="$emit('remove-me', item);">Remove</button>-->
      <button @click="item.remove()">Remove</button>
    </div>
  </div>
</template>

<script>
import SongDetails from "@/components/SongDetails";
import MovieDetails from "@/components/MovieDetails";
import PodcastDetails from "@/components/PodcastDetails";
import TvEpisodeDetails from "@/components/TvEpisodeDetails";
import MusicVideoDetails from "@/components/MusicVideoDetails";

export default {
  name: "LibraryItem",
  components: {SongDetails, MovieDetails, PodcastDetails, TvEpisodeDetails, MusicVideoDetails},
  props: {
    item: {
      type: Object,
      required: true,
    },
    removeMethod: {
      type: Function,
    }
  },
  computed: {
    typeOfItem() {
      return this.item.constructor.name + 'Details';
    }
  },
}
</script>

<style scoped>

</style>
