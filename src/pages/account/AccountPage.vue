<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="email">Edit your email</label>
            <input type="email" id="email" :value="email">
        </div>
        <div class="form-control">
            <label for="password">Edit your password</label>
            <input type="password" id="passord" :value="password">
        </div>
        <custom-button>Save Changes</custom-button>
    </form>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton.vue';
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    components: {
        CustomButton
    },
    computed: {
        email() {
            return this.$store.getters.email;
        },

        password() {
            return this.$store.getters.password;
        }
    },
    methods: {
        async submitForm() {
            try {
                await this.$store.dispatch('editUser', {
                    username: this.username,
                    email: this.email,
                    password: this.password
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