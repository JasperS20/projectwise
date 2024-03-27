<template>
    <div>
        <invitation-card class="card">
            <div class="details">
                <img>
                <h3>User1234</h3>
            </div>
            <div class="actions">
                <h3>Pending...</h3>
            </div>
        </invitation-card>
    </div>
</template>

<script>
import InvitationCard from './InvitationCard.vue';
export default {
    components: {
        InvitationCard
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