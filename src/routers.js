import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import AddPage from './components/AddPage.vue'
import UpdatePage from './components/UpdatePage.vue'
import DeletePage from './components/DeletePage.vue'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/log-in'
    },
    {
        name: 'AddPage',
        component: AddPage,
        path: '/add'
    },
    {
        name: 'UpdatePage',
        component: UpdatePage,
        path: '/update/:id'
    },
    {
        name: 'DeletePage',
        component: DeletePage,
        path: '/delete'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;