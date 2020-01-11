import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ChooseCharacter from '/Users/davidrobbins/coding/mythicSites/myspellbook/myspellbook/src/routes/ChooseCharacter.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/step',
    name: 'home',
    component: Home,
  },
  {
    path: '/char',
    name: 'CharacterChoice',
		component: ChooseCharacter,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
