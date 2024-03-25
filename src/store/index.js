import { createStore } from "vuex";

import ProjectsModel from './modules/projects/index.js';
import AuthModel from './modules/auth/index.js';

const store = createStore({
    modules: {
        projects: ProjectsModel,
        auth: AuthModel,
    }
});

export default store;