<template>
    <div class="project-grid">
        <div class="project-grid-item">
            <scrum-list title="TODO"></scrum-list>
        </div>
        <div class="project-grid-item">
            <scrum-list title="In Progress"></scrum-list>
        </div>
        <div class="project-grid-item">
            <scrum-list title="Done"></scrum-list>
        </div>
    </div>
</template>

<script>
import ScrumList from '../../components/projectboard/ScrumList.vue';
export default {
    components: {
        ScrumList
    }
}
</script>

<style scoped>
.project-grid {
    display: grid;
    width: 100%;
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
    height: 80vh;
    background-color: var(--on-surface);
}
</style>