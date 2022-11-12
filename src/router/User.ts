import LoginVue from "../views/user/Login.vue";
import RegisterVue from "../views/user/Register.vue";
import FindPwdVue from "../views/user/FindPwd.vue"
export default {
    name: "User",
    path: "/user",
    redirect: "/user/login",
    children: [
        {
            name: "Login",
            path: "login",
            component: LoginVue,
        },
        {
            name: "Register",
            path: "register",
            component: RegisterVue,
        },
        {
            name: "FindPwd",
            path: "findPwd",
            component: FindPwdVue,
        }
    ]
}