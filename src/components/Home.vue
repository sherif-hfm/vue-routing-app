<template>
    <div>
        <h2>Home</h2>
        <button class="w3-button w3-green" @click="Navigate('Products')">Products</button>
        <button class="w3-button w3-green" @click="Navigate('Contacts')">Contacts</button>
    </div>
</template>

<script>
export default {
        name:'Home',
        methods:{
            Navigate(e){
            if(e==='Products')
                this.$router.push({path:'/Products'});
            if(e==='Contacts')
                this.$router.push({path:'/Contacts'});

            }
        }
}
</script>

<style>

</style>
