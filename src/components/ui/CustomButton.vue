<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null,
        },
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
        to: {
            type: String,
            required: false,
            default: false
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: var(--primary-color);
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 0.5rem;
  display: inline-block;
  transition: 0.3s all;
}

a:hover,
a:active,
button:hover,
button:active {
  transition: 0.3s all;
  background-color: var(--primary-color-hover);
  border: none;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border: none;
  color: #270041;
}

.delete {
  background-color: rgb(235, 66, 66);
  border: none;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active,
.delete:active,
.delete:hover {
  background-color: #edd2ff;
}
</style>