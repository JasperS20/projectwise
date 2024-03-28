<template>
    <div>
        <ul>
            <invitation-card v-for="invitation in filteredInvites" :key="invitation.id" class="card">
                <div class="details">
                    <h3>{{ invitation.requestedUser }}</h3>
                </div>
                <div class="actions">
                    <custom-button @click="acceptInvite(invitation.id)">Accept</custom-button>
                    <custom-button mode="outline" @click="declineInvitation">Decline</custom-button>
                </div>
            </invitation-card>
        </ul>
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
        async acceptInvite(invitationId) {
            console.log('Accept Invitation', invitationId);
            await this.$store.dispatch('invitations/acceptInvite', {
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
</style>