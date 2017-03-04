<template>
  <div class="search">
    <h1>Search for movies</h1>
    <div class="input-wrapper">
      <input type="text"
        v-model="title"
        @keyup="search(title)"
        name=""
        value=""
        placeholder="Search for...">
    </div>

    <div class="items">
      <item
        v-for="movie in movies"
        :key="movie.imdbID"
        :item="movie">
      </item>
    </div>

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

<style>

.search h1 {
  text-align: center;
  color: white;
}

.items {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

div.input-wrapper {
  text-align: center;
  margin-bottom: 50px;
}

input {
  width: 45%;
  padding: 15px;
  font-size: 1rem;
  border: none;
  font-style: italic;
  background-color: rgba(0,0,0,0.1);
  color: white;
}

input:focus {
  outline: none !important;
}

input::-webkit-input-placeholder {
  font-style: italic;
  color:white;
}
input::-moz-placeholder          {
  font-style: italic;
  color:white;
}
input:-moz-placeholder           {
  font-style: italic;
  color:white;
}
input:-ms-input-placeholder      {
  font-style: italic;
  color:white;
}


</style>
