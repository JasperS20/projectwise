import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/projectsPage.vue';
import AuthenticationPage from './pages/auth/AuthenticationPage.vue';
import ProjectBoardPage from './pages/ProjectBoardPage.vue';
import InvitationPage from './pages/InvitationPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/projects', component: ProjectsPage },
        { path: '/projects/:id', component: ProjectBoardPage },
        { path: '/invitations', component: InvitationPage },
        { path: '/auth', component: AuthenticationPage }
    ],
});

export default router;