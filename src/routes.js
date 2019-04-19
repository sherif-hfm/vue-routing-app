import Vue from 'vue'
import vRouter from 'vue-router'
import Home from './components/Home.vue'
import Products from './components/Products.vue'
import Contacts from './components/Contacts.vue'
import Info from './components/Info.vue'
import User from './components/User.vue'
import Contact from './components/Contact.vue'

export const appRoutes=[
    {path:'',component:Home},
    {path:'/home',component:Home},
    {path:'/Products',component:Products},
    {path:'/Products/:prodId',name:'Prod',component:Products},
    {path:'/Contacts',component:Contacts,children:[
        {path : 'info*',component:Info},
        {path : '*Contact/:cid',components:{default:Info,Contacts: Contact}},
    ]},
    {path:'/User',component:User,props: { prop1: 'attrs' }},
    {path:'/User/:uid',component:User,props: true},
    {path:'/User/:uid',component:User,props: true},
    {path:'/Async1',component:() => import(/* webpackChunkName: "components-group" */ './components/Async1.vue')},
    {path:'*',redirect:'/' },
    
    
    
]

