<template>
    <div>
        <h2>User</h2>
        <span>UserId:{{getUserId}}</span><br>
        <button class="w3-button w3-red" @click="confirm()">Confirm</button>
    </div>
</template>

<script>
export default {
name:'User',
methods:{
},
data:function(){
return {
    //MyUid:this.$route.params.uid // not change if the params changed
    MyUid:this.uid // not change if the params changed this work when props: true
}
},
watch:{
    '$route'(to , from){
        this.MyUid=to.params.uid; //to watching changing on params
    }
}
,
computed:{
    getUserId()
        {
            console.log(this.$route.params);
            return this.$route.params.uid; //change if the params changed
            //return '1';
        }
},
methods:{
     confirm()
        {
            console.log('confirm');
            if(this.confirmLeave)
                this.confirmLeave();
        }
},
 updated(){
     console.log('updated');
      console.log(this.$attrs.prop1); // when route props: { prop1: 'attrs' }
 },
 beforeRouteEnter (to, from, next) {
     console.log('beforeRouteEnter');
      console.log(to);
     next();
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
  beforeRouteUpdate (to, from, next) {
      console.log('beforeRouteUpdate');
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.
  },
  beforeRouteLeave (to, from, next) {
      this.confirmLeave=next;
      console.log('beforeRouteLeave');
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  },
 
}
</script>

<style>

</style>
