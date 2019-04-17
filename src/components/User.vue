<template>
    <div>
        <h2>User</h2>
        <span>UserId:{{getUserId}}</span>
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
 updated(){
     console.log('updated');
      console.log(this.$attrs.prop1); // when route props: { prop1: 'attrs' }
 }
}
</script>

<style>

</style>
