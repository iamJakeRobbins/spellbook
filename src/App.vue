<template>
  <div id="app">
    placeholder
		<characters></characters>
		<spell-book></spell-book>
		<prepared/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Characters from './components/Characters.vue';
import SpellBook from './components/SpellBook.vue';
import Prepared from './components/Prepared.vue';

@Component({
  components: {
		Characters,
		SpellBook,
		Prepared,
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
  margin-top: 60px;
}
</style>
