<template>
    <header>
        <nav>
            <router-link to="/">
                <img src="../../assets/images/logo.svg" alt="navigation-logo">
            </router-link>
            <div class="nav-links">
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
        </nav>
    </header>
</template>