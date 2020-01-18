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
		<div class="aRow" v-if="classDetailsSet">
			<label>Character Class: </label>
			<!-- <input
			type="text"
			:value='charClass'
			@input="updateCharClass($event)"> -->

			<select @change="updateCharClass($event)">
				<option value="0">Select...</option>
				<option
				v-for="(item,key,index) in classDetails"
				:id="key"
				:value="key"> {{item}}</option>
			</select>

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
	classDetailsSet = false;

	get classDetails()
	{
		if(this.$store.state.classes) {
			this.classDetailsSet = true;
			return this.$store.state.classes;
		}
	}

	updateCharName($event)
	{
		this.charName = $event.target.value;
	}

	updateCharLevel(e)
	{
		this.charLevel = parseInt(e.target.value);
	}

	updateCharClass(e)
	{
		console.log(e.target.value)
		this.charClass = parseInt(e.target.value);
	}

	async submitCharacter()
	{
		let data:object = {
			name: this.charName,
			level: this.charLevel,
			class: this.charClass,
			id: this.charId,
		};
console.log(data);
		let route:string = this.charId ? `${this.url}updateCharacter` : `${this.url}submitCharacter`
		let request = await fetch(`${route}`, {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		})
}

	addClassesToStore(data)
	{
		this.$store.commit('getClasses', data);
	}

	async mounted()
	{
		if(!Object.keys(this.classDetails).length) {
		let data = await fetch(`${this.url}classDetails`);
		let json = await data.json();
		this.addClassesToStore(json);
		}
	}
}
</script>

<style lang="css" scoped>
.aRow {
	padding-top: .5em;
	padding-bottom: .5em;
}
</style>
