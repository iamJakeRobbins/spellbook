<template lang="html">
  <div id="body">
		<div id ="home_main" class="container rounded">
			<h2>Add Character Details</h2>
			<div class="aRow">
				<label>Name: </label>
				<input
				type="text"
				v-bind:value="charName"
				placeholder="Add Character Name"
				maxlength="20"
				@input="updateCharName($event)">
			</div>
			<div class="aRow">
				<label>Character Level: </label>
				<input
				type="number"
				min="1"
				max="20"
				:value='charLevel'
				@input=updateCharLevel($event)>
			</div>
			<div class="aRow" v-if="classDetailsSet">
				<label>Character Class: </label>
				<select @change="updateCharClass($event)">
					<option value="0">Select...</option>
					<option
					v-for="(item,key,index) in classDetails"
					:id="key"
					:value="key"> {{item}}</option>
				</select>
			</div>
			<div class="aRow">
				<button
				class="btn btn-primary"
				:value="charId"
				@click='submitCharacter'>
				Add Character
			</button>
			<button
			class="btn btn-danger"
			:value="charId"
			@click="cancel">
			Cancel
		</button>
			</div>
		</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewCharacter extends Vue {
	private charName: string = '';
	private charClass: number = 0;
	private charLevel: number = 0;
	private charId: any =  null;
	private url: string = `http://localhost:3000/`;
	private classDetailsSet: boolean = false;

	get classDetails(): object {
		if (this.$store.state.classes) {
			this.classDetailsSet = true;
			return this.$store.state.classes;
		}
		return {};
	}

	get selectedCharacter(): number|null {
		return this.$store.state.selectCharacter;
	}

	private updateCharName($event: any): void {
		this.charName = $event.target.value;
	}

	private updateCharLevel(e: any): void {
		this.charLevel = parseInt(e.target.value, 10);
	}

	private updateCharClass(e: any): void {
		this.charClass = parseInt(e.target.value, 10);
	}

	private async submitCharacter(): Promise<any> {
		const data: object = {
			name: this.charName,
			level: this.charLevel,
			class: this.charClass,
			id: this.charId,
		};
		// need to add validation before submitting
		const route: string = this.charId ? `${this.url}updateCharacter` : `${this.url}submitCharacter`;
		const request = await fetch(`${route}`, {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		});
		this.cancel();
	}

	private addClassesToStore(data: JSON): void {
		this.$store.commit('getClasses', data);
	}

	private cancel(): void {
		this.$router.push('/char');
	}

	private async mounted(): Promise<any> {
		console.log(this.selectedCharacter)
		if (this.selectedCharacter) {
			console.log('yep');
		}
		if (!Object.keys(this.classDetails).length) {
		const data = await fetch(`${this.url}classDetails`);
		const json = await data.json();
		this.addClassesToStore(<JSON> json);
		}
		if (this.selectedCharacter) {
			console.log('yep');
		}
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
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.aRow {
	padding-top: .5em;
	padding-bottom: .5em;
}
button {
	padding-left: .5em;
	padding-right: .5em;
}
</style>
