<template>
    <div>
        <ul v-if="hasProjects">
            <project-card
            v-for="project in loadProjects"
            :key="project.id"
            :id="project.id"
            :name="project.name"
            :projectImage="project.img"
            :attendees="project.attendees"
            :category="project.category"
            :date="project.date"
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
        loadProjects() {
            return this.$store.getters['projects/projects'];
        },

        hasProjects() {
            return this.$store.getters['projects/hasProjects'];
        }
    },
}
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}
</style>