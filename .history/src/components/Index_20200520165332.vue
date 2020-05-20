<template>
    <div class="container">
        发的咖啡空间
        <p v-for="n in count" :key="n">{{n}}</p>
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