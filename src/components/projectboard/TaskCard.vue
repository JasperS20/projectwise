<template>
    <div class="card">
        <div class="card-top">
            <p class="title">Test kaart</p>
            <p class="priority">Medium</p>
        </div>
        <div class="card-bottom">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corporis nam consectetur voluptas quod quia molestiae, cupiditate nihil recusandae rerum, voluptatum neque natus enim dolor dolorem deserunt expedita, accusamus nemo.</p>
        </div>
    </div>
</template>


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