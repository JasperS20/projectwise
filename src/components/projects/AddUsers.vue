<template>
    <div class="wrapper">
        <custom-modal class="modal">
            <h1>Invite a user to the board!</h1>
            <form @submit.prevent="sendInvite">
                <div class="form-control">
                    <label for="user">Email of the user</label>
                    <input class="input" type="text" id="user" v-model.trim="user"/>
                </div>
                <custom-button class="submit-btn">Send Invite</custom-button>
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
            user: '',
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
            const userData = this.$store.getters.userId;
            console.log(userData);
        },

        async sendInvite() {
            console.log('send Invite');
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
</style>