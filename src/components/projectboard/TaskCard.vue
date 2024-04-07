<template>
    <div class="card">
        <div class="card-top">
            <p class="title">{{ name }}</p>
            <p class="priority">{{ priority }}</p>
        </div>
        <div class="card-bottom">
            <p>{{ description }}</p>
        </div>
        <div class="task-options">
            <custom-button @click="submitForm">Delete</custom-button>
            <form ref="form" @submit.prevent="submitForm">
                <select class="input" name="status" id="status" v-model="selectedStatus" @change="submitFormOnChange">
                    <option value="todo">Todo</option>
                    <option value="progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </form>
        </div>
    </div>
</template>

<script>
import CustomButton from '../ui/CustomButton.vue';
export default {
    components: {
        CustomButton
    },
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true
        },
        priority: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            projectId: this.$route.params.id,
            selectedStatus: this.status,
        }
    },
    methods: {
        async submitForm() {
            await this.$store.dispatch('projects/editTask', {
                projectId: this.projectId,
                taskId: this.id,
                status: this.selectedStatus,
                previousStatus: this.status,
                name: this.name,
                description: this.description,
                priority: this.priority
            });
        },

        submitFormOnChange() {
            this.submitForm();
        }
    }
}
</script>


<style scoped>
.card {
    width: 90%;
    margin: auto;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    background-color: white;
    margin-top: 10px;
}

.card-top {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.title {
    font-weight: 600;
}

.card-bottom {
    padding: 10px;
    text-align: left;
}

.task-options {
    display: flex;
    justify-content: space-between;
    margin: 10px;
}

.task-options form {
    text-align: right;
}

.input,
option {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid var(--primary-color);
}
</style>