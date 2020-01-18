<template lang="html">
	<div id="body">
		<div id="home_main" class="container rounded">
			<div class="textfield">
			<p>
				Welcome to your Library, {{userName}}!
			</p>
			<p>
				Your casters are displayed below, select one to view their spellbooks
			</p>
			<div class="aRow" v-for="char in characters">
				<span class="nameSpan" @click="selectCharacter">{{char.name}}</span>
				<button
				class="btn btn-success"
				:value="char.id"
				@click="editChar">
				Edit
			</button>
				<button
				class="btn btn-danger"
				:value="char.id"
				@click="deleteCaster">
				Delete
			</button>
			</div>
			<div class="aRow">
				<button class="btn btn-primary" @click="newCaster">Add A Caster</button>
			</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ChooseCharacter extends Vue {
	private userName: string = 'Jake';
	private url: string = `http://localhost:3000/`;

	get characters(): [] {
		return this.$store.state.characters;
	}

	private addCharacters(data: object): void {
		this.$store.commit('addCharacters', data);
	}

	private selectCharacter(e: any): void {
		const val: number = e.target.value;
		this.$store.commit('updateSelectedCharacter', val);
		this.$router.push('/spellbook');
	}

	private editChar(e: any): void {
		const id: number = parseInt(e.target.value, 10);
		this.$store.commit('updateSelectedCharacter', id);
		this.newCaster();
	}

	private newCaster(): void {
		this.$router.push('/addCharacter');
	}

	private async deleteCaster(e: any): Promise<any> {
		const id: number = parseInt(e.target.value, 10);
		const data = await fetch(`${this.url}deleteCharacter`, {
			method: 'POST',
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
				id,
			}),
		});
		await this.refreshCharacterList();
	}

	private async refreshCharacterList() {
		const data = await fetch(`${this.url}chars`);
		const json = await data.json();
		await this.addCharacters(json);
	}

	private async mounted(): Promise<any> {
			this.refreshCharacterList();
			this.$store.commit('updateSelectedCharacter', null);
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
button {
	margin-left: .25em;
	margin-right: .25em;
}
.nameSpan {
	border-right: 2px solid black;
	padding-right: .25em;
}
.aRow {
	padding-top: .5em;
	padding-bottom: .5em;
	text-align: center;
}
</style>
