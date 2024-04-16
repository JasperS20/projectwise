<template>
    <header>
        <nav>
            <router-link to="/">
                <img class="logo" src="../../assets/images/logo.svg" alt="navigation-logo">
            </router-link>
            <div v-if="isAuthenticated" class="nav-links">
                <button class="hamburger-menu-button" @click="toggleMenu">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </button>
                <ul class="hamburger-menu" v-if="isMenuOpen">
                    <li>
                        <router-link to="/projects">My Projects</router-link>
                    </li>
                    <li>
                        <router-link to="/invitations">Invatations</router-link>
                    </li>
                    <li>
                        <router-link to="/account">My Account</router-link>
                    </li>
                    <li>
                        <custom-button @click="logout">Logout</custom-button>
                    </li>
                </ul>
                <ul class="default-menu">
                    <li>
                        <router-link to="/projects">My Projects</router-link>
                    </li>
                    <li>
                        <router-link to="/invitations">Invatations</router-link>
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
    data() {
        return {
            isMenuOpen: false
        }
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
        },
        toggleMenu() {
            if (this.isMenuOpen === false) {
                this.isMenuOpen = true;
            } else {
                this.isMenuOpen = false;
            }
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

.hamburger-menu-button {
    visibility: hidden;
}

.hamburger-menu {
    visibility: hidden;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background-color: var(--text-color);
    margin: 5px 0;
    transition: 0.4s;
}

@media only screen and (max-width: 660px) {
    .hamburger-menu-button {
        visibility: visible;
        border: none;
    }

    nav {
        display:  flex;
        flex-direction: column;
    }

    .hamburger-menu {
        visibility: visible;
        display: block;
        width: 100%;
        text-align: left;
    }

    .hamburger-menu li a{
        text-align: left;
    }

    .default-menu {
        display: none;
    }
}
</style>