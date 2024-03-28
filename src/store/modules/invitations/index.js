import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

export default {
    namespaced: true,
    state() {
        return {
            invitations: [],
            sendInvitations: [],
        }
    },
    getters,
    actions,
    mutations
};