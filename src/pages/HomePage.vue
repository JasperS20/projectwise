<template>
    <section>
        <div class="grid">
            <div class="grid-item projects">
                <router-link to="/projects">
                    <img src="../assets/images/home-projectboard.jpg" alt="project board image">
                </router-link>
            </div>
            <div class="grid-item invitations">
                <router-link to="/invitations">
                    <img src="../assets/images/home-envelope.jpg" alt="envelope image">
                </router-link>
            </div>
            <div class="grid-item account">
                <router-link to="/account">
                    <img src="../assets/images/home-cardhanger.jpg" alt="cardhanger image">
                </router-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media only screen and (max-width: 630px) {
    .grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

    .projects,
    .invitations,
    .account {
        grid-area: auto;
    }
}
</style>