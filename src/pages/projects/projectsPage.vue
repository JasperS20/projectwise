<template>
    <div class="wrapper">
        <section class="boards-section">
            <div class="section-header">
                <h2>My Boards</h2>
                <custom-button v-if="!modalOpen" @click="openModal">Add a new Project</custom-button>
            </div>
            <div class="projects-list">
                <projects-list></projects-list>
            </div>
        </section>
        <project-registration v-if="modalOpen" :is-open="modalOpen" @close="closeModal"></project-registration>
    </div>
</template>

<script>
import CustomButton from '../../components/ui/CustomButton.vue';
import ProjectsList from '@/components/projects/ProjectsList.vue';
import ProjectRegistration from '@/components/projects/ProjectRegistration.vue';
export default {
    components: {
        CustomButton,
        ProjectsList,
        ProjectRegistration
    },
    data() {
        return {
            modalOpen: false
        };
    },
    methods: {
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
.boards-section {
    position: absolute;
    width: 90vw;
    margin: 2rem 0;
}

.section-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}
</style>