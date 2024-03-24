<template>
    <div class="grid">
        <div class="grid-item invitations-menu">
            <invitation-card>My Invites</invitation-card>
            <invitation-card>Pending Invites</invitation-card>
        </div>
        <div class="grid-item invitations-request">
            <invitation-list></invitation-list>
        </div>
    </div>
</template>

<script>
import InvitationCard from '../components/invitations/InvitationCard.vue';
import InvitationList from '../components/invitations/InvitationList.vue';
export default {
    components: {
        InvitationCard,
        InvitationList
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
</style>