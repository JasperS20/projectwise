<template>
    <div>
        <ul v-if="hasInvites">
            <invitation-card class="card" v-for="invitation in filteredInvitations">
                <div class="details">
                    <h3>{{ invitation.recipientUser }}</h3>
                </div>
                <div class="actions">
                    <h3 class="pending" v-if="!invitation.isAccepted">Pending...</h3>
                    <h3 class="accepted" v-else>Accepted</h3>
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
            const invites = this.allInvites.filter(invitation => invitation.requestedUserId === this.getUserId);
            console.log(invites);
            return invites;
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
    gap: 4rem;
    align-items: center;
}

.actions h3 {
    margin-left: 1rem;
}

.requested-user {
    background-color: var(--primary-color);
    padding: 10px;
    color: white;
    border-radius: 10px;
}

.pending {
    background-color: orange;
    border-radius: 20px;
    padding: 1rem;
}

.accepted {
    padding: 1rem;
    background-color: var(--succes-color);
    border-radius: 20px;
}

@media only screen and (max-width: 630px) {
    .card {
        flex-direction: column;
    }
}
</style>