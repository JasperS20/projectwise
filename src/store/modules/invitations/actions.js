export default {
    async sendInvite(context, payload) {
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;

        const inviteData = {
            requestedUser: payload.requestedUser,
            requestedUserId: userId,
            recipientUser: payload.recipientUser,
            isAccepted: false,
            date: payload.date
        }

        const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/invitations/sendInvites.json?auth=` + token, {
            method: 'POST',
            body: JSON.stringify(inviteData)
        });

        context.commit('sendInvite', {
            ...inviteData
        });
    },

    async loadSendInvites(context, payload) {
        const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/invitations/sendInvites.json?auth=`);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed during Fetching!');
            throw error;
        }

        const invitations = [];

        for (const key in responseData) {
            const invitation = {
                id: key,
                requestedUser: responseData[key].requestedUser,
                requestedUserId: responseData[key].requestedUserId,
                recipientUser: responseData[key].recipientUser,
                isAccepted: responseData[key].isAccepted,
                date: responseData[key].date
            }
            invitations.push(invitation);
        }

        context.commit('setSendInvitations', invitations);
    },

    async acceptInvite(context, payload) {
        const token = context.rootGetters.token;

        const invitationData = {
            isAccepted: payload.isAccepted
        }

        const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/invitations/sendInvites/${payload.invitationId}.json?auth=` + token, {
            method: 'PATCH',
            body: JSON.stringify(invitationData)
        });

        if (!response.ok) {
            console.log('ERRORRR');
        }

        context.commit('acceptSendInvitation', {
            ...invitationData,
            id: payload.invitationId
        });
    },

    async declineInvite() {

    }
};