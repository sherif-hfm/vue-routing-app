import Vue from 'vue'
import vRouter from 'vue-router'
import Home from './components/Home.vue'
import Products from './components/Products.vue'
import Contacts from './components/Contacts.vue'

export const appRoutes=[
    {path:'',component:Home},
    {path:'/Products',component:Products},
    {path:'/Contacts',component:Contacts},
]

