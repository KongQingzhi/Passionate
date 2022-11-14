import HomeVue from "../views/home/Home.vue";
import ClassShowVue from "../views/home/main/Container/classShow/ClassShow.vue";
import ClassShowCommentsVue from "../views/home/main/Container/classShow/ClassShowComments.vue";
import CreationCenterVue from "../views/home/main/Container/interaction/CreationCenter.vue"
import PublishedVue from "../views/home/main/Container/interaction/Published.vue";
import LikeVue from "../views/home/main/Container/interaction/Like.vue";
import CollectVue from "../views/home/main/Container/interaction/Collect.vue";
import FocusVue from "../views/home/main/Container/interaction/Focus.vue";
import FansVue from "../views/home/main/Container/interaction/Fans.vue";
import InformationVue from "../views/home/main/Container/interaction/Information.vue";


export default {
    name: "Home",
    path: "/home",
    component: HomeVue,
    redirect: "/classShow",
    children: [
        {
            name: "ClassShow",
            path: "/classShow",
            redirect: "/classShow",
            children: [
                {
                    name: "ClassShow",
                    path: "/classShow",
                    component: ClassShowVue,
                },
                {
                    name: "ClassShowComments",
                    path: "classShowComments",
                    component: ClassShowCommentsVue,
                }]
        },
        {
            name: 'Interaction',
            path: '/interaction',
            redirect: "/creationCenter",
            children: [
                {
                    name: 'CreationCenter',
                    path: '/creationCenter',
                    component: CreationCenterVue
                },
                {
                    name: 'Published',
                    path: '/published',
                    component: PublishedVue
                },
                {
                    name: 'Like',
                    path: '/like',
                    component: LikeVue
                },
                {
                    name: 'Collect',
                    path: '/collect',
                    component: CollectVue
                },
                {
                    name: 'Focus',
                    path: '/focus',
                    component: FocusVue
                },
                {
                    name: 'Information',
                    path: '/information',
                    component: InformationVue
                },

            ]
        }
    ]
}