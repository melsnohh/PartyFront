import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'
import LoginPage from '@/views/LoginPage.vue'
import LogoutPage from '@/views/LogoutPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import store from '../store/index'
import LandingPage from '../views/Landing.vue'
import GuestPartyPage from '../views/GuestPartyPage.vue'
import AboutPage from '../views/About.vue'
import DJCreatePartyPage from '../views/DJCreateParty.vue'
import DJHomePage from '../views/DJHomePage.vue'


import GifPage from '../views/GifPage.vue'
import SplashPage from '../views/SplashPage.vue'
import DJPartyPage from '../views/DJPartyPage.vue'

Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    
    {
      path: '/gif',
      name: 'gif',
      component: GifPage
    },


    {
      path: '/landing',
      name: 'landing',
      component: LandingPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'splash',
      component: SplashPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/party/:partyId",
      name: "partyPage",
      component: GuestPartyPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/createparty",
      name: "DJCreateParty",
      component: DJCreatePartyPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/DJhomepage/:userName",
      name: "DJHomePage",
      component: DJHomePage,
      meta: {
        requiresAuth: false
      }
    },

    {
      path: "/DJparty/:partyId",
      name: "DJPartyPage",
      component: DJPartyPage,
      meta: {
        requiresAuth: false
      }

    }

  ]
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
