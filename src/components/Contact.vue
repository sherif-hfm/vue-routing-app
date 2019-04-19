<template>
    <div>
        <h2>Contact{{myCid}}</h2>
    </div>
</template>

<script>
export default {
computed:{
    myCid(){
        return this.$route.params.cid
    }
}
}
</script>

<style>

</style>
