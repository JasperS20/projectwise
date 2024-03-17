import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/projectsPage.vue';
import AuthenticationPage from './pages/auth/AuthenticationPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/projects', component: ProjectsPage },
        { path: '/auth', component: AuthenticationPage }
    ],
});

export default router;