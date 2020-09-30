import Model from './Model'
import axios from 'axios'
import moment from 'moment'

export default class Event extends Model {
  /** @inheritdoc */
  static get className () {
    return 'event'
  }

  async getFutureEvents () {
    const params = { start: moment().toISOString() }
    return await axios.get(this.uri, { params })
  }
}
