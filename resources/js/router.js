import VueRouter from "vue-router";
import Users from "./components/Users";
import Home from "./components/Home";

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Users
        },
        {
            path: '/home',
            component: Home
        }
    ],
    mode: 'history',
});
