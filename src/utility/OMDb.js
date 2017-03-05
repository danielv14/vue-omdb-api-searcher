'use strict'

import axios from 'Axios'

/*
  OMDb class for handling OMDb API
 */
class OMDb {

  /*
  Constructor that accepts title to search for
   */
  constructor (title) {
    this.title = title
  }

  /*
  Search OMDb API for movie titles
  @param {string} title - the title to search for
  @return {object} The response containing movie(es)
   */
  static searchFor (title) {
    return axios.get(`http://www.omdbapi.com/?s=${title}&plot=full&type=movie`)
  }

  /*
  Get all info from OMDb APi by id
  @param {string} id - the IMDb id to query API with
  @return {object} the response containing information about the movie
   */
  static details (id) {
    return axios.get(`http://www.omdbapi.com/?i=${id}`)
  }

}

// Export Search class
export default OMDb
