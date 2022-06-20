import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);
/* app.config.globalProperties.nombreApi ='http://localhost/valoopApi/';
app.config.globalProperties.rutaDocs ='D:/Archivos/Programado/bebes-valoop2/public/images/productos/'; */

app.config.globalProperties.nombreApi ='https://valoop.infocatsoluciones.com/api/';
app.config.globalProperties.rutaDocs ='https://valoop.infocatsoluciones.com/images/productos/';

app.use(store).use(router).mount('#app')