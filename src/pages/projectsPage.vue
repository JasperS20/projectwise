<template>
    <div>
        <section class="boards-section">
            <div class="section-header">
                <h2>My Boards</h2>
                <custom-button>Add a new Project</custom-button>
            </div>
            <ul class="projects-list">
                <project-card></project-card>
                <project-card></project-card>
                <project-card></project-card>
                <project-card></project-card>
                <project-card></project-card>
            </ul>
        </section>
        <br>
        <section class="boards-section">
            <h2 class="section-header">Shared Boards</h2>
            <ul class="projects-list">
                <project-card></project-card>
                <project-card></project-card>
                <project-card></project-card>
                <project-card></project-card>
            </ul>
        </section>
    </div>
</template>

<script>
import CustomButton from '../components/layouts/CustomButton.vue';
import ProjectCard from '@/components/projects/ProjectCard.vue';
export default {
    components: {
        CustomButton,
        ProjectCard
    }
}
</script>