<template>
    <div class="card">
        <div class="card-top">
            <p class="title">{{ name }}</p>
            <p class="priority">{{ priority }}</p>
        </div>
        <div class="card-bottom">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
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
</style>