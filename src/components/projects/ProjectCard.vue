<template>
    <div class="card">
        <section class="card-top">
            <img src="../../assets/images/home-projectboard.jpg">
        </section>
        <section class="card-bottom">
            <div>
                <h4>Testname</h4>
            </div>
            <div class="card-details">
                <h5>1</h5>
                <h5>2</h5>
                <h5>3</h5>
                <h5>4</h5>
            </div>
        </section>
    </div>
</template>

<style scoped>
.card {
    background-color: var(--on-surface);
    width: fit-content;
    border-radius: 10px;
}

img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 200px;
}

.card-bottom {
    padding: 0.2rem 1rem 1rem 1rem;
    text-align: center;
}

.card-details {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 10px;
}
</style>