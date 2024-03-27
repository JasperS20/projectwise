<template>
    <div>
        <invitation-card class="card">
            <div class="details">
                <img>
                <h3>Username</h3>
            </div>
            <div class="actions">
                <custom-button @click="acceptInvite">Accept</custom-button>
                <custom-button mode="outline" @click="declineInvitation">Decline</custom-button>
            </div>
        </invitation-card>
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
    methods: {
        acceptInvite() {
            console.log('Accept Invitation');
        },
        declineInvitation() {
            console.log('Decline Invitation');
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