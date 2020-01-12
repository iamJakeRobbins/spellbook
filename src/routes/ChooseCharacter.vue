<template lang="html">
	<div id="body">
		<div id="home_main"class="container rounded">
			<div class="textfield">
			<p>
				Welcome to your Library, {{userName}}!
			</p>
			<p>
				Your casters are displayed below, select one to view their spellbooks
			</p>
			<div v-for="char in characters">
				<button class="btn btn-dark" :value="char.id" @click="selectCharacter">{{char.name}}</button>
			</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ChooseCharacter extends Vue {
	userName: string = "Jake";
	url: string = `http://localhost:3000/`;

	get characters()
	{
		return this.$store.state.characters;
	}

	async mounted(): Promise<any>
	{
		if (this.characters.length === 0) {
			let data = await fetch(`${this.url}chars`);
			let json = await data.json()
			this.addCharacters(json);
		}
	}

	addCharacters(data: object): void
	{
		this.$store.commit('addCharacters', data);
	}

	selectCharacter(e:any)
	{
		let val:number = e.target.value;
		this.$store.commit('updateSelectedCharacter', val);
	}

}
</script>

<style lang="css" scoped>
#body {
	background-image: url('../assets/background_books.jpg');
	background-size: 100vw;
	height: 100vh;
}
#home_main {
	background-color: lightgray;
	height:100vh;
	width:60vw;
}
.textfield {
	padding-top: 10px;
}
</style>
