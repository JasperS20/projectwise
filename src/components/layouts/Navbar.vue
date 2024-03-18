<template>
    <header>
        <nav>
            <router-link to="/">
                <img src="../../assets/images/logo.svg" alt="navigation-logo">
            </router-link>
            <div v-if="isLoggedIn" class="nav-links">
                <ul>
                    <li>
                        <router-link to="/projects">My Projects</router-link>
                    </li>
                    <li>
                        <router-link to="/invites">Invatations</router-link>
                    </li>
                    <li>
                        <router-link to="/account">My Account</router-link>
                    </li>
                </ul>
            </div>
            <div v-else class="nav-links">
                <ul>
                    <li>
                        <custom-button @click="login">Login</custom-button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import CustomButton from '../../components/layouts/CustomButton.vue';
export default {
    components: {
        CustomButton
    },
    computed: {
        isLoggedIn() {
            return true;
        }
    },
    methods: {
        login() {
            this.$router.replace('/auth');
        }
    }
}
</script>