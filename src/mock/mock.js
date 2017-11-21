import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// import Login from '../pages/login/mock/login'

export default {
  /**
   * mock bootstrap
   */
  bootstrap () {
    let mock = new MockAdapter(axios)
    // SysManage.bootstrap(mock)
  }
}
