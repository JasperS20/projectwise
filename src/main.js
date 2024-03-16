import { createApp } from 'vue'

import router from './router.js';
import App from './App.vue';
import CustomButton from './components/layouts/CustomButton.vue';

const app = createApp(App);

app.use(router);
app.component(CustomButton);

app.mount('#app');
