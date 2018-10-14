import AppDispatcher from '../dispatchers/AppDispatcher'
import {ActionTypes} from '../constants/ServerActions'
import { EventEmitter } from 'events'

class LinkStore extends EventEmitter {
  links = []
  constructor(props) {
    super(props)
    AppDispatcher.register( action => {
      switch(action.actionType) {
        case ActionTypes.LINKS_RECEIVED:
          this.links = action.links
          console.log('3. In Store')
          this.emit('change')
          break
        default:
          // Nothing.
      }
    })
  }

  getAll() {
    return this.links
  }

}

export default new LinkStore()
