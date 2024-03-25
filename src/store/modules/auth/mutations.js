export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.didLogout = false;
    },

    registerUser(state, payload) {
        state.users.push(payload);
    },

    setUserData(state, payload) {
        state.username = payload.username;
        state.email = payload.email;
        state.password = payload.password;
    }
};