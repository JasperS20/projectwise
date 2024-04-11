<template>
    <div class="grid">
        <div class="grid-item invitations-menu">
            <invitation-card class="invitation-card" :class="{ 'active': showMyInvites }" @click="myInvites">My Invites</invitation-card>
            <invitation-card class="invitation-card" :class="{ 'active': !showMyInvites }" @click="pendingInvites">Pending Invites</invitation-card>
        </div>
        <div class="grid-item invitations-request">
            <my-invites v-if="showMyInvites"></my-invites>
            <pending-invites v-else></pending-invites>
        </div>
    </div>
</template>

<script>
import InvitationCard from '../../components/invitations/InvitationCard.vue';
import MyInvites from '../../components/invitations/MyInvites.vue';
import PendingInvites from '../../components/invitations/PendingInvites.vue';
export default {
    components: {
        InvitationCard,
        MyInvites,
        PendingInvites
    },
    data() {
        return {
            showMyInvites: true
        }
    },
    methods: {
        myInvites() {
            this.showMyInvites = true;
        },
        pendingInvites() {
            this.showMyInvites = false;
        }
    }
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 2rem;
}

.grid-item {
    padding: 1rem;
}

.invitations-menu {
    grid-area: 1 / 1 / 6 / 4;
}

.invitations-request {
    grid-area: 1 / 4 / 6 / 13;
}

.invitation-card {
    cursor: pointer;
}

.invitation-card.active {
    background-color: #edd2ff;
}
</style>