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
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ChooseCharacter extends Vue {
	userName: string = "Jake";

	async mounted()
	{
		let data = await fetch(`http://localhost:3000/`);
		let json = await data.json()
		console.log(json)
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
