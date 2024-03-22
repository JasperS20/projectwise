import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
    namespaced: true,
    state() {
        return {
            projectId: null,
            projects: [
                {
                    id: '1',
                    name: 'First Project',
                    projectImage: 'img',
                    attendees: '9',
                    category: 'School',
                    date: '18/03/2024',
                },
                {
                    id: '2',
                    name: 'Second Project',
                    projectImage: 'img',
                    attendees: '4',
                    category: 'Work',
                    date: '02/03/2024',
                }
            ]
        }
    },
    mutations,
    actions,
    getters
};