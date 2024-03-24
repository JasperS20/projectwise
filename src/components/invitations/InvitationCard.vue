<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--primary-color);
    padding: 1rem;
    color: var(--text-color);
    font-weight: 500;
    background-color: var(--background-color);
    margin-bottom: 1rem;
}
</style>