<template>
    <div class="project-grid">
        <div class="project-grid-item">
            <scrum-list title="TODO">
                <task-card v-for="task in todoTasks" v-if="todoTasks"
                    :key="task.id"
                    :id="task.id"
                    :name="task.name"
                    :status="'todo'"
                    :priority="task.priority"
                    :description="task.description"
                ></task-card>
                <add-task @click="openModal"></add-task>
            </scrum-list>
        </div>
        <div class="project-grid-item">
            <scrum-list title="In Progress">
                <task-card v-for="task in inProgressTasks" v-if="inProgressTasks"
                    :key="task.id"
                    :id="task.id"
                    :name="task.name"
                    :status="'progress'"
                    :priority="task.priority"
                    :description="task.description"
                ></task-card>
            </scrum-list>
        </div>
        <div class="project-grid-item">
            <scrum-list title="Done">
                <task-card v-for="task in doneTasks" v-if="doneTasks"
                    :key="task.id"
                    :id="task.id"
                    :name="task.name"
                    :status="'done'"
                    :priority="task.priority"
                    :description="task.description"
                ></task-card>
            </scrum-list>
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
            const project = this.loadProjects.find(project => project.id === this.id);
            if (project.tasks) {
                return project.tasks.todo;
            }
        },

        inProgressTasks() {
            const project = this.loadProjects.find(project => project.id === this.id);

            if (project.tasks) {
                return project.tasks.progress;
            }
        },

        doneTasks() {
            const project = this.loadProjects.find(project => project.id === this.id);

            if (project.tasks) {
                return project.tasks.done;
            }
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        openModal() {
            this.modalOpen = true;
        },

        closeModal() {
            this.modalOpen = false;
        },

        async getProjects() {
            try {
                await this.$store.dispatch('projects/loadProjects');
            } catch (error) {
                this.error || 'Failed during loading projects';
            }
        }
    },

}
</script>

<style scoped>
.project-grid {
    position: absolute;
    width: 90%;
    display: grid;
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
    height: 100%;
    margin-bottom: 2rem;
    background-color: var(--on-surface);
}

@media only screen and (max-width: 1800px) {
    .project-grid {
        grid-template-columns: 1fr 1fr;
        row-gap: 1rem;
    }
}

@media only screen and (max-width: 1180px) {
    .project-grid {
        grid-template-columns: 1fr;
    }
}
</style>