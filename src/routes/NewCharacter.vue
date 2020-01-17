<template lang="html">
  <div id="body">
		<div class="aRow">
			<label>Name: </label>
			<input type="text" name="" :value='name'>
		</div>
		<div class="aRow">
			<label>Character Level: </label>
			<input type="number" min="1" max="20" :value='level'>
		</div>
		<div class="aRow">
			<label>Character Class: </label>
			<input type="text" name="" :value='charClass'>
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
	name:string = '';
	charClass:string = '';
	level:number = 0;
	charId:any =  null;
	url: string = `http://localhost:3000/`;

	submitCharacter(e)
	{
		if(e.target.value) {
			this.updateCharacter();
		} else {
			this.submitCharacter();
		}
	}

	async submitCharacter()
	{
		let data = {
			name: this.name,
			level: this.level,
			class: this.charClass,
		}
		let request = await fetch(`${this.url}submitCharacter`, {
		  method: 'POST', // or 'PUT'
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		})

}


	updateCharacter()
	{
		// doesn't need to do anything for now;
		console.log('we in it')
	}

	mounted()
	{
		console.log('here');
	}
}
</script>

<style lang="css" scoped>
.aRow {
	padding-top: .5em;
	padding-bottom: .5em;
}
</style>
