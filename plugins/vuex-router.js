import { sync } from 'vuex-router-sync'

export default ({ app }) => {
  sync(app.store, app.router)
}