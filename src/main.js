import { createApp } from 'vue'

import router from './router.js';
import App from './App.vue';
import store from './store/index.js';
import CustomButton from './components/ui/CustomButton.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component(CustomButton);

app.mount('#app');
