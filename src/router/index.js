import Login from '../views/Login.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import db from '../firebaseDb'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import( '../views/Register.vue'),
    },
{
        path: '/subscriptionsList',
        name: 'SubscriptionsList',
        component: () =>
            import('../components/SubscriptionsList.vue'),
        meta: {
            authRequired: true,
        },
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () =>
            import('../components/Edit.vue'),
        meta: {
            authRequired: true,
        },
    },
    {
        path: '/create',
        name: 'create',
        component: () =>
            import('../components/Create.vue'),
        meta: {
            authRequired: true,
        },
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
});
export default router;
