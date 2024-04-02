<template>
    <div class="wrapper">
        <custom-modal class="modal">
            <h1>Add a new task!</h1>
            <form @submit.prevent="addTask">
                <div class="form-control">
                    <label for="name">Task Name</label>
                    <input class="input" type="text" id="name" v-model.trim="name"/>
                </div>
                <div class="form-control">
                    <label for="description">Short Task Description</label>
                    <textarea id="description" name="description" rows="5" v-model.trim="description"></textarea>
                </div>
                <div class="form-control">
                    <label for="priority">Prioriteit</label>
                    <select class="input" id="priority" v-model.trim="priority">
                        <option value="low">Laag</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="status">Status</label>
                    <select class="input" id="status" v-model.trim="status">
                        <option value="todo">Todo</option>
                        <option value="progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <custom-button class="submit-btn">Create new task</custom-button>
            </form>
            <div class="btn-wrapper">
                <custom-button class="close-btn" @click="closeModal">Close</custom-button>
            </div>
        </custom-modal>
    </div>
</template>

<script>
import CustomModal from '../ui/CustomModal.vue';
import CustomButton from '../ui/CustomButton.vue';
export default {
    data() {
        return {
            id: this.$route.params.id,
            name: '',
            description: '',
            priority: '',
            status: '',
            formIsValid: true
        }
    },
    components: {
        CustomModal,
        CustomButton
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },

        async addTask() {
            try {
                await this.$store.dispatch('projects/addTask', {
                    projectId: this.id,
                    name: this.name,
                    description: this.description,
                    priority: this.priority,
                    status: this.status
                });
                this.closeModal();
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
.modal {
    position: relative;
    border: none;
    border-radius: 10px;
    padding: 2rem 4rem;
    width: 40vw;
    height: fit-content;
    border: 2px solid var(--primary-color);
    background-color: var(--on-surface);
    margin: 0 auto 2rem auto;
}

.modal h1 {
    text-align: center;
    color: var(--text-color);
}

.input {
    border: 1px solid var(--primary-color);
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    background-color: white;
}

textarea {
    width: 100%;
    padding: 3px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
}

.submit-btn {
    margin-top: 2rem;
    width: 100%;
}

.btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: end;
}

.close-btn {
    margin-top: 2rem;
    justify-content: end;
}
</style>