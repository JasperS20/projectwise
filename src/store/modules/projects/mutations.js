export default {
    createProject(state, payload) {
        state.projects.push(payload);
    },

    setProjects(state, payload) {
        state.projects = payload;
    },

    deleteProject(state, payload) {
        state.projects = state.projects.filter(project => project.name !== payload.name);
    },
};