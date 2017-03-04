<template>
  <div class="search">

    <input type="text"
      v-model="title"
      @keyup="search(title)"
      name=""
      value=""
      placeholder="Search for...">

    <ul>
      <item
        v-for="movie in movies"
        :key="movie.imdbID"
        :item="movie">
      </item>
    </ul>
  </div>
</template>

<script>

import OMDb from '../utility/OMDb.js'
import Item from './Item'

export default {
  name: 'search',

  components: {
    Item
  },

  data () {
    return {
      movies: '', // object containing json response from OMDb API
      title: '' // v-model for title to search for
    }
  },

  methods: {

    /*
    Search the OMDb API and set vue data object
    @param {string} title - The movie title to search for
     */
    search (title) {
      // Prevent searching on just 2 characters
      if (title.length > 2) {
        OMDb.searchFor(title)
          .then((response) => {
            this.movies = response.data.Search
          })
      } else { // else clear search result
        this.movies = ''
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
  width: 45%;
  padding: 15px;
  font-size: 1rem;
}

input:focus {

}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
