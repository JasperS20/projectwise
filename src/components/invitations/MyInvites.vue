<template>
    <div>
        <ul v-if="hasInvites">
            <invitation-card v-for="invitation in filteredInvites" :key="invitation.id" class="card">
                <div class="details">
                    <h3>{{ invitation.requestedUser }}</h3>
                </div>
                <div class="actions">
                    <custom-button @click="acceptInvite(invitation.id, invitation.projectId)">Accept</custom-button>
                    <custom-button mode="outline" @click="declineInvitation">Decline</custom-button>
                </div>
            </invitation-card>
        </ul>
        <p v-else>You are not invited for any project</p>
    </div>
</template>

<script>
import InvitationCard from './InvitationCard.vue';
import CustomButton from '../ui/CustomButton.vue';
export default {
    components: {
        InvitationCard,
        CustomButton
    },
    computed: {
        getUserEmail() {
            return this.$store.getters.email;
        },

        hasInvites() {
            return this.$store.getters['invitations/hasSendInvites'];
        },

        allInvites() {
            return this.$store.getters['invitations/sendInvitations'];
        },

        filteredInvites() {
            const filteredInvites = this.allInvites.filter(invitation => invitation.recipientUser === this.getUserEmail);
            console.log(filteredInvites);
            return filteredInvites;
        }
    },
    created() {
        this.loadInvites();
    },
    methods: {
        async acceptInvite(invitationId, projectId) {
            console.log('Accept Invitation', invitationId);
            await this.$store.dispatch('invitations/acceptInvite', {
                projectId: projectId,
                invitationId: invitationId,
                isAccepted: true
            });
        },  
        declineInvitation() {
            console.log('Decline Invitation');
        },
        async loadInvites() {
            await this.$store.dispatch('invitations/loadSendInvites');
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.details,
.actions {
    display: flex;
    margin: 1rem;
}

.actions h3 {
    margin-left: 1rem;
}

@media only screen and (max-width: 630px) {
    .card {
        flex-direction: column;
    }
}
</style>