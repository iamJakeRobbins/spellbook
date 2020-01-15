import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/routes/Home.vue';
import ChooseCharacter from '@/routes/ChooseCharacter.vue';
import Spellbook from '@/routes/Spellbook.vue';
import NewCharacter from '@/routes/NewCharacter.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/char',
    name: 'CharacterChoice',
		component: ChooseCharacter,
  },
	{
		path: '/spellbook',
		name: 'Spellbook',
		component: Spellbook,
	},
	{
		path: '/addCharacter',
		name: 'NewCaster',
		component: NewCharacter,
	}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
