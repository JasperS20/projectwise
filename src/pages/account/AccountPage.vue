<template>
    <div class="account-info">
        <div class="form-control">
            <label for="email">My email</label>
            <input type="email" id="email" :value="email" readonly>
        </div>
        <custom-button class="button" mode="outline">Delete Account</custom-button>
    </div>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton.vue';
export default {
    components: {
        CustomButton
    },
    computed: {
        email() {
            return this.$store.getters.email;
        },
    },
    methods: {
        async submitForm() {
            try {
                await this.$store.dispatch('editUserEmail', {
                    email: this.editedEmail,
                })
            } catch (error) {
                this.error = error.message || 'Failed to authenticate!';
            }
        }
    }
}
</script>

<style scoped>
.account-info {
    text-align: center;
}

.form-control {
    width: max-content;
    margin: auto;
}

.button {
    margin-top: 2rem;
    width: 400px;
}
</style>