<template lang="html">
  <div id="body">
		<div class="aRow">
			<label>Name: </label>
			<input
			type="text"
			v-bind:value="charName"
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
		<div class="aRow">
			<label>Character Class: </label>
			<!-- <input
			type="text"
			:value='charClass'
			@input="updateCharClass($event)"> -->
			<select>
			<option value=></option> </select>

		</div>
		<div class="aRow">
			<button class="btn btn-primary" :value="charId" @click='submitCharacter'>Add Character</button>
		</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewCharacter extends Vue {
	charName:string = '';
	charClass:string = '';
	charLevel:number = 0;
	charId:any =  null;
	url: string = `http://localhost:3000/`;

	updateCharName($event)
	{
		this.charName = $event.target.value;
	}

	updateCharLevel(e)
	{
		this.charLevel = e.target.value;
	}

	updateCharClass(e)
	{
		this.charClass = e.target.value;
	}

	async submitCharacter()
	{
		let data:object = {
			name: this.charName,
			level: this.charLevel,
			class: this.charClass,
			id: this.charId,
		};
		let route = this.charId ? `${this.url}submitCharacter` : `${this.url}updateCharacter`
		let request = await fetch(`${route}`, {
		  method: 'POST', // or 'PUT'
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		})
}

	addClassesToStore(data)
	{
		this.$store.commit('addClassesToStore', data);
	}

	async mounted()
	{
		//fetch select options for class list
		let data = fetch(`${this.url}classDetails`);
		this.addClassesToStore(data);
	}
}
</script>

<style lang="css" scoped>
.aRow {
	padding-top: .5em;
	padding-bottom: .5em;
}
</style>
