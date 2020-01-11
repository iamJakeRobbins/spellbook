<template>
  <div id="app">
		<!-- <div class="container-fluid appbackground"> -->




			<!-- <div class="container appbody"> -->
	    placeholder
			<page-header></page-header>
			<characters></characters>
			<spell-book></spell-book>
			<prepared/>
			<!-- </div> -->
		<!-- </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Characters from './components/Characters.vue';
import SpellBook from './components/SpellBook.vue';
import Prepared from './components/Prepared.vue';
import PageHeader from './components/Header.vue';

@Component({
  components: {
		Characters,
		SpellBook,
		Prepared,
		PageHeader,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.appbackground {
	/* height: 100vh; */
	background-color: black;

}
.appbody {
	/* height: 100vh; */
	width: 80%;
	background-color: white;
}
.header{
	position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left:0;           /* top left corner should start at leftmost spot */
  top:0;            /* top left corner should start at topmost spot */
  width:100vw;      /* take up the full browser width */
  z-index:200;  /* high z index so other content scrolls underneath */
  height:100px;

}
</style>
