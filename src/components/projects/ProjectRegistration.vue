<template>
    <div class="wrapper">
        <custom-modal class="modal">
            <h1>Create a new Project Board!</h1>
            <form @submit.prevent="createProject">
                <div class="form-control">
                    <label for="name">Name of Project Board</label>
                    <input class="input" type="text" id="name" v-model.trim="name"/>
                </div>
                <div class="form-control">
                    <label for="category">Category</label>
                    <input class="input" type="text" id="category" v-model.trim="category"/>
                </div>
                <div class="form-control">
                    <label for="banner">Project Board Banner</label>
                    <input class="input" type="file" id="banner" v-on:change="banner"/>
                </div>
                <div class="form-control">
                    <label for="team_members">Add Team Members</label>
                    <input class="input" type="text" id="team_members" v-model.trim="team_members"/>
                </div>
                <custom-button class="submit-btn">Save</custom-button>
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
            name: '',
            category: '',
            banner: '',
            team_members: '',
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
    computed: {
        getUserMail() {
            return this.$store.getters.email;
        },

        getProjects() {
            return this.$store.getters['projects/projects'];
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
            const userData = this.$store.getters.userId;
            console.log(userData);
        },

        async createProject() {
            this.formIsValid = true;
            if (this.name === '' || this.category === '') {
                this.formIsValid = false;
                console.log('error');
                return;
            }

            try {
                await this.$store.dispatch('projects/createProject', {
                    name: this.name,
                    category: this.category,
                    banner: this.banner,
                    team_members: this.team_members,
                    created_at: new Date().getFullYear()
                });

                const project = this.getProjects.filter(project => project.name === this.name);
                const projectId = project[0].id;

                if (this.team_members.trim() !== '') {
                    await this.$store.dispatch('invitations/sendInvite', {
                        projectId: projectId,
                        requestedUser: this.getUserMail,
                        recipientUser: this.team_members,
                        boardName: this.name,
                        date: new Date().getDate() + '/' + new Date().getMonth()
                    });
                }
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
    width: 100%;
    height: fit-content;
    background-color: var(--on-surface);
    margin: 0 auto 2rem auto;
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

.btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: end;
}

.close-btn {
    margin-top: 2rem;
    justify-content: end;
}

@media only screen and (max-width: 600px) {
    .modal {
        padding: 1rem;
    }
    
    .form-control {
        width: 100px;
    }
}
</style>