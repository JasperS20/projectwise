<template>
    <header>
        <nav>
            <router-link to="/">
                <img class="logo" src="../../assets/images/logo.svg" alt="navigation-logo">
            </router-link>
            <div v-if="isAuthenticated" class="nav-links">
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
                    <li>
                        <custom-button @click="logout">Logout</custom-button>
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
import CustomButton from '../../components/ui/CustomButton.vue';
export default {
    components: {
        CustomButton
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
    },
    methods: {
        login() {
            this.$router.replace('/auth');
        },
        logout() {
            this.$store.dispatch('logout');
            this.$router.replace('/home');
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
}

header nav {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

header li {
    margin: 0 1rem;
}

header a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 600;
    transition: ease-in-out;
}

.nav-links a:hover {
    color: purple;
    transition: 0.2s ease-in-out;
    transform: translateY(20px);
}

.logo {
    transition: 0.4s ease-in-out;
}

.logo:hover {
    transform: translateX(50px);
    transition: 0.4s ease-in-out;
}


</style>