<template>
    <div class="project-grid">
        <div class="project-grid-item">
            <scrum-list title="TODO">
                <task-card v-for="task in todoTasks"
                    :key="task.id"
                    :name="task.name"
                    :priority="task.priority"
                    :description="task.description"
                ></task-card>
                <add-task @click="openModal"></add-task>
            </scrum-list>
        </div>
        <div class="project-grid-item">
            <scrum-list title="In Progress"></scrum-list>
        </div>
        <div class="project-grid-item">
            <scrum-list title="Done"></scrum-list>
        </div>
    </div>
    <task-registration v-if="modalOpen" :is-open="modalOpen" @close="closeModal"></task-registration>
</template>

<script>
import ScrumList from '../../components/projectboard/ScrumList.vue';
import AddTask from '../../components/projectboard/AddTask.vue';
import TaskRegistration from '../../components/projectboard/TaskRegistration.vue';
import TaskCard from '../../components/projectboard/TaskCard.vue';
export default {
    components: {
        ScrumList,
        AddTask,
        TaskRegistration,
        TaskCard
    },
    data() {
        return {
            id: this.$route.params.id,
            modalOpen: false
        };
    },
    computed: {
        loadProjects() {
            return this.$store.getters['projects/projects'];
        },

        todoTasks() {
            const todoTasks = this.loadProjects.filter(project => project.id === this.id);
            console.log(todoTasks[0].tasks['todo']);  
            return Object.keys(tasks).some(key => team_members[key] === this.getUserId);
        }
    },
    created() {
        this.$store.dispatch('projects/loadProjects');
    },
    methods: {
        openModal() {
            this.modalOpen = true;
        },

        closeModal() {
            this.modalOpen = false;
        },
    },

}
</script>

<style scoped>
.project-grid {
    position: absolute;
    display: grid;
    width: 90%;
    margin: auto;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
}

.project-grid-item {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border: 1px solid ;
    border-radius: 5px;
    height: 80vh;
    background-color: var(--on-surface);
}
</style>