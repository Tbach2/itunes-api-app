<template>
  <div class="card-columns col-12 col-md-12 mx-auto">
    <library-item v-for="(item, i) in library" :key="i" :item="item"></library-item>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "LibraryList",
  components: {LibraryItem},
  props: {
    library: Array
  },
  methods: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>