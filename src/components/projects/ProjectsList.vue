<template>
    <div>
        <ul v-if="hasProjects">
            <project-card
            v-for="project in showProjects"
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
        hasProjects() {
            return this.$store.getters['projects/hasProjects'];
        },

        showProjects() {
            return this.$store.getters['projects/projects'];
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