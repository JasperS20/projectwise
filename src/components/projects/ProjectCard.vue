<template>
    <div>
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
                <div class="action-buttons">
                    <custom-button link :to="projectLink">View</custom-button>
                    <custom-button mode="outline" @click="openModal">Invite</custom-button>
                    <custom-button mode="outline" @click="deleteProject">Delete</custom-button>
                </div>
            </section>
        </div>
        <add-users v-if="modalOpen" :projectId="this.id" :is-open="modalOpen" @close="closeModal"></add-users>
    </div>
</template>

<script>
import CustomButton from '../ui/CustomButton.vue';
import AddUsers from './AddUsers.vue';
export default {
    components: {
        CustomButton,
        AddUsers
    },
    props: {
        id: Number,
        name: String,
        projectImage: String,
        attendees: Number,
        category: String,
        date: String,
    },
    data() {
        return {
            modalOpen: false
        }
    },
    computed: {
        projectLink() {
            return this.$route.path + '/' + this.id;
        }
    },
    methods: {
        async deleteProject() {
            await this.$store.dispatch('projects/deleteProject', {
                id: this.id
            });
        },

        openModal() {
            this.modalOpen = true;
        },

        closeModal() {
            this.modalOpen = false;
        }
    }
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
    width: 100%;
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

.action-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>