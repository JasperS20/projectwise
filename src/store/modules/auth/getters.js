export default {
    userId(state) {
        return state.userId;
    },

    email(state) {
        return state.email;
    },

    password(state) {
        return state.password;
    },

    token(state) {
        return state.token;
    },

    isAuthenticated(state) {
        return !!state.token;
    },

    didAutoLogout(state) {
        return state.didAutoLogout;
    }
};