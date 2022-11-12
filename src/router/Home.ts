import HomeVue from "../views/home/Home.vue";
export default {
    name: "Home",
    path: "/home",
    component: HomeVue,
    children: [
        {
            name: "Home",
            path: "/home",
            component: HomeVue,
        }
    ]
}