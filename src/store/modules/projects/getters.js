export default {
    projects(state) {
        return state.projects;
    },

    hasProjects(state) {
        return state.projects && state.projects.length > 0;
    },

    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        } 
        const currentTimestamp = new Date().getTime();

        return (currentTimestamp - lastFetch) / 1000 > 60;
    },
};
