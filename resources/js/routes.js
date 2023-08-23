const Welcome = () => import("./components/Welcome.vue");
const Signin = () => import("./components/signin/Signin.vue");
const Signup = () => import("./components/signup/Signup.vue");
const FlightList = () => import("./components/flight/List.vue");
const FlightDetail = () => import("./components/flight/Detail.vue");

export const routes = [
    {
        name: "home",
        path: "/",
        component: Welcome,
        props: true,
    },
    {
        name: "signin",
        path: "/signin",
        component: Signin,
    },
    {
        name: "signup",
        path: "/register",
        component: Signup,
    },
    {
        name: "flightList",
        path: "/flight",
        component: FlightList,
        props: true,
    },
    {
        name: "flightDetail",
        path: "/flight/:id/detail",
        component: FlightDetail,
        props: true,
    },
];
