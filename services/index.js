const axios = require("axios")
const baseURL = "https://rickandmortyapi.com/api/"

class Api {
  api = axios.create({ baseURL })

  async getCharacters(id) {
    const response = await this.api.get(`/character/${id}`)
    return response
  }
}

module.exports = new Api()
