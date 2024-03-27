import { createStore } from "vuex";

import ProjectsModel from './modules/projects/index.js';
import AuthModel from './modules/auth/index.js';
import Invitations from "./modules/invitations/index.js";

const store = createStore({
    modules: {
        projects: ProjectsModel,
        auth: AuthModel,
        invitations: Invitations
    }
});

export default store;