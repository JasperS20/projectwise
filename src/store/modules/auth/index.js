import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

export default {
    state() {
        return {
            userId: null,
            token: null,
            didAutoLogout: false,
            users: [],
            email: null,
            username: null
        }
    },
    getters,
    actions,
    mutations
}