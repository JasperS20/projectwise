import { createApp } from 'vue'

import router from './router.js';
import App from './App.vue';
import store from './store/index.js';
import CustomButton from './components/ui/CustomButton.vue';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);

app.use(router);
app.use(store);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component(CustomButton);

app.mount('#app');
