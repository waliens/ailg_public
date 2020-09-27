import Model from './Model';
import axios from 'axios';

export default class Event extends Model {
  /** @inheritdoc */
  static get className() {
    return 'event';
  }

  async getFutureEvents() {
    let params = {start: moment().now().toISOString()};
    return await axios.get(this.uri, {params});
  }
}