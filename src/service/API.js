import axios from 'axios'
import ServerActions from '../actions/ServerActions'

export default {
  async fetchLinks() {
    let res = await axios.post('/graphql', {
      query: `{
        links {
          url,
          title
        }
      }`
    })

    let links = res.data.data.links
    console.log('1. In API', links)
    ServerActions.receiveLinks(links)
  }
}
