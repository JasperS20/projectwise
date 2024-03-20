import { createStore } from "vuex";

import projectsModel from './modules/projects/index.js';
import AuthModel from './modules/auth/index.js';

const store = createStore({
    modules: {
        projects: projectsModel,
        auth: AuthModel,
    }
});

export default store;