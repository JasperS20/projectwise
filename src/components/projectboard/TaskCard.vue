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
            <custom-button>Delete</custom-button>
            <form @submit.prevent="submitForm">
                <select onchange="submitForm()" class="input" name="status" id="status">
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
        name: {
            type: String,
            required: true,
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
    methods: {
        submitForm() {
            console.log('submit form');
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