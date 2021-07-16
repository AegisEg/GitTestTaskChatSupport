<template>
    <div class="loading">
        <img :src="loading" alt="loading" />
    </div>
</template>
<script>
import loading from "../images/giphy.gif";
export default {
    name: "Loading",
    data() {
        return {
            loading,
        };
    },
};
</script>
<style>
.loading {
    text-align: center;
}
.loading img {
    width: 60px;
}
</style>