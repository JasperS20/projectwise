export default {
    sendInvite(state, payload) {
        state.invitations.push(payload);
    }
};