export default {
    async sendInvite(context, payload) {
        console.log('send Invite');
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;

        const inviteData = {
            user: payload.user,
            isAccepted: false,
            date: payload.date
        }

        const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/invites/${userId}/sendInvites.json?auth=` + token, {
            method: 'PUT',
            body: JSON.stringify(inviteData)
        });

        context.commit('sendInvite')
    },
    async loadInvites(context, payload) {
        console.log('Loading Invites...');
        const userId = context.rootGetters.userId;

        const response = await fetch(`https://projectwise-45eca-default-rtdb.firebaseio.com/invites/${userId}/myinvites.json?auth=`);
    }
};