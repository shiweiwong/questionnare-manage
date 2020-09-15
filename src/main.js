import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import router from './router.js'
import axios from "axios"
import apis from "@/api/apis.js"
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'


Vue.use(Viewer)
Vue.prototype.$api = apis
Vue.prototype.$axios = axios
Vue.use(ViewUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
