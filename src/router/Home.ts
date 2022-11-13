import HomeVue from "../views/home/Home.vue";
import ClassShowVue from "../views/home/main/Container/classShow/ClassShow.vue";
import ClassShowCommentsVue from "../views/home/main/Container/classShow/ClassShowComments.vue";
export default {
    name: "Home",
    path: "/home",
    component: HomeVue,
    redirect: "/classShow",
    children: [
        {
            name: "ClassShow",
            path: "/classShow",
            component: ClassShowVue,
        }, {
            name: "ClassShowComments",
            path: "/classShowComments",
            component: ClassShowCommentsVue,
        }
    ]
}