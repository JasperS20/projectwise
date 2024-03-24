export default {
    createProject(state, payload) {
        state.projects.push(payload);
    },

    setProjects(state, payload) {
        state.projects = payload;
    },
};