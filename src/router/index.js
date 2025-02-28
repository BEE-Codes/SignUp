import { createRouter, createWebHistory } from "vue-router";
import Home from '../Views/Signup.vue';
import Course1 from '../Views/Course1.vue';
import Course2 from '../Views/course2.vue';
// import PopUp from '../Views/PopUP.vue';
import Course3 from '../Views/Course3.vue';
import Course4 from '../Views/Course4.vue';
import Course5 from '../Views/Course5.vue';
import Course6 from '../Views/Course6.vue';
import Successful from '../Views/Successful.vue'; 


const routes = [
    {
      path: "/",
      component:Home
    },

    {
      path: "/course1",
      component: Course1 
    },
    {
      path: "/course2",
      component: Course2
    },
    // {
    //   path: "/popup",
    //   component:PopUp
    // },
    {
      path: "/course3",
      component:Course3
    },
    {
      path: "/course4",
      component:Course4
    },
    {
      path: "/Course5",
      component:Course5
    },
    {
      path: "/course6",
      component:Course6
    },
    {
      path: "/successful",
      component: Successful
    },
    
    
  // {
  //       path:'/sign-up',
  //       name: 'signup',
  //       component: Signup.vue
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
