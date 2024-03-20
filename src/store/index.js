import { createStore } from "vuex";

import projectsModel from './modules/projects/index.js';

const store = createStore({
    modules: {
        projects: projectsModel,
    }
});

export default store;