<template>
    <div class="form-wrapper">
        <div>
            <img src="../../assets/images/logo.svg" alt="Logo">
        </div>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">Your email</label>
                <input type="email" id="email" v-model.trim="email">
            </div>
            <div v-if="mode !== 'login'" class="form-control">
                <label for="username">Username</label>
                <input type="text" id="username" v-model.trim="username">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password">
            </div>
            <p class="error-text" v-if="!formIsValid">Please enter a valid Email and Password!</p>
            <div class="form-actions">
                <custom-button link mode="flat" @click="switchAuthMode">{{ switchModeText }}</custom-button>
                <custom-button>{{ submitButtonText }}</custom-button>
            </div>
        </form>
    </div>
</template>

<script>
import CustomButton from '../../components/ui/CustomButton.vue';

export default {
    data() {
        return {
            email: '',
            username: '',
            password: '',
            formIsValid: true,
            mode: 'login',
        }
    },
    components: {
        CustomButton
    },
    computed: {
        switchModeText() {
            if (this.mode === 'login') {
                return "I don't have an account";
            } else {
                return "I already have an account";
            }
        },
        submitButtonText() {
            if (this.mode === 'login') {
                return "Log In";
            } else {
                return "Sign Up";
            }
        }
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }

            try {
                if (this.mode === 'login') {
                    await this.$store.dispatch('login', {
                        email: this.email,
                        password: this.password
                    });
                } else {
                    await this.$store.dispatch('signup', {
                        email: this.email,
                        username: this.username,
                        password: this.password
                    });
                }
                const redirectUrl = '/' + (this.$route.query.redirect || 'home');
                this.$router.replace(redirectUrl);
            } catch (error) {
                this.formIsValid = false;
                this.error = error.message || 'Failed to authenticate!'
            }
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup';
            } else {
                this.mode = 'login';
            }
        }
    },
}
</script>