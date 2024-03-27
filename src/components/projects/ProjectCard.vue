<template>
    <a class="card-wrapper" :href="projectLink">
        <div class="card" >
            <section class="card-top">
                <img src="../../assets/images/home-projectboard.jpg">
            </section>
            <section class="card-bottom">
                <div>
                    <h4>{{ name }}</h4>
                </div>
                <div class="card-details">
                    <h5>{{ attendees }} Attendees</h5>
                    <h5>{{ category }}</h5>
                    <h5>{{ date }}</h5>
                </div>
            </section>
        </div>
    </a>
</template>

<script>
export default {
    props: ['id', 'name', 'projectImage', 'attendees', 'category', 'date'],
    computed: {
        projectLink() {
            const redirectUrl = this.$route.path + '/' + this.id;
            this.$router.replace(redirectUrl);
        }
    },
}
</script>

<style scoped>
.card-wrapper {
    text-decoration: none;
    color: var(--text-color);
}
.card {
    background-color: var(--on-surface);
    width: fit-content;
    border-radius: 10px;
}

img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 200px;
}

.card-bottom {
    padding: 0.2rem 1rem 1rem 1rem;
    text-align: center;
}

.card-details {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 2rem;
    align-items: center;
}
</style>