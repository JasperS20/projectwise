<template>
    <div>
        <ul v-if="hasProjects">
            <project-card
            v-for="project in filteredProjects"
            :key="project.id"
            :id="project.id"
            :name="project.name"
            :projectImage="project.img"
            :attendees="project.attendees"
            :category="project.category"
            :date="project.created_at"
            ></project-card>
        </ul>
        <h3 v-else>There are no projects</h3>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
export default {
    components: {
        ProjectCard
    },
    computed: {
        getUserMail() {
            return this.$store.getters.email;
        },

        getUserId() {
            return this.$store.getters.userId;
        },

        hasProjects() {
            return this.$store.getters['projects/hasProjects'];
        },

        showProjects() {
            return this.$store.getters['projects/projects'];
        },

        filteredProjects() {
            return this.showProjects.filter(project => {
                const team_members = project.team_members;
                return Object.keys(team_members).some(key => team_members[key] === this.getUserId);
            })
        }
    },
    created() {
        this.loadProjects();
    },
    methods: {
        async loadProjects() {
            try {
                await this.$store.dispatch('projects/loadProjects');
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }
        }
    }
}
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}
</style>