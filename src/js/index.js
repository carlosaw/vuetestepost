import App from './App.vue';
import Home from './Home.vue';
import Sobre from './Sobre.vue';
import User from './User.vue';
import UserPerfil from './UserPerfil.vue';
import UserPosts from './UserPosts.vue';
import NotFound from './NotFound.vue';
import Bitcoin from './Bitcoin.vue';

const router = new VueRouter({
    routes:[
        { path:'/', component:Home },
        { path:'/sobre', component:Sobre },
        { path:'/user/:id', component:User, children:[
            { path:'perfil', component:UserPerfil },// /user/1/perfil
            { path:'posts', component:UserPosts }    // /user/2/posts
        ]
        },
        { path:'/bitcoin', component:Bitcoin},
        { path:'*', component:NotFound }
    ]
});

new Vue({
    el:'#app',
    router:router,
    render:h => h(App)
});