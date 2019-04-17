import Vue from 'vue'
import vRouter from 'vue-router'
import Home from './components/Home.vue'
import Products from './components/Products.vue'
import Contacts from './components/Contacts.vue'
import Info from './components/Info.vue'
import User from './components/User.vue'

export const appRoutes=[
    {path:'',component:Home},
    {path:'/Products',component:Products},
    {path:'/Products/:prodId',name:'Prod',component:Products},
    {path:'/Contacts',component:Contacts,children:[
        {path : 'info',component:Info}
    ]},
    {path:'/User',component:User,props: { prop1: 'attrs' }},
    {path:'/User/:uid',component:User,props: true},
    {path:'/User/:uid',component:User,props: true},
    {path:'/Async1',component:() => import('./components/Async1.vue')},
    
    
    
]

