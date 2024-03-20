<template>
    <div class="wrapper">
        <custom-modal class="modal">
            <h1>Create a new Project Board!</h1>
            <form>
                <div class="form-control">
                    <label for="name">Name of Project Board</label>
                    <input class="input" type="text" id="name"/>
                </div>
                <div class="form-control">
                    <label for="category">Category</label>
                    <input class="input" type="text" id="category"/>
                </div>
                <div class="form-control">
                    <label for="banner">Project Board Banner</label>
                    <input class="input" type="file" id="banner"/>
                </div>
                <div class="form-control">
                    <label for="members">Add Team Members</label>
                    <input class="input" type="text" id="members"/>
                </div>
                <custom-button class="submit-btn">Save</custom-button>
            </form>
            <custom-button class="close-btn" @click="closeModal">Close</custom-button>
        </custom-modal>
    </div>
</template>

<script>
import CustomModal from '../ui/CustomModal.vue';
import CustomButton from '../ui/CustomButton.vue';
export default {
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
    width: 60vw;
    height: 80vh;
    background-color: var(--on-surface);
    margin: auto;
    z-index: 2;
    box-shadow:  0px 1px 60px 0px rgba(166,46,195,0.4);
}

.modal h1 {
    text-align: center;
    color: var(--text-color);
}

.input {
    border: 1px solid var(--primary-color);
}

.submit-btn {
    margin-top: 2rem;
    width: 100%;
}

.close-btn {
    margin-top: 2rem;
    float: right;
}
</style>