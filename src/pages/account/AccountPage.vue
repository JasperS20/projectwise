<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="email">Edit your email</label>
            <input type="email" id="email" v-model.trim="editedEmail">
        </div>
        <custom-button>Save Changes</custom-button>
    </form>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton.vue';
export default {
    data() {
        return {
            editedEmail: '',
        }
    },
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
button {
    margin-top: 2rem;
    width: 100%;
}
</style>