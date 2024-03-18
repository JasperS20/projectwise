const { createStore } = require("vuex");

const store = createStore({
    modules: {
        projects: projectsModule,
    }
});

export default store;