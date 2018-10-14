import AppDispatcher from '../dispatchers/AppDispatcher'
import { ActionTypes } from '../constants/ServerActions'

let ServerActions = {
  receiveLinks(links) {
    console.log('2. ServerActions')
    AppDispatcher.dispatch({
      actionType: ActionTypes.LINKS_RECEIVED,
      links
    })
  }
}

export default ServerActions
