export default {
    sendInvite(state, payload) {
        state.sendInvitations.push(payload);
    },

    setSendInvitations(state, payload) {
        state.sendInvitations = payload;
    },

    acceptSendInvitation(state, payload) {
        state.sendInvitations.isAccepted = payload.isAccepted;
    }
};