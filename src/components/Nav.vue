<template>
  <div>
    <div class="w3-bar w3-blue w3-border w3-card-4">
      <router-link  class="w3-bar-item w3-button w3-mobile" to="/" active-class="active" exact><i class="fa fa-home"></i>Home</router-link>
      <router-link  class="w3-bar-item w3-button w3-mobile" to="Products" active-class="active">Products</router-link>
      <router-link class="w3-bar-item w3-button w3-mobile" to="Contacts" active-class="active">Contacts</router-link>    
    </div>
  <div class="w3-container w3-center">
      <router-view></router-view>
  </div>
    
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
background-color: gray
}
</style>
