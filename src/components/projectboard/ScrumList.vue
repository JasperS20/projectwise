<template>
    <div>
        <div class="title">
            {{ title }}
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.title {
    width: 100%;
    background-color: white;
    padding: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: var(--primary-color);
    font-weight: 500;
}
</style>