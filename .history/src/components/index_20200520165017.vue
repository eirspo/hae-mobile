<template>
    <div class="container">
        <p v-for="n in count"></p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count:20
        }
    }
}
</script>