<template>
    <div class="form-wrapper">
        <div>
            <img src="../../assets/images/logo.svg" alt="Logo">
        </div>
        <form @submit.prevent="">
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