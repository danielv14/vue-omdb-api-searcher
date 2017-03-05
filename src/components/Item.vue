<template lang="html">
  <div class="item">
    <div class="image">
        <img v-if="omdbObject.Poster != 'N/A'" :src="omdbObject.Poster" :alt="omdbObject.Title">
        <img v-else src="http://placehold.it/100x150" :alt="omdbObject.Title">
    </div>
    <div class="info">
      <h2>{{ omdbObject.Title }}</h2>
      <div class="details">
        <div class="details-primary">
          <p>Released on {{ omdbObject.Released }}</p>
          <p>{{ omdbObject.Plot }}</p>
        </div>
        <div class="details-secondary">
          <p>
            <i class="fa fa-tags" aria-hidden="true"></i> {{ omdbObject.Genre }}
            <br>
            <i class="fa fa-star" aria-hidden="true"></i> {{ omdbObject.imdbRating }}
            <br>
            <a target="_blank" :href="imdb"><i class="fa fa-imdb fa-2x" aria-hidden="true"></i></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import OMDb from '../utility/OMDb.js'

export default {
  name: 'item',

  // Set props to item that is passed to component
  props: ['item'],

  data () {
    return {
      omdbObject: ''
    }
  },

  mounted () {
    /*
    Mounted function that gets all details about either a movie or tv series
    @param {string} this.item.imdbID - The IMDb ID of the movie
     */
    OMDb.details(this.item.imdbID)
      .then((response) => {
        this.omdbObject = response.data
      })
  },

  computed: {
    /*
    Computed property to return url to OMDb item
    @return {string} URL to item on IMDb
     */
    imdb () {
      return `http://www.imdb.com/title/${this.omdbObject.imdbID}/`
    }
  }
}
</script>

<style lang="css" scoped>

h2 {
  margin-bottom: 0px;
}

a {
  color: #f3ce13;
}

.item {
  background: white;
  padding: 20px;
  margin-bottom: 40px;
  width: 55%;
  border-radius: 2px;
  display: flex;
}

img {
  height: 200px;
}

.info {
  padding-left: 10px;
}

.details {
  display: flex;
}

.details-primary, .details-secondary {
  padding: 4px;
}

.details-primary {
  flex-shrink: 3;
}

.details-secondary {
  color: gray;
}



</style>
