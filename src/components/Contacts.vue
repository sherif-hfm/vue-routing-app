<template>
    <div>
        <h2>Contacts</h2>
        <hr>
        <router-link class="w3-bar-item w3-button w3-mobile" tag='li' to='/Contacts/info' active-class="active">info</router-link>|    
        <router-link class="w3-bar-item w3-button w3-mobile" :to="{path : '/Contacts/Contact/1'}"  active-class="active">Contact1</router-link>    
        <router-link class="w3-bar-item w3-button w3-mobile" :to="{path : 'Contact/2'}" active-class="active">Contact2</router-link> 
        <router-link class="w3-bar-item w3-button w3-mobile" :to="{hash:'#extdata'}" active-class="active">ExtraData</router-link> 
        <hr>
        <router-view></router-view>
         <router-view name='Contacts'></router-view>
         <div style='height:700px'></div>
         <span id='extdata'>extra data</span>
    </div>
</template>

<script>
export default {
    name:'Contacts'
}
</script>

<style>

</style>
