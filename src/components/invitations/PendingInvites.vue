<template>
    <div>
        <ul v-if="hasInvites">
            <invitation-card class="card" v-for="invitation in filteredInvitations">
                <div class="details">
                    <h3>{{ invitation.recipientUser }}</h3>
                </div>
                <div class="actions">
                    <h3 v-if="!invitation.isAccepted">Pending...</h3>
                    <h3 v-else>Accepted</h3>
                </div>
            </invitation-card>
        </ul>
        <p v-else>No Invites send</p>
    </div>
</template>

<script>
import InvitationCard from './InvitationCard.vue';
export default {
    components: {
        InvitationCard
    },
    computed: {
        getUserId() {
            return this.$store.getters.userId;
        },

        hasInvites() {
            return this.$store.getters['invitations/hasSendInvites'];
        },

        allInvites() {
            return this.$store.getters['invitations/sendInvitations'];
        },

        filteredInvitations() {
            return this.allInvites.filter(invitation => invitation.requestedUserId === this.getUserId);
        }
    },
    created() {
        this.loadInvites();
    },
    methods: {
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