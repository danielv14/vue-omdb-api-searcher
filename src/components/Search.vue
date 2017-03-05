<template>
  <div class="search">
    <h1>Search for Movies or Series</h1>
    <div class="input-wrapper">
      <input type="text"
        v-model="title"
        @keyup="search()"
        name=""
        value=""
        placeholder="Search for...">
    </div>

    <div class="radio-buttons">
      <input @click="search()" type="radio" id="movie" value="movie" v-model="type">
      <label for="movie">Movies</label>
      <input @click="search()" type="radio" id="series" value="series" v-model="type">
      <label for="series">Series</label>
    </div>

    <div class="items">
      <item
        v-for="item in items"
        :key="item.imdbID"
        :item="item">
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
      items: '', // object containing json response from OMDb API
      title: '', // v-model for title to search for
      type: 'movie'
    }
  },

  methods: {

    /*
    Search the OMDb API and set vue data object
    @param {string} title - The movie title to search for
     */
    search () {
      // Prevent searching on just 2 characters
      if (this.title.length > 2) {
        OMDb.searchFor(this.title, this.type)
          .then((response) => {
            this.items = response.data.Search
          })
      } else { // else clear search result
        this.items = ''
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

.radio-buttons {
  width: 45%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
}

input[type=radio] {
  font-size: 1rem;
  display: inline-block;
}

label {
  color: white;
}

input[type=text] {
  width: 45%;
  padding: 15px;
  font-size: 1rem;
  border: none;
  font-style: italic;
  background-color: rgba(0,0,0,0.1);
  color: white;
}

input[type=text]:focus {
  outline: none !important;
}

input[type=text]::-webkit-input-placeholder {
  font-style: italic;
  color:white;
}
input[type=text]::-moz-placeholder          {
  font-style: italic;
  color:white;
}
input[type=text]:-moz-placeholder           {
  font-style: italic;
  color:white;
}
input[type=text]:-ms-input-placeholder      {
  font-style: italic;
  color:white;
}

</style>
