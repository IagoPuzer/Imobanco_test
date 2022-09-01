import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import Transactions from '../views/Transactions.vue'
import PayerDetails from '../views/PayerDetails.vue'

const routes =[
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path: '/transactions',
        name: 'Transactions',
        component: Transactions
    },
    {
        path: '/payerdetails/',
        nome: 'PayerDetails',
        component: PayerDetails
    }
        
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router