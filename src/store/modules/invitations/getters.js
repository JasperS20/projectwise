export default {
    invitations(state) {
        return state.invitations;
    },

    sendInvitations(state) {
        return state.sendInvitations;
    },

    hasInvitations(state) {
        return state.invitations && state.invitations.length > 0;
    },

    hasSendInvites(state) {
        return state.sendInvitations && state.sendInvitations.length > 0;
    }
};