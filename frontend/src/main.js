import { createApp } from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'
import router from './router'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

/*createApp(App)
  .use(vuetify)
  .mount('#app')*/

createApp(App)
    .use(router)
    .mount('#app')