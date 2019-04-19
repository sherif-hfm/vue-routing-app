<template>
  <div>
    <div class="w3-bar w3-blue w3-border w3-card-4">
      <router-link  class="w3-bar-item w3-button w3-mobile" to="/" active-class="active" exact><i class="fa fa-home"></i>Home</router-link>
      <router-link  class="w3-bar-item w3-button w3-mobile" to="/Products" active-class="active">Products</router-link>
      <router-link  class="w3-bar-item w3-button w3-mobile" :to="{name:'Prod', params: { prodId: 123 }}" active-class="active">Products2</router-link>
      <router-link class="w3-bar-item w3-button w3-mobile" to="/Contacts" active-class="active">Contacts</router-link>    
      <router-link class="w3-bar-item w3-button w3-mobile" to="/User" active-class="active">User</router-link>    
      <router-link class="w3-bar-item w3-button w3-mobile" to="/User/10" active-class="active">User10</router-link>    
      <router-link class="w3-bar-item w3-button w3-mobile" to="/User/20" active-class="active">User20</router-link>    
      <router-link class="w3-bar-item w3-button w3-mobile" to="/Async1" active-class="active">Async1</router-link>    
    </div>
  <div class="w3-container w3-center">
    <transition name="slide">
      <router-view></router-view>
    </transition>
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
color: #000!important;
    background-color: #ccc!important;
}
</style>
